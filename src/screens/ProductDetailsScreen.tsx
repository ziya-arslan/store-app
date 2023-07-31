import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HEIGHT, WIDTH} from '../helpers/sizes';
import {ThemeProps} from '../interfaces/Theme';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [selectedColor, setSelectedColor] = React.useState<number>(0);
  const colorNames = ['#8E1F32', '#2BA7F7', '#FF6513', '#1D4491', '#D8D6D7'];

  const productFeatures = [
    {
      title: 'Color',
      value: 'Black',
    },
    {
      title: 'Size',
      value: 'XL',
    },
    {
      title: 'Material',
      value: 'Cotton',
    },
    {
      title: 'Brand',
      value: 'Nike',
    },
    {
      title: 'Made in',
      value: 'China',
    },
    {
      title: "What's in the box",
      value: '1 x T-Shirt',
    },
  ];

  return (
    <ScrollView scrollEventThrottle={16} style={styles.container}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToInterval={WIDTH}
          decelerationRate="fast">
          <View style={{width: WIDTH, aspectRatio: 1}}>
            <Image
              source={{
                uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ptxy4m33guxhewvlbnyy/air-max-270-react-mens-shoe-zPRv3k.png',
              }}
              style={{width: WIDTH, aspectRatio: 1}}
              resizeMode="cover"
            />
          </View>
          <View style={{width: WIDTH, aspectRatio: 1}}>
            <Image
              source={{
                uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ptxy4m33guxhewvlbnyy/air-max-270-react-mens-shoe-zPRv3k.png',
              }}
              style={{width: WIDTH, aspectRatio: 1}}
              resizeMode="cover"
            />
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          width: WIDTH,
          minHeight: '100%',
          flex: 1,
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 24,
        }}>
        <Text style={{fontSize: 26, fontWeight: '700', color: colors.text}}>
          Product Details
        </Text>
        <View
          style={{flexDirection: 'column', gap: 4, alignItems: 'flex-start'}}>
          <Text style={{fontSize: 24, fontWeight: '700', color: colors.text}}>
            $520
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end', gap: 4}}>
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                backgroundColor: colors.primary,
                borderRadius: 16,
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
              }}>
              <FeatherIcon name="star" size={14} color="#fff" />
              <Text
                style={{
                  color: '#fff',
                }}>
                4.8
              </Text>
            </View>
            <Text style={{color: colors.text, opacity: 0.5}}>
              (320 Reviews)
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
            marginTop: 16,
          }}>
          {colorNames?.map((color, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(index)}
                style={{
                  padding: 2,
                  borderRadius: 100,
                  borderWidth: selectedColor === index ? 1 : 0,
                  borderColor: color,
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 24,
                    backgroundColor: color,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{marginTop: 16}}>
          <Text style={{fontSize: 16, fontWeight: '700', color: colors.text}}>
            Product Features
          </Text>
          <View
            style={{gap: 8, flexWrap: 'wrap', flexDirection: 'row', rowGap: 2}}>
            {productFeatures?.map((feature, index) => {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: 'space-between',
                    marginTop: 8,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    backgroundColor: '#FFE3D2',
                    borderRadius: 8,
                  }}>
                  <Text style={{color: colors.primary, fontSize: 12}}>
                    {feature.title}
                  </Text>
                  <Text
                    style={{color: colors.text, fontSize: 12, opacity: 0.7}}>
                    {feature.value}
                  </Text>
                </View>
              );
            })}
          </View>
          <Text style={{marginTop: 12}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            eum nobis explicabo delectus enim quasi quae asperiores adipisci
            perferendis eaque.
          </Text>
        </View>
      </View>
      <SafeAreaView
        edges={['top']}
        style={{position: 'absolute', top: 0, left: 0, right: 0}}>
        <View style={styles.topButtonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <FeatherIcon name="chevron-left" size={24} color={colors.text} />
          </TouchableOpacity>
          <View style={{flex: 1}} />
          <TouchableOpacity style={styles.button}>
            <FeatherIcon name="share" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FeatherIcon name="heart" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const makeStyles = (colors: ThemeProps['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    topButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      gap: 8,
    },
    button: {
      width: 48,
      aspectRatio: 1,
      borderRadius: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.buttonBackground,
    },
    actionButtons: {
      flexDirection: 'row',
      gap: 12,
    },
    image: {
      width: WIDTH,
      height: HEIGHT,
      aspectRatio: 1,
    },
  });
