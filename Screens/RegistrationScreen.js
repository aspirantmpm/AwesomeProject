import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { useTogglePasswordVisibility } from '../hook/useTogglePasswordVisibility';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AvatarImage from '../assets/images/ava.jpg';

const initialState = {
  name: '',
  email: '',
  password: '',
};

SplashScreen.preventAutoHideAsync();

export const RegisterScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/images/PhotoBG.png')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.header} onLayout={onLayoutRootView}>
              <Image source={AvatarImage} style={styles.avatarImage} />
              <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 30, color: '#212121' }}>
                Реєстрація
              </Text>
            </View>
            <View style={{ ...styles.form, marginBottom: setIsShowKeyboard ? 32 : 43 }}>
              <View>
                <TextInput
                  onLayout={onLayoutRootView}
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  style={styles.input}
                  textAlign="left"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={value => setState(prevState => ({ ...prevState, name: value }))}
                  value={state.name}
                  // theme={{ colors: { primary: 'green', underlineColor: 'transparent' } }}
                  // onFocus={() => {
                  //   this.onFocus('rgba(5, 25, 55, 0.8)', 'rgba(0,0,0,0.2)');
                  // }}
                />
              </View>
              <View>
                <TextInput
                  onLayout={onLayoutRootView}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  style={styles.input}
                  textAlign="left"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                  value={state.email}
                />
              </View>
              <View>
                <TextInput
                  onLayout={onLayoutRootView}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  style={styles.input}
                  textAlign="left"
                  secureTextEntry={passwordVisibility}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
                  value={state.password}
                />
                <Pressable
                  style={styles.pressableToogle}
                  onPress={handlePasswordVisibility}
                  onLayout={onLayoutRootView}
                >
                  <Text style={styles.toogleTitle} name={rightIcon}>
                    {rightIcon}
                  </Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={keyboardHide}
            onLayout={onLayoutRootView}
          >
            <Text style={styles.btnTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <View style={styles.byLine} onLayout={onLayoutRootView}>
            {/* <Text style={styles.byLineTitle}>               */}
              <Pressable
                style={styles.byLineTitle}
                onPress={() => navigation.navigate('LoginScreen')}
              >
                <Text>Вже є акаунт? Увійти</Text>
              </Pressable>
            {/* </Text> */}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 549,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },

  form: {
    marginHorizontal: 16,
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
  btn: {
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
        borderColor: '#FF6C00',
      },
      android: {
        backgroundColor: '#FF6C00',
        borderColor: 'transparent',
      },
    }),
  },
  btnTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  // avatar: {
  //   // height: 120,
  //   // width: 120,

  //   top: -60,
  //   borderRadius: 16,
  //   justifyContent: 'center',
  //   // right: 0,
  //   // marginHorizontal: 120,
  //   alignItems: 'center',
  //   //
  // },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: 'absolute',
    top: -154,
    // justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  header: {
    alignItems: 'center',
    marginTop: 92,
    marginBottom: 32,
  },
  byLine: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 45,
    color: '#1B4371',
  },
  byLineTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  pressableToogle: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  toogleTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
