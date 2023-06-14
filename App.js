import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { RegisterForm } from './RegistrationScreen';

export default function App() {

const keyboardHide = () => {
  setIsShowKeyboard(true);
  Keyboard.dismiss();
  console.log(state);
  setState(initialState);
};

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('./assets/images/PhotoBG.png')}>
          {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
            <RegisterForm onPress={keyboardHide} />
            {/* <StatusBar style="auto" /> */}
          {/* </KeyboardAvoidingView> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
  
}

const styles = StyleSheet.create({
  container: {
    // alignContent: 'flex-end',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    // alignContent: 'flex-end',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
});
