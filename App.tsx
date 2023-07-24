import React, {useMemo} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
// navigation
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';

const App = () => {
  const colorScheme = useColorScheme();

  const theme: Theme = useMemo(
    () =>
      colorScheme === 'dark'
        ? {
            ...DarkTheme,
            colors: {
              ...DefaultTheme.colors,
              background: '#f5f5f5',
              text: '#191919',
              border: '#D9D9D9',
              primary: '#FE6607',
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: '#f5f5f5',
              text: '#191919',
              border: '#D9D9D9',
              primary: '#FE6607',
            },
          },
    [colorScheme],
  );

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
    </NavigationContainer>
  );
};

export default App;
