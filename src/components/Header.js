import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Switch, Router, Route } from 'react-router-native';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text>Header</Text>
      <Text>Book Management Application</Text>
      <View>
        <Text>My Router Will Go Here</Text>
        <Button
          title='Change Page'
          onPress={() => console.log('Change Page Pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fb2e01',
    padding: 10,
  }
});

export default Header;
