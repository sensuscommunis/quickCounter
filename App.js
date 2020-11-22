import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppHeader from './source/components/appHeader';
import Counter from './source/components/counter';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <AppHeader title="Few Seconds" />
      <View style={styles.container}>
        <Counter seconds={5}></Counter>
        <Counter seconds={8}></Counter>
        <Counter seconds={12}></Counter>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 40,
    marginBottom: 10,
    flex: 1,
  },
  container: {
    flex: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
