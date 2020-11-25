import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function AddCounter() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 30,
  },
});
