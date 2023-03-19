import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

export default function App(): React.ReactElement {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
