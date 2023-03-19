import React, {useCallback} from 'react';
import {FieldValue, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useAuthNavigation from '../../hooks/useAuthNavigation';
import {usernameValidationRules} from '../../utils/validationRules';

interface ConfirmEmailScreenProps {}

export default function ConfirmEmailScreen({}: ConfirmEmailScreenProps): React.ReactElement {
  const navigation = useAuthNavigation();

  const onResendPressed = useCallback(() => {
    console.warn('resend');
  }, []);
  const onBackToSignInPressed = useCallback(() => {
    navigation.popToTop();
  }, [navigation]);
  const onConfirmPressed = useCallback(
    (data: FieldValue<{username?: string; code?: string}>) => {
      console.log(data);
      navigation.navigate('home');
    },
    [navigation],
  );

  const {control, handleSubmit} = useForm();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Your Email</Text>

        <Text>Username *</Text>
        <CustomInput
          name={'username'}
          rules={usernameValidationRules}
          control={control}
          placeholder="Username"
        />
        <Text>Confirmation Code *</Text>
        <CustomInput
          name="code"
          keyboardType="numeric"
          placeholder="Enter your confirmation code"
          control={control}
        />

        <CustomButton
          title="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
        />
        <CustomButton
          title="Resend Code"
          type="secondary"
          onPress={onResendPressed}
        />
        <CustomButton
          title="Back to Sign In"
          type="tertiary"
          onPress={onBackToSignInPressed}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
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
  buttonContainer: {
    flexDirection: 'row',
  },
});
