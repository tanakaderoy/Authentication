import React, {useCallback} from 'react';
import {FieldValue, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {SocialSignInButtons} from '../../components/SocialButton';
import useAuthNavigation from '../../hooks/useAuthNavigation';
import {
  emailValidationRules,
  passwordValidationRules,
} from '../../utils/validationRules';

interface SignUpScreenProps {}

export default function SignUpScreen({}: SignUpScreenProps): React.ReactElement {
  const navigation = useAuthNavigation();

  const onSignUpPressed = useCallback(
    (data: FieldValue<{username?: string; password?: string}>) => {
      console.log(data);

      navigation.navigate('confirmEmail');
    },
    [navigation],
  );
  const onSignInPressed = useCallback(() => {
    navigation.navigate('signIn');
  }, [navigation]);
  const onTermsPressed = useCallback(() => {
    console.warn('terms');
  }, []);
  const onPrivacyPressed = useCallback(() => {
    console.warn('privacy policy');
  }, []);

  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput name="username" placeholder="Username" control={control} />
        <CustomInput
          placeholder="email"
          name="email"
          keyboardType="email-address"
          control={control}
          rules={emailValidationRules}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          rules={passwordValidationRules}
          secure
        />
        <CustomInput
          placeholder="Confirm Password"
          name="confirm"
          control={control}
          rules={{
            ...passwordValidationRules,
            validate: value => value === pwd || 'Passwords do not match',
          }}
          secure
        />

        <CustomButton
          title="Register"
          onPress={handleSubmit(onSignUpPressed)}
        />
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
