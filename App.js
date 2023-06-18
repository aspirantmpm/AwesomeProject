// import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { RegisterScreen } from './Screens/auth/RegistrationScreen';
// import { LoginScreen } from './Screens/auth/LoginScreen';
import { useRoute } from './router';
// import { Home } from './Screens/Home';
// import { PostsScreen } from './Screens/PostsScreen';
// import { CreatePostsScreen } from './Screens/CreatePostsScreen';
// import { CommentsScreen } from './Screens/CommentsScreen';
// import { ProfileScreen } from './Screens/ProfileScreen';
// import { MapScreen } from './Screens/MapScreen';

// const MainStack = createStackNavigator();

export default function App() {
  const routing = useRoute({});
  return (
    <NavigationContainer>
      {routing}
      {/* <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
      {/* <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} /> */}
      {/* </MainStack.Navigator> */}
    </NavigationContainer>
  );
}
