import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {styles} from './counter';

export default function AddCounter() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}
