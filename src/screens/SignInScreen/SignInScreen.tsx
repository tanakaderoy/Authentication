import React, {useCallback, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Logo from '../../../assets/images/chelsea.png';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {SocialSignInButtons} from '../../components/SocialButton';
import useAuthNavigation from '../../hooks/useAuthNavigation';

interface SignInScreenProps {}

function SignInScreen({}: SignInScreenProps): React.ReactElement {
  const navigation = useAuthNavigation();
  const {height} = useWindowDimensions();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onSignInPressed = useCallback(() => {
    //validate user

    navigation.navigate('home');
  }, [navigation]);

  const onForgotPasswordPressed = useCallback(() => {
    navigation.navigate('forgotPassword');
  }, [navigation]);
  const onSignUpPressed = useCallback(() => {
    navigation.navigate('signUp');
  }, [navigation]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          text={username}
          setText={setUsername}
        />
        <CustomInput
          placeholder="Password"
          text={password}
          setText={setPassword}
          secure
        />

        <CustomButton title="Log In" onPress={onSignInPressed} />
        <CustomButton
          title="Forgot Password?"
          type="tertiary"
          onPress={onForgotPasswordPressed}
        />

        <SocialSignInButtons />

        <CustomButton
          title="Don't Have an Account? Create Account"
          type="tertiary"
          onPress={onSignUpPressed}
        />
      </View>
    </ScrollView>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
