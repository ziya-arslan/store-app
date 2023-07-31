import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import TabNavigator, {TabsStackParamList} from './TabNavigator';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  ProductDetails: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
