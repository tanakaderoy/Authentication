import {NavigationContainer} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ConfirmEmailScreen from '../../screens/ConfirmEmailScreen';
import HomeScreen from '../../screens/HomeScreen';
import NewPasswordScreen from '../../screens/NewPasswordScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';

type StackParamList = {
  signIn: undefined;
  signUp: undefined;
  confirmEmail: undefined;
  forgotPassword: undefined;
  newPassword: undefined;
  home: undefined;
};

export type AuthenticationScreenNavigationProp =
  NativeStackNavigationProp<StackParamList>;
const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="signIn" component={SignInScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="confirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="forgotPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="newPassword" component={NewPasswordScreen} />

        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
