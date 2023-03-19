import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {FieldValue} from 'react-hook-form/dist/types';
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
import {passwordValidationRules} from '../../utils/validationRules';

interface SignInScreenProps {}

function SignInScreen({}: SignInScreenProps): React.ReactElement {
  const navigation = useAuthNavigation();
  const {height} = useWindowDimensions();

  const {control, handleSubmit, formState} = useForm();

  console.log(formState.errors);

  const onSignInPressed = useCallback(
    (data: FieldValue<{username?: string; password?: string}>) => {
      //validate user
      console.log(data);
      navigation.navigate('home');
    },
    [navigation],
  );

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
          name={'username'}
          rules={passwordValidationRules}
          control={control}
          placeholder="Username"
        />

        <CustomInput
          name="password"
          control={control}
          rules={passwordValidationRules}
          placeholder="Password"
          secure
        />

        <CustomButton title="Sign In" onPress={handleSubmit(onSignInPressed)} />
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
