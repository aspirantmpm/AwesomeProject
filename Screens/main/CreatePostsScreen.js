import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Touchable } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo);
  };

  const sendPhoto = () => {
    console.log(navigation);
    navigation.navigate('PostsScreen', { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image source={{ uri: photo }} style={{ height: 200, width: 200 }} />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
          <FontAwesome name="camera" size={24} color="#bdbdbd" />
        </TouchableOpacity>
      </Camera>
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
    height: '37.5%',
    borderRadius: 8,
    // width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
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
    borderColor: 'green',
    borderWidth: 1,
  },
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
});
