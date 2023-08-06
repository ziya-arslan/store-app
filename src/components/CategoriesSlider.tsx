import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const categoryData = [
  {
    title: 'Clothing',
    image: {
      url: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    },
  },
  {
    title: 'Electronics',
    image: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
  },
  {
    title: 'Jewelery',
    image: {
      url: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    },
  },
];

const CategoriesSlider = () => {
  const {container, title} = styles;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      contentContainerStyle={container}>
      {categoryData.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}>
            <Image
              style={{flex: 1, borderRadius: 16}}
              width={64}
              height={64}
              //   @ts-ignore
              source={item.image}
            />
            <Text style={title}>{item.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesSlider;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
