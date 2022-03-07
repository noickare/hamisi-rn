import React, {useContext, useState} from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button as PaperButton, Text, useTheme} from 'react-native-paper';
import {TimePickerModal, DatePickerInput} from 'react-native-paper-dates';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/Header';
import TextInput from '../../components/Input/TextInput';
import Button from '../../components/Buttons/Button';
import {inputvalidator} from '../../utils/validators';
import {AuthContext} from '../../context/AuthProvider';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamList} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

type NewStreamScreenProp = StackNavigationProp<HomeParamList, 'Stream'>;

const NewStreamScreen = () => {
  const {loggedInUser} = useContext(AuthContext);
  const {colors} = useTheme();
  const navigation = useNavigation<NewStreamScreenProp>();
  const [title, setTitle] = useState({value: '', error: ''});
  const [description, setDescription] = useState({value: '', error: ''});
  const [coverUrl, setCoverUrl] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [time, setTime] = useState({hours: 0, minutes: 0});
  const [isDateValid, setIsDateValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onDismiss = React.useCallback(() => {
    setTimePickerVisible(false);
  }, [setTimePickerVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}) => {
      setTimePickerVisible(false);
      setTime({hours: hours, minutes: minutes});
    },
    [setTimePickerVisible],
  );

  const _onSubmit = async () => {
    const titleError = inputvalidator(title.value);
    const descriptionError = inputvalidator(description.value);

    if (titleError || descriptionError || !date) {
      setTitle({...title, error: titleError});
      setDescription({...description, error: descriptionError});
      setIsDateValid(false);
      return;
    }
    try {
      setIsSubmitting(true);
      const streamId = uuid.v4().toString();
      await firestore()
        .collection('Streams')
        .doc(streamId)
        .set({
          uid: streamId,
          ownerId: loggedInUser?.uid,
          title: title.value,
          description: description.value,
          coverUrl: coverUrl,
          dateUtc:
            date && new Date(date.getTime() + date.getTimezoneOffset() * 60000),
          time: time,
          createdAt: firestore.Timestamp.now(),
        });
      setIsSubmitting(false);
      navigation.navigate('Stream', {uid: streamId});
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Header>Create Stream</Header>
        <TextInput
          label="Title"
          returnKeyType="next"
          value={title.value}
          onChangeText={text => setTitle({value: text, error: ''})}
          error={!!title.error}
          errorText={title.error}
          autoCapitalize="none"
        />
        <TextInput
          multiline
          label="description"
          returnKeyType="next"
          value={description.value}
          onChangeText={text => setDescription({value: text, error: ''})}
          error={!!description.error}
          errorText={description.error}
          autoCapitalize="none"
        />
        <DatePickerInput
          locale="en"
          label="Date"
          value={date}
          onChange={d => setDate(d)}
          inputMode="start"
          style={{width: '100%'}}
          mode="outlined"
          // other react native TextInput props
        />
        {!isDateValid ? (
          <Text style={[styles.error, {color: colors.error}]}>
            Please Select Date
          </Text>
        ) : null}
        <TimePickerModal
          visible={timePickerVisible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={time.hours} // default: current hours
          minutes={time.minutes} // default: current minutes
          label="Select time" // optional, default 'Select time'
          uppercase={false} // optional, default is true
          cancelLabel="Cancel" // optional, default: 'Cancel'
          confirmLabel="Ok" // optional, default: 'Ok'
          animationType="fade" // optional, default is 'none'
          locale="en" // optional, default is automically detected by your system
        />
        <View style={styles.time}>
          <PaperButton onPress={() => setTimePickerVisible(true)}>
            Pick time
          </PaperButton>
          <Text>
            {time.hours} : {time.minutes}
          </Text>
        </View>
        <PaperButton
          onPress={async () => {
            try {
              const galleryRes = await launchImageLibrary({
                selectionLimit: 0,
                mediaType: 'photo',
                includeBase64: false,
              });
              const imgNameArray =
                galleryRes.assets && galleryRes.assets[0].fileName?.split('.');
              const imgExt =
                imgNameArray && imgNameArray[imgNameArray.length - 1];
              const uploadPath = title.value
                ? 'covers/' + title.value + `-${uuid.v4()}` + `.${imgExt}`
                : 'covers/' + uuid.v4().toString() + `.${imgExt}`;
              const reference = storage().ref(uploadPath);
              if (galleryRes.assets) {
                await reference.putFile(galleryRes.assets[0].uri as string);
                const url = await storage().ref(uploadPath).getDownloadURL();
                setCoverUrl(url);
              }
            } catch (error) {
              console.log(error);
            }
          }}>
          Upload Cover
        </PaperButton>
        {coverUrl.length > 0 && (
          <Image source={{uri: coverUrl}} style={styles.image} />
        )}
        <Button
          loading={isSubmitting}
          style={styles.submit}
          mode="contained"
          onPress={_onSubmit}>
          Submit
        </Button>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 12,
  },
  submit: {
    marginBottom: 12,
  },
  error: {
    fontSize: 14,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default NewStreamScreen;
