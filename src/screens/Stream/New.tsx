import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Text, useTheme} from 'react-native-paper';
import {TimePickerModal, DatePickerInput} from 'react-native-paper-dates';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from '../../components/Header';
import TextInput from '../../components/Input/TextInput';
import {getCameraPermissions} from '../../utils/permissions';

const NewStreamScreen = () => {
  const [title, setTitle] = useState({value: '', error: ''});
  const [description, setDescription] = useState({value: '', error: ''});
  const [coverUrl, setCoverUrl] = useState({value: '', error: ''});
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [time, setTime] = useState({hours: 0, minutes: 0});
  const {colors} = useTheme();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBottomSheetContent = () => (
    <View
      style={{
        backgroundColor: colors.surface,
        padding: 16,
      }}>
      <Button
        mode="contained"
        onPress={async () => {
          try {
            const gallaeryRes = await launchImageLibrary({
              selectionLimit: 0,
              mediaType: 'photo',
              includeBase64: false,
            });
            console.log(gallaeryRes);
          } catch (error) {
            console.log(error);
          }
        }}
        style={{marginBottom: 10}}>
        Pick from gallery
      </Button>
      <Button
        mode="contained"
        onPress={async () => {
          try {
            await getCameraPermissions();
            const cameraRes = await launchCamera({
              saveToPhotos: true,
              mediaType: 'photo',
              includeBase64: false,
            });
            console.log(cameraRes);
          } catch (error) {
            console.log(error);
          }
        }}>
        Camera
      </Button>
    </View>
  );

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

  return (
    <>
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
          <Button onPress={() => setTimePickerVisible(true)}>Pick time</Button>
          <Text>
            {time.hours} : {time.minutes}
          </Text>
        </View>
        <Button onPress={() => bottomSheetRef.current?.snapTo(0)}>
          Upload Cover
        </Button>
      </KeyboardAwareScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['20%', '10%', 0]}
        initialSnap={2}
        borderRadius={10}
        renderContent={renderBottomSheetContent}
        enabledContentGestureInteraction={false}
      />
    </>
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
});

export default NewStreamScreen;
