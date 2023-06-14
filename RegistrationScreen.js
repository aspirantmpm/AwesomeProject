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

const initialState = {
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  //   const togglePassword = () => {
  //     // When the handler is invoked
  //     // inverse the boolean state of passwordShown
  //     setPasswordShown(!passwordShown);
  //   };

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
                // type={passwordShown ? 'text' : 'password'}
              />
              <Pressable style={styles.pressableToogle} onPress={handlePasswordVisibility}>
                <Text style={styles.toogleTitle} name={rightIcon}>
                  {rightIcon}
                </Text>
              </Pressable>
              {/* <Button onPress={togglePassword} title="Learn More" color="#841584" /> */}
            </View>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity activeOpacity={0.6} style={styles.btn}>
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
    // alignItems: 'flex-start',
    //   alignContent: 'flex-end',
    // flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'flex-end',
    height: 549,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  //   image: {
  //     flex: 1,
  //     resizeMode: 'cover',
  //     justifyContent: 'center',
  //     // alignItems: 'center',
  //   },
  form: {
    // marginTop: 30,
    marginHorizontal: 16,
    gap: 16,
    // marginBottom: 43,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#f6f6f6',
    height: 50,
    borderRadius: 8,
    color: '#000',
    padding: 16,
    // paddingHorizontal: 20,
    fontSize: 16,
  },
  //   inputTitle: {
  //     color: '#CFFFC2',
  //     marginBottom: 10,
  //     fontSize: 18,
  //   },
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
    // backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#31E000',
    // borderColor: Platform.OS === 'ios' ? '#31E000' : 'transparent',
  },
  btnTitle: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 92,
    marginBottom: 32,
  },
  headerTitle: {
    // alignItems: 'center',
    // color: '#000',
    fontSize: 30,

    // marginLeft: 125,
    // fontFamily: 'Rancho-Regular',
  },
  byLine: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 78,
    color: '#1B4371',
  },
  byLineTitle: {
    color: '#1B4371',
    fontSize: 16,
  },
  pressableToogle: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  toogleTitle: {
    color: '#1B4371',
    fontSize: 16,
  },
});
