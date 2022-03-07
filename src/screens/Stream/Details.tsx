import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IStream} from '../../models/stream';
import Loader from '../../components/Loader';
import {Text, useTheme} from 'react-native-paper';
import {convertToLocalDate} from '../../utils/date';

const StreamDetailsScreen = ({route}: any) => {
  const [stream, setStream] = useState<IStream | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {colors} = useTheme();

  async function getStream() {
    setIsLoading(true);
    try {
      const streamSnapshot = await firestore()
        .collection('Streams')
        .doc(route.params.uid)
        .get();
      if (streamSnapshot.exists) {
        const streamData = streamSnapshot.data() as IStream;
        setStream(streamData);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getStream();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  console.log(stream);

  if (stream) {
    console.log(
      'time',
      convertToLocalDate(stream.dateUtc.seconds, stream.dateUtc.nanoseconds),
    );
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={{uri: stream?.coverUrl}} style={styles.image} />
          <Text style={styles.title}>{stream?.title}</Text>
          <View style={styles.date}>
            <Icon name="calendar" size={30} color={colors.accent} />
            {/* <Text>{stream?.dateUtc.toDateString()}</Text> */}
            <Text>Time</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    // marginBottom: 10,
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default StreamDetailsScreen;
