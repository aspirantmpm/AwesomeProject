import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Реєстрація</Text>
        </View>

        <View style={{ ...styles.form, marginBottom: setIsShowKeyboard ? 32 : 43 }}>
          <View>
            <TextInput
              placeholder="Логін"
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
              style={styles.input}
              textAlign="left"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
              value={state.password}
            />
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
    color: '#000',
    fontSize: 30,
    // marginLeft: 125,
    // fontFamily: 'Rancho-Regular',
  },
  byLine: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 78,
  },
});
