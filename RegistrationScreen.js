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
import { useTogglePasswordVisibility } from './hook/useTogglePasswordVisibility';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

export const RegisterForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const [isReady, setIsReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Реєстрація</Text>
          </View>
          <View style={{ ...styles.form, marginBottom: setIsShowKeyboard ? 32 : 43 }}>
            <View>
              <TextInput
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                textAlign="left"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={value => setState(prevState => ({ ...prevState, name: value }))}
                value={state.name}
              />
            </View>
            <View>
              <TextInput
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
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                textAlign="left"
                secureTextEntry={passwordVisibility}
                onFocus={() => setIsShowKeyboard(true)}
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
        <TouchableOpacity activeOpacity={0.6} style={styles.btn} onPress={keyboardHide}>
          <Text style={styles.btnTitle}>Зареєструватися</Text>
        </TouchableOpacity>
        <View style={styles.byLine}>
          <Text style={styles.byLineTitle}>Вже є акаунт? Увійти</Text>
        </View>
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
  header: {
    alignItems: 'center',
    marginTop: 92,
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#212121',
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
