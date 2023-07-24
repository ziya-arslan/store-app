import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Card = () => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.likeButton}>
        <FeatherIcon name="heart" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Image
          source={{
            uri: 'https://www.barkershoes.com/cdn/shop/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815',
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={{padding: 12}}>
        <Text style={styles.title}>TEST NAME</Text>
        <View style={styles.details}>
          <Text>$120</Text>
          {/* circles defining colors */}
          <View
            style={{
              flexDirection: 'row',
              gap: 2,
              alignItems: 'center',
            }}>
            <View
              style={{
                padding: 2,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: '#000',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: '#000',
                }}
              />
            </View>
            <View
              style={{
                padding: 2,
                borderRadius: 100,
                borderWidth: 0,
                borderColor: '#000',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: '#32A1F2',
                }}
              />
            </View>
            <View
              style={{
                padding: 2,
                borderRadius: 100,
                borderWidth: 0,
                borderColor: '#000',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: '#FC641B',
                }}
              />
            </View>
            <View
              style={{
                padding: 2,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: '#929292',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 10, color: '#929292'}}>+2</Text>
            </View>
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
      height: 200,
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
