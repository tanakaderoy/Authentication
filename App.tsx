import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/components/navigation';

export default function App(): React.ReactElement {
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
