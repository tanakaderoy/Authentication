import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {SocialSignInButtons} from '../../components/SocialButton';
import useAuthNavigation from '../../hooks/useAuthNavigation';

interface SignUpScreenProps {}

export default function SignUpScreen({}: SignUpScreenProps): React.ReactElement {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useAuthNavigation();

  const onSignUpPressed = useCallback(() => {
    navigation.navigate('confirmEmail');
  }, [navigation]);
  const onSignInPressed = useCallback(() => {
    navigation.navigate('signIn');
  }, [navigation]);
  const onTermsPressed = useCallback(() => {
    console.warn('terms');
  }, []);
  const onPrivacyPressed = useCallback(() => {
    console.warn('privacy policy');
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Username"
          text={username}
          setText={setUsername}
        />
        <CustomInput placeholder="email" text={email} setText={setEmail} />
        <CustomInput
          placeholder="Password"
          text={password}
          setText={setPassword}
          secure
        />
        <CustomInput
          placeholder="Confirm Password"
          text={passwordConfirm}
          setText={setPasswordConfirm}
          secure
        />

        <CustomButton title="Register" onPress={onSignUpPressed} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text onPress={onTermsPressed} style={styles.link}>
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text onPress={onPrivacyPressed} style={styles.link}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <SocialSignInButtons />

        <CustomButton
          title="Have an Account? Sign In"
          type="tertiary"
          onPress={onSignInPressed}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'orange',
  },
  textContainer: {
    marginVertical: 10,
  },
  text: {
    color: 'gray',
  },
});
