import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import useAuthNavigation from '../../hooks/useAuthNavigation';

interface ResetPasswordScreenProps {}

export default function ResetPasswordScreen({}: ResetPasswordScreenProps): React.ReactElement {
  const [username, setUsername] = useState('');
  const navigation = useAuthNavigation();

  const onBackToSignInPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const onSendPressed = useCallback(() => {
    console.warn('confirm');
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>

        <Text>Username *</Text>
        <CustomInput
          placeholder="Username"
          text={username}
          setText={setUsername}
        />

        <CustomButton title="Send" onPress={onSendPressed} />

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
