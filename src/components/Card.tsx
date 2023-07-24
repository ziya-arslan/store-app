import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

type CardProps = {
  title: string;
  price: number;
  image: string;
  colorNames?: Array<string>;
};

const Card = ({title, price, image, colorNames}: CardProps) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [selectedColor] = React.useState<number>(0);

  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.likeButton}>
        <FeatherIcon name="heart" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={{flex: 1, aspectRatio: 1, width: '100%'}}>
        <Image
          source={{
            uri: image,
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={{padding: 12}}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.details}>
          <Text>${price}</Text>
          {/* circles defining colors */}
          <View
            style={{
              flexDirection: 'row',
              gap: 2,
              alignItems: 'center',
            }}>
            {colorNames?.map((color, index) => {
              if (colorNames.length > 3 && index < 3) {
                return (
                  <View
                    key={index}
                    style={{
                      padding: 2,
                      borderRadius: 100,
                      borderWidth: selectedColor === index ? 1 : 0,
                      borderColor: color,
                    }}>
                    <View
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                        backgroundColor: color,
                      }}
                    />
                  </View>
                );
              }
              const remaining = colorNames.length - 4;
              if (index === 4) {
                return (
                  <View
                    key={index}
                    style={{
                      padding: 2,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#929292',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 10, color: '#929292'}}>
                      +{remaining}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: 200,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 24,
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    likeButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 40,
      height: 40,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 12,
      zIndex: 10,
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    title: {fontWeight: '600', fontSize: 14},
    details: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
  });
