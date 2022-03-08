/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  ActivityIndicator,
  Dimensions,
  Share,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';

import RtcEngine, {
  ChannelProfile,
  ClientRole,
  RtcLocalView,
  RtcRemoteView,
  VideoRemoteState,
} from 'react-native-agora';
import {useTheme, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import TextInput from '../../components/Input/TextInput';
import {HomeParamList} from '../../navigation/types';
import {IComment} from '../../models/comment';
import {AuthContext} from '../../context/AuthProvider';

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

type NewStreamScreenProp = StackNavigationProp<HomeParamList, 'Stream'>;

const videoStateMessage = (state: any) => {
  switch (state) {
    case VideoRemoteState.Stopped:
      return 'Video turned off by Host';

    case VideoRemoteState.Frozen:
      return 'Connection Issue, Please Wait';

    case VideoRemoteState.Failed:
      return 'Network Error';
  }
};

async function requestCameraAndAudioPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (
      granted['android.permission.RECORD_AUDIO'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('You can use the cameras & mic');
    } else {
      console.log('Permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default function Live(props: any) {
  const isBroadcaster = props.route.params.type === 'create';
  const {loggedInUser} = useContext(AuthContext);

  const [joined, setJoined] = useState(false);
  const {colors} = useTheme();
  const navigation = useNavigation<NewStreamScreenProp>();
  const [broadcasterVideoState, setBroadcasterVideoState] = useState(
    VideoRemoteState.Decoding,
  );
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<IComment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const AgoraEngine = useRef();
  const init = async () => {
    // @ts-ignore
    AgoraEngine.current = await RtcEngine.create(
      '0515f5012fc044dcb72d74d75a04ebfc',
    );
    // @ts-ignore
    AgoraEngine.current.enableVideo();
    // @ts-ignore
    AgoraEngine.current.setChannelProfile(ChannelProfile.LiveBroadcasting);
    if (isBroadcaster) {
      // @ts-ignore
      AgoraEngine.current.setClientRole(ClientRole.Broadcaster);
    }

    // @ts-ignore
    AgoraEngine.current.addListener('RemoteVideoStateChanged', (uid, state) => {
      if (uid === 1) {
        setBroadcasterVideoState(state);
      }
    });

    // @ts-ignore
    AgoraEngine.current.addListener(
      'JoinChannelSuccess',
      // @ts-ignore
      (channel, uid, elapsed) => {
        console.log('JoinChannelSuccess', channel, uid, elapsed);
        setJoined(true);
      },
    );
  };

  // @ts-ignore
  const onSwitchCamera = () => AgoraEngine.current.switchCamera();

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraAndAudioPermission();
    }
    const uid = isBroadcaster ? 1 : 0;
    init().then(() =>
      // @ts-ignore
      AgoraEngine.current.joinChannel(
        null,
        props.route.params.channel,
        null,
        uid,
      ),
    );
    const subscriber = firestore()
      .collection('Streams')
      .doc(props.route.params.channel)
      .collection('Comments')
      .onSnapshot(querySnapshot => {
        const commentsArray: IComment[] = [];
        querySnapshot.forEach(documentSnapshot => {
          // console.log(documentSnapshot);
          commentsArray.push({
            ...(documentSnapshot.data() as IComment),
            key: documentSnapshot.id,
          });
        });
        setComments(commentsArray);
        setCommentsLoading(false);
        // console.log(comments);
        // see next step
      });

    return () => {
      // @ts-ignore
      AgoraEngine.current.destroy();
      subscriber();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderHost = () =>
    broadcasterVideoState === VideoRemoteState.Decoding ? (
      <RtcRemoteView.SurfaceView
        uid={1}
        style={styles.fullscreen}
        channelId={props.route.params.channel}
      />
    ) : (
      <View style={styles.broadcasterVideoStateMessage}>
        <Text style={styles.broadcasterVideoStateMessageText}>
          {videoStateMessage(broadcasterVideoState)}
        </Text>
      </View>
    );

  const renderLocal = () => (
    <RtcLocalView.SurfaceView
      style={styles.fullscreen}
      channelId={props.route.params.channel}
    />
  );

  const renderComments = () => {
    return comments.map(comment => {
      console.log('comment', comment.text);
      return (
        <View
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            // flex: 1,
            // flexDirection: 'row',
          }}
          key={comment.uid}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)', // 40% opaque
              flex: 1,
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text style={styles.userComment}>{comment.user.email}</Text>
            <Text style={styles.comment}>{comment.text}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <>
      <View style={styles.container}>
        {!joined ? (
          <>
            <ActivityIndicator
              size={60}
              color="#222"
              // style={styles.activityIndicator}
            />
            <Text style={styles.loadingText}>Joining Stream, Please Wait</Text>
          </>
        ) : (
          <>
            {isBroadcaster ? renderLocal() : renderHost()}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="close" size={30} color={colors.error} />
            </TouchableOpacity>
            {isBroadcaster && (
              <TouchableOpacity
                style={styles.switchCamera}
                onPress={onSwitchCamera}>
                <Icon name="ios-camera-reverse-sharp" size={30} color="#fff" />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{position: 'absolute', right: 5, bottom: 250}}
              onPress={() => {
                console.log('resseed');
              }}>
              <Icon name="heart-outline" size={30} color="#fff" />
              <Text style={{color: '#fff'}}>10.2k</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{position: 'absolute', right: 5, bottom: 180}}
              onPress={() => {
                console.log('pressed');
                // @ts-ignore
                // sheetRef.current.snapTo(0);
              }}>
              <Icon name="chatbubble-outline" size={30} color="#fff" />
              <Text style={{color: '#fff'}}>1.5k</Text>
            </TouchableOpacity>
            {commentsLoading ? (
              <ActivityIndicator />
            ) : (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  position: 'absolute',
                  bottom: 100,
                  width: '100%',
                }}>
                {renderComments()}
              </View>
            )}
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'transparent',
                left: 5,
                right: 5,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Comment"
                theme={{colors: {text: '#fff'}}}
                value={commentText}
                onChangeText={text => setCommentText(text)}
              />
              <TouchableOpacity
                style={{position: 'absolute', right: 0}}
                onPress={async () => {
                  if (commentText.length > 0) {
                    const uid = uuid.v4() as string;
                    console.log('resseed', commentText);
                    await firestore()
                      .collection('Streams')
                      .doc(props.route.params.channel)
                      .collection('Comments')
                      .doc(uid)
                      .set({
                        uid: uid,
                        user: loggedInUser,
                        streamId: props.route.params.channel,
                        text: commentText,
                        createdAt: firestore.Timestamp.now(),
                      });
                    setCommentText('');
                  }
                }}>
                <Icon
                  // style={{position: 'absolute', right: 0}}
                  name="paper-plane"
                  size={30}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={Comment}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={false}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#222',
  },
  fullscreen: {
    width: dimensions.width,
    height: dimensions.height,
  },
  closeButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  switchCamera: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  button: {
    width: 150,
    backgroundColor: '#fff',
    marginBottom: 50,
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 17,
  },
  broadcasterVideoStateMessage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  broadcasterVideoStateMessageText: {
    color: '#fff',
    fontSize: 20,
  },
  inputStyle: {
    backgroundColor: 'rgba(0,0,0,0.4)', // 40% opaque
    width: '90%',
  },
  comment: {
    color: '#fff',
  },
  userComment: {
    color: '#fff',
    marginRight: 10,
  },
});
