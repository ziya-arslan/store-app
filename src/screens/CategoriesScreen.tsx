import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';

const CategoriesScreen = () => {
  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <Text>CategoriesScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
