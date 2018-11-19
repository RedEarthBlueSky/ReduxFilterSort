import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BookList from './BookList';

const DashBoard = () => {
  return (
    <View>
      <Text style={styles.textStyle}>DashBoard</Text>
      <BookList />
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

export default DashBoard;
