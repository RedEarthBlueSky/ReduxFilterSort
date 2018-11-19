import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Help = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Help Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: '#448d7a',
    fontSize: 20,
    margin: 10,
    padding: 10,
    alignSelf: 'stretch',
  }
});

export default Help;
