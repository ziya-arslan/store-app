import React, {useCallback} from 'react';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

export type TabsStackParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
  Account: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const TabNavigator = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
  };

  const homeIcon = useCallback((props: any) => {
    return <FeatherIcon name="home" {...props} />;
  }, []);
  const categoriesIcon = useCallback((props: any) => {
    return <FeatherIcon name="grid" {...props} />;
  }, []);
  const cartIcon = useCallback((props: any) => {
    return <FeatherIcon name="shopping-cart" {...props} />;
  }, []);
  const accountIcon = useCallback((props: any) => {
    return <FeatherIcon name="user" {...props} />;
  }, []);

  return (
    <TabsStack.Navigator screenOptions={screenOptions}>
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: homeIcon,
        }}
      />
      <TabsStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: categoriesIcon,
        }}
      />
      <TabsStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: cartIcon,
        }}
      />
      <TabsStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: accountIcon,
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabNavigator;
