import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {FieldValue} from 'react-hook-form/dist/types';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useAuthNavigation from '../../hooks/useAuthNavigation';

interface ResetPasswordScreenProps {}

export default function ResetPasswordScreen({}: ResetPasswordScreenProps): React.ReactElement {
  const {control, handleSubmit} = useForm();
  const navigation = useAuthNavigation();

  const onBackToSignInPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const onSendPressed = useCallback(
    (data: FieldValue<{username?: string}>) => {
      console.log(data);
      navigation.navigate('newPassword');
    },
    [navigation],
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>

        <Text>Username *</Text>
        <CustomInput placeholder="Username" name="username" control={control} />

        <CustomButton title="Send" onPress={handleSubmit(onSendPressed)} />

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
