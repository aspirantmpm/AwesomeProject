import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AvatarImage from '../../assets/images/ava.jpg';

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Image source={AvatarImage} style={styles.avatarImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Vadym Tishchenko</Text>
          <Text style={styles.userEmail}>vadym@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  post: {
    marginTop: 32,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 8,
  },
  userName: {
    color: '#212121',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    fontWeight: 700,
  },
  userEmail: {
    color: 'rgba(33, 33, 33, 0.8)',
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
  },
});
