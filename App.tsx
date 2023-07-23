import React, {useCallback} from 'react';
import {StatusBar, View} from 'react-native';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const App = () => {
  const homeIcon = useCallback(() => {
    return <FeatherIcon name="home" size={24} color="#604AE6" />;
  }, []);
  const categoriesIcon = useCallback(() => {
    return <FeatherIcon name="grid" size={24} color="#604AE6" />;
  }, []);
  const cartIcon = useCallback(() => {
    return <FeatherIcon name="shopping-cart" size={24} color="#604AE6" />;
  }, []);
  const accountIcon = useCallback(() => {
    return <FeatherIcon name="user" size={24} color="#604AE6" />;
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            options={{
              // @ts-ignore
              tabBarIcon: homeIcon,
            }}
            component={PlaceholderScreen}
          />
          <Tab.Screen
            name="Upload"
            options={{
              // @ts-ignore
              tabBarIcon: categoriesIcon,
            }}
            component={PlaceholderScreen}
          />
          <Tab.Screen
            name="Chat"
            options={{
              // @ts-ignore
              tabBarIcon: cartIcon,
            }}
            component={PlaceholderScreen}
          />
          <Tab.Screen
            name="Settings"
            options={{
              // @ts-ignore
              tabBarIcon: accountIcon,
            }}
            component={PlaceholderScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

// ------------------------------------------------------------------

const PlaceholderScreen = () => {
  return <View style={{flex: 1, backgroundColor: '#604AE6'}} />;
};

export default App;
