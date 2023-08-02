import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';

const CategoriesScreen = () => {
  const {container} = styles;

  return (
    <ScrollView style={container}>
      <Text>CategoriesScreen</Text>
    </ScrollView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
