import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import AvatarImage from '../../assets/images/ava.jpg';

// import { Button } from 'react-native-web';

export const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
    console.log('route.params', route.params);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params]);
  // };
  console.log(posts); 

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Image source={AvatarImage} style={styles.avatarImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Vadym Tishchenko</Text>
          <Text style={styles.userEmail}>vadym@gmail.com</Text>
        </View>
      </View>
      <View style={styles.photoPost}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginTop: 32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: 350, height: 250, backgroundColor: '#000' }}
              />
            </View>
          )}
        />
      </View>      
      <Button title="go to map" onPress={() => navigation.navigate('MapScreen')} />
      <Button title="go to Comments" onPress={() => navigation.navigate('CommentsScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
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
  photoPost: {
    flex: 1,
    justifyContent: 'center',
  },  
});
