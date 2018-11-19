import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffeb3',
    margin: 10,
    marginBottom: 20,
    marginTop: 40,
  },
  welcome: {
    alignSelf: 'stretch',
    backgroundColor: '#ffe28a',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default appStyles;
