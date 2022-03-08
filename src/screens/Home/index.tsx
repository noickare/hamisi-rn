import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {HomeParamList} from '../../navigation/types';
import {IStream} from '../../models/stream';
import Loader from '../../components/Loader';

type HomeScreenProp = StackNavigationProp<HomeParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const [streams, setStreams] = useState<IStream[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getStreams() {
    setIsLoading(true);
    try {
      const streamSnapshot = await firestore().collection('Streams').get();

      streamSnapshot.forEach(fireStream => {
        return setStreams([...streams, fireStream.data() as IStream]);
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getStreams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={streams}
        renderItem={renderStreamItem}
        keyExtractor={stream => stream.uid}
      /> */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Stream', {
            channel: streams[0].uid,
            type: 'create',
          })
        }
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {streams[0] && <Text>{streams[0].title}</Text>}
      </TouchableOpacity>
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: 16,
        }}
        onPress={() => navigation.navigate('NewStream')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
