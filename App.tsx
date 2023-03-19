import {withAuthenticator} from 'aws-amplify-react-native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/components/navigation';

function App(): React.ReactElement {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default withAuthenticator(App);
