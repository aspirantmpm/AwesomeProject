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
import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AvatarImage from '../../assets/images/ava.jpg';
import AddImage from '../../assets/images/add.png';
import AddedImage from '../../assets/images/added.png';

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
  const [isNameActive, setNameIsActive] = useState(false);
  const [isEmailActive, setEmailIsActive] = useState(false);
  const [isPassActive, setPassIsActive] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
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

  const handleNameFocus = () => {
    setNameIsActive(true);
  };

  const handleNameBlur = () => {
    setNameIsActive(false);
  };

  const handleNameOnFocus = () => {
    setIsShowKeyboard(true);
    handleNameFocus();
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
    <ImageBackground style={styles.image} source={require('../../assets/images/PhotoBG.png')}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={{ ...styles.container, height: isShowKeyboard ? 375 : 549 }}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.header} onLayout={onLayoutRootView}>
              <Image source={AvatarImage} style={styles.avatarImage} />
              <Pressable style={styles.pressableAddImage}>
                <Image source={AvatarImage ? AddedImage : AddImage} style={styles.addImage} />
              </Pressable>
              <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 30, color: '#212121' }}>
                Реєстрація
              </Text>
            </View>
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 43 }}>
              <View>
                <TextInput
                  onLayout={onLayoutRootView}
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  style={[styles.input, isNameActive ? styles.activeInput : null]}
                  onFocus={handleNameOnFocus}
                  onBlur={handleNameBlur}
                  textAlign="left"
                  onChangeText={value => setState(prevState => ({ ...prevState, name: value }))}
                  value={state.name}
                />
              </View>
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
          {!isNameActive && (
            <View style={styles.down}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btn}
                onPress={keyboardHide}
                onLayout={onLayoutRootView}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <View style={styles.byLine} onLayout={onLayoutRootView}>
                <View style={styles.byLineContainer}>
                  <Text style={styles.byLineTitle}>Вже є акаунт?&nbsp;</Text>
                  <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.insideLineTitle}>Увійти</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
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
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: 'absolute',
    top: -154,
    backgroundColor: '#f6f6f6',
  },
  header: {
    alignItems: 'center',
    marginTop: 92,
    marginBottom: 32,
  },
  byLine: {
    alignItems: 'center',
  },
  byLineContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  byLineTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  insideLineTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textDecorationLine: 'underline',
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
  addImage: {
    position: 'absolute',
    width: 25,
    height: 25,
    top: -78,
    right: -72,
  },
});
