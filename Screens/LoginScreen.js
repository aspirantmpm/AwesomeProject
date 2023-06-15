import {
  //   Button,
  StyleSheet,
  Text,
  View,
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
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const initialState = {
  email: '',
  password: '',
};

SplashScreen.preventAutoHideAsync();

export const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [isEmailActive, setEmailIsActive] = useState(false);
    const [isPassActive, setPassIsActive] = useState(false);

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
  };

  const handleEmailFocus = () => {
    setEmailIsActive(true);
  };

  const handleEmailBlur = () => {
    setEmailIsActive(false);
  };

  const handleEmailOnFocus = () => {
    setIsShowKeyboard(true);
    handleEmailFocus();
  };

  const handlePassFocus = () => {
    setPassIsActive(true);
  };

  const handlePassBlur = () => {
    setPassIsActive(false);
  };

  const handlePassOnFocus = () => {
    setIsShowKeyboard(true);
    handlePassFocus();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground style={styles.image} source={require('../assets/images/PhotoBG.png')}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.header} onLayout={onLayoutRootView}>
              <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 30, color: '#212121' }}>
                Увійти
              </Text>
            </View>
            <View style={{ ...styles.form, marginBottom: setIsShowKeyboard ? 32 : 43 }}>
              <View>
                <TextInput
                  onLayout={onLayoutRootView}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  style={[styles.input, isEmailActive ? styles.activeInput : null]}
                  onFocus={handleEmailOnFocus}
                  onBlur={handleEmailBlur}
                  textAlign="left"
                  onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                  value={state.email}
                />
              </View>
              <View>
                <TextInput
                  onLayout={onLayoutRootView}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  style={[styles.input, isPassActive ? styles.activeInput : null]}
                  onFocus={handlePassOnFocus}
                  onBlur={handlePassBlur}
                  textAlign="left"
                  secureTextEntry={passwordVisibility}
                  onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
                  value={state.password}
                />
                <Pressable style={styles.pressableToogle} onPress={handlePasswordVisibility}>
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
            <Text style={styles.btnTitle}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.byLine} onLayout={onLayoutRootView}>
            <Text style={styles.byLineTitle}>
              <Pressable
                style={styles.byLineTitle}
                onPress={() => navigation.navigate('RegisterScreen')}
              >
                <Text>Немає акаунту? Зареєструватись</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
    height: 489,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignContent: 'flex-end',
    // Bottom: -50,
  },
  image: {
    // alignContent: 'flex-end',
    flex: 1,
    resizeMode: 'cover',
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
  activeInput: {
    borderColor: '#FF6C00',
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
  header: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  byLine: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 111,
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