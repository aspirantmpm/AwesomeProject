import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useFonts } from 'expo-font';
// import * as Permissions from 'expo-permissions';

const initialState = {
  photoName: '',
  locality: '',
};

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
    const [state, setState] = useState(initialState);
    const [isPhotoNameActive, setPhotoNameIsActive] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo);
  };

  const sendPhoto = () => {
    console.log(navigation);
    setPhoto(null);
    setCamera(null);
    navigation.navigate('DefaultScreen', { photo });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('latitude', location.coords.latitude);
      console.log('longitude', location.coords.longitude);
    })();
  }, []);
  // useEffect(() => {
  //   if (!photo) {
  //     setCamera(null); // Автоматичне увімкнення камери при наявності фото
  //   }
  // }, [photo]);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    //   console.log(state);
    //   setState(initialState);
    //   navigation.navigate('Home');
  };

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handlePhotoNameFocus = () => {
    setPhotoNameIsActive(true);
  };

  const handlePhotoNameBlur = () => {
    setPhotoNameIsActive(false);
  };

  const handlePhotoNameOnFocus = () => {
    setIsShowKeyboard(true);
    handlePhotoNameFocus();
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image source={{ uri: photo }} style={{ height: 240, aspectRatio: 4 / 3 }} />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
          <FontAwesome name="camera" size={24} color="#bdbdbd" />
        </TouchableOpacity>
      </Camera>
      {photo ? (
        <Text style={styles.photoCaption}>Редагувати фото</Text>
      ) : (
        <Text style={styles.photoCaption}>Завантажити фото</Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          onLayout={onLayoutRootView}
          placeholder="Назва"
          placeholderTextColor="#BDBDBD"
          style={[styles.input, isPhotoNameActive ? styles.activeInput : null]}
          onFocus={handlePhotoNameOnFocus}
          onBlur={handlePhotoNameBlur}
          textAlign="left"
          onChangeText={value => setState(prevState => ({ ...prevState, photoName: value }))}
          value={state.photoName}
        />
        <TextInput
          onLayout={onLayoutRootView}
          placeholder="Місцевість"
          placeholderTextColor="#BDBDBD"
          style={[styles.input, isPhotoNameActive ? styles.activeInput : null]}
          onFocus={handlePhotoNameOnFocus}
          onBlur={handlePhotoNameBlur}
          textAlign="left"
          onChangeText={value => setState(prevState => ({ ...prevState, photoName: value }))}
          value={state.photoName}
        />
      </View>
      <TouchableOpacity
        onPress={sendPhoto}
        style={[photo ? styles.activePublishButton : styles.disActivePublishButton]}
      >
        <Text style={[photo ? styles.activePublish : styles.disActivePublish]}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',

    // borderRadius: 130,
  },
  camera: {
    marginTop: 32,
    height: 240,
    borderRadius: 18,
    // width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cameraButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
  },
  takePhotoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 8,
    // borderColor: 'green',
    // borderWidth: 1,
    // width: 343,
    // height: 0,
    // paddingBottom: '75%',
  },
  createPhoto: {},
  disActivePublishButton: {
    marginHorizontal: 16,
    backgroundColor: '#f6f6f6',
    height: 51,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  activePublishButton: {
    marginHorizontal: 16,
    backgroundColor: '#ff6C00',
    height: 51,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  disActivePublish: {
    color: '#bdbdbd',
    fontSize: 16,
  },
  activePublish: {
    color: '#fff',
    fontSize: 16,
  },
  photoCaption: {
    color: '#bdbdbd',
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 8,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    gap: 16,
  },
  input: {
    
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#f6f6f6',
    height: 50,
    borderRadius: 8,
    color: '#000',
    padding: 16,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    
  },
  activeInput: {
    borderColor: '#FF6C00',
  },
});
