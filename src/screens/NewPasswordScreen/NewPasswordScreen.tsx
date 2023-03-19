import React, {useCallback} from 'react';
import {FieldValue, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useAuthNavigation from '../../hooks/useAuthNavigation';
import {passwordValidationRules} from '../../utils/validationRules';

interface NewPasswordScreenProps {}

export default function NewPasswordScreen({}: NewPasswordScreenProps): React.ReactElement {
  const {control, handleSubmit} = useForm();
  const navigation = useAuthNavigation();
  const onBackToSignInPressed = useCallback(() => {
    console.warn('back to sign in');
    navigation.navigate('signIn');
  }, [navigation]);
  const onSubmitPressed = useCallback(
    (data: FieldValue<{code?: string; newPassword?: string}>) => {
      console.log(data);
      navigation.navigate('signIn');
    },
    [navigation],
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>

        <Text>Code *</Text>
        <CustomInput
          placeholder="code"
          keyboardType="numeric"
          name="code"
          control={control}
        />
        <Text>New Password *</Text>
        <CustomInput
          placeholder="Enter your new password"
          name="newPassword"
          control={control}
          rules={passwordValidationRules}
          secure
        />

        <CustomButton title="Submit" onPress={handleSubmit(onSubmitPressed)} />

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
