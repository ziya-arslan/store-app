import React, {useMemo} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import {ThemeProps} from './src/interfaces/Theme';

const App = () => {
  const colorScheme = useColorScheme();

  const theme: ThemeProps = useMemo(
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
              buttonBackground: '#EDEDED',
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
              buttonBackground: '#EDEDED',
            },
          },
    [colorScheme],
  );

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
