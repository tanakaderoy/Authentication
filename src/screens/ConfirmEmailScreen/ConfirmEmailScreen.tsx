import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useAuthNavigation from '../../hooks/useAuthNavigation';

interface ConfirmEmailScreenProps {}

export default function ConfirmEmailScreen({}: ConfirmEmailScreenProps): React.ReactElement {
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const navigation = useAuthNavigation();

  const onResendPressed = useCallback(() => {
    console.warn('resend');
  }, []);
  const onBackToSignInPressed = useCallback(() => {
    navigation.popToTop();
  }, [navigation]);
  const onConfirmPressed = useCallback(() => {
    navigation.navigate('home');
  }, [navigation]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Your Email</Text>

        <Text>Username *</Text>
        <CustomInput
          placeholder="Username"
          text={username}
          setText={setUsername}
        />
        <Text>Confirmation Code *</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          text={code}
          setText={setCode}
        />

        <CustomButton title="Confirm" onPress={onConfirmPressed} />
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
