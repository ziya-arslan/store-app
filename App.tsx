import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar barStyle={'light-content'} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
