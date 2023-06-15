import { StyleSheet, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { Home } from './Screens/HomeScreen';

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
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
