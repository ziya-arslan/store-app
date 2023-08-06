import {
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type CategoryItemProps = {
  isSelected: boolean;
  handleSelect: () => void;
  imageSrc: ImageURISource;
  label: string;
  imageStyle?: any;
  imageContainerStyle?: any;
};

const CategoryItem = ({
  isSelected,
  handleSelect,
  imageSrc,
  label,
  imageStyle,
  imageContainerStyle,
}: CategoryItemProps) => {
  const {colors} = useTheme();
  const {categoryContainer, image, title} = styles;

  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: isSelected ? 2 : 0,
        borderColor: colors.primary,
        paddingVertical: 20,
        ...categoryContainer,
      }}
      onPress={handleSelect}>
      <View style={{width: 64, height: 64, ...imageContainerStyle}}>
        <Image
          style={{
            borderColor: isSelected ? colors.primary : 'transparent',
            ...image,
            ...imageStyle,
          }}
          source={imageSrc}
        />
      </View>
      <Text
        style={{
          ...title,
          color: isSelected ? colors.primary : colors.text,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#fff',
  },
  image: {
    borderRadius: 100,
    borderWidth: 1,
    flex: 1,
  },
  title: {
    textAlign: 'left',
    fontWeight: '500',
  },
});
