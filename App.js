// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  // Text,
  // View,
  // ImageBackground,
  Keyboard,
  // TouchableWithoutFeedback,
} from 'react-native';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { Home } from './Screens/HomeScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

const MainStack = createStackNavigator();

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <NavigationContainer style={styles.navigatorContainer}>
      {/* <TouchableWithoutFeedback onPress={keyboardHide}> */}
      {/* <View style={styles.container}>
          <ImageBackground style={styles.image} source={require('./assets/images/PhotoBG.png')}> */}
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          // options={{ title: 'Welcome' }}
        />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        {/* <MainStack.Screen name="PostScreen" component={PostScreen} /> */}
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
      {/* </ImageBackground>
        </View> */}
      {/* </TouchableWithoutFeedback> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignContent: 'flex-end',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  image: {
    // alignContent: 'flex-end',
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  navigatorContainer: {
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignContent: 'flex-end',
  },
});
