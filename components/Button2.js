import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
const Button2 = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text 
        style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 300,
    backgroundColor: "#1652f0",
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18,
  },
});

export default Button2;