import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import Header from './src/components/Header';
import appStyles from './src/styles/AppStyles';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={appStyles.container}>
        <Header />
        <Text style={appStyles.welcome}>React Native Redux Filter </Text>
        <Text>{instructions}!</Text>
      </View>
    );
  }
}

const instructions = Platform.select({
  ios: 'iOS Specific',
  android:
    'Android Specific',
});

export default App;
