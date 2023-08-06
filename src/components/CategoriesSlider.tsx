import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CategoryItem from './CategoryItem';
import {ImageURISource} from 'react-native';

const categoryData: Array<{
  title: string;
  image: ImageURISource;
}> = [
  {
    title: 'Clothing',
    image: {
      uri: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    },
  },
  {
    title: 'Electronics',
    image: {
      uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
  },
  {
    title: 'Jewelery',
    image: {
      uri: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    },
  },
  {
    title: 'Clothing',
    image: {
      uri: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    },
  },
  {
    title: 'Electronics',
    image: {
      uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
  },
  {
    title: 'Jewelery',
    image: {
      uri: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    },
  },
  {
    title: 'Clothing',
    image: {
      uri: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    },
  },
  {
    title: 'Electronics',
    image: {
      uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
  },
  {
    title: 'Jewelery',
    image: {
      uri: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    },
  },
];

const CategoriesSlider = () => {
  const {container} = styles;

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={container}>
        {categoryData.map((item, index) => {
          return (
            <CategoryItem
              key={index}
              handleSelect={() => handleSelect(index)}
              imageSrc={item.image}
              isSelected={selectedCategory === index}
              label={item.title}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesSlider;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 24,
  },
});
