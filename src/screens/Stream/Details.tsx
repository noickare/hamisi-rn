import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IStream} from '../../models/stream';
import Loader from '../../components/Loader';
import {Text, useTheme} from 'react-native-paper';
import moment from 'moment';

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

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={{uri: stream?.coverUrl}} style={styles.image} />
          <Text style={styles.title}>{stream?.title}</Text>
          <View style={styles.date}>
            <Icon name="calendar" size={30} color={colors.onSurface} />
            <Text style={styles.dateString}>
              {moment
                .utc(stream?.dateUtc)
                .local()
                .format('MMMM Do, YYYY h:mma')}
            </Text>
          </View>
          <Text style={[styles.aboutHeader, {color: colors.primary}]}>
            Description
          </Text>
          <Text style={styles.description}>{stream?.description}</Text>
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
  dateString: {
    fontSize: 20,
    marginLeft: 10,
  },
  aboutHeader: {
    fontSize: 25,
    marginLeft: 10,
  },
  description: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default StreamDetailsScreen;
