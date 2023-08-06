import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import CategoriesSlider from '../components/CategoriesSlider';
import CategoryItem from '../components/CategoryItem';

const testSubCategoriesData = [
  {
    label: 'T-Shirt',
    imageSrc: {
      uri: 'https://as1.ftcdn.net/v2/jpg/02/71/49/08/1000_F_271490868_9EzWzSbhdgcrRM12o5iMUBbWHX5Zptgp.jpg',
    },
  },
  {
    label: 'T-Shirt',
    imageSrc: {
      uri: 'https://as1.ftcdn.net/v2/jpg/02/71/49/08/1000_F_271490868_9EzWzSbhdgcrRM12o5iMUBbWHX5Zptgp.jpg',
    },
  },
  {
    label: 'T-Shirt',
    imageSrc: {
      uri: 'https://as1.ftcdn.net/v2/jpg/02/71/49/08/1000_F_271490868_9EzWzSbhdgcrRM12o5iMUBbWHX5Zptgp.jpg',
    },
  },
  {
    label: 'T-Shirt',
    imageSrc: {
      uri: 'https://as1.ftcdn.net/v2/jpg/02/71/49/08/1000_F_271490868_9EzWzSbhdgcrRM12o5iMUBbWHX5Zptgp.jpg',
    },
  },
  {
    label: 'T-Shirt',
    imageSrc: {
      uri: 'https://as1.ftcdn.net/v2/jpg/02/71/49/08/1000_F_271490868_9EzWzSbhdgcrRM12o5iMUBbWHX5Zptgp.jpg',
    },
  },
  {
    label: 'T-Shirt',
    imageSrc: {
      uri: 'https://as1.ftcdn.net/v2/jpg/02/71/49/08/1000_F_271490868_9EzWzSbhdgcrRM12o5iMUBbWHX5Zptgp.jpg',
    },
  },
];

const CategoriesScreen = () => {
  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <CategoriesSlider />
      <Text style={{fontSize: 20, fontWeight: '600', paddingHorizontal: 24}}>
        Clothing
      </Text>
      <FlatList
        data={testSubCategoriesData}
        style={{paddingHorizontal: 24}}
        columnWrapperStyle={{gap: 8}}
        renderItem={({item}) => (
          <CategoryItem
            handleSelect={() => {}}
            label={item.label}
            imageSrc={item.imageSrc}
            isSelected={false}
            imageContainerStyle={{width: 80, height: 80}}
            imageStyle={{borderRadius: 8}}
          />
        )}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 16,
  },
});
