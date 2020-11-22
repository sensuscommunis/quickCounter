import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

export default function Counter({seconds}) {
  const [rest, setRest] = useState(seconds);
  const [isCounting, setCounting] = useState(false);

  countdown = () => {
    setTimeout(() => {
      if (rest > 1) {
        setCounting(true);
        setRest(rest - 1);
        countdown();
      } else {
        Alert.alert('Times up!');
        setRest(seconds);
        setCounting(false);
      }
    }, 1000);
  };

  return (
    <TouchableOpacity
      disabled={isCounting}
      onPress={countdown}
      style={styles.container}>
      <Text style={styles.text}>{`${rest} s`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    backgroundColor: 'darkcyan',
  },
  text: {
    fontSize: 60,
    color: 'white',
  },
});
