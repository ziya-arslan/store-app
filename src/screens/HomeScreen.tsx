import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import {CarouselItem} from '../interfaces/ICarousel';

const HomeScreen = () => {
  const {colors} = useTheme();
  const data: Array<CarouselItem> = [
    {
      image: {
        uri: 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
      },
    },
    {
      image: {
        uri: 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
      },
    },
    {
      image: {
        uri: 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
      },
    },
  ];
  const cardData = [
    {
      title: 'Nike Air Max 270 React',
      price: 150,
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ptxy4m33guxhewvlbnyy/air-max-270-react-mens-shoe-zPRv3k.png',
      colorNames: ['#000', '#2BA7F7', '#FF6513', 'yellow', 'black'],
    },
    {
      title: 'Adidas Yeezy Boost 350 V2',
      price: 220,
      image:
        'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg',
      colorNames: ['#B59488', '#6C60E5', '#F36D4C', 'yellow', 'black'],
    },
  ];

  const {
    container,
    searchContainer,
    searchButton,
    searchButtonText,
    collectionContainer,
  } = styles;

  return (
    <ScrollView style={{backgroundColor: '#fff'}} bounces={false}>
      <SafeAreaView style={container}>
        <View style={searchContainer}>
          <TouchableOpacity style={searchButton}>
            <FeatherIcon
              name="search"
              size={24}
              color={colors.text}
              style={{opacity: 0.5}}
            />
            <Text style={{...searchButtonText, opacity: 0.5}}>Search</Text>
          </TouchableOpacity>
        </View>
        <Carousel data={data} />

        {/* Collection View */}
        <View style={{paddingHorizontal: 24}}>
          <View style={collectionContainer}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              New Collection
            </Text>
            <TouchableOpacity>
              <Text style={{color: colors.text, opacity: 0.5}}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 12}}>
            {cardData.map((item, index) => {
              return <Card key={index} {...item} />;
            })}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, gap: 20, flexDirection: 'column'},
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 12,
  },
  searchButton: {
    flex: 1,
    height: 52,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 12,
  },
  searchButtonText: {flex: 1, fontSize: 16, color: '#63676A', opacity: 0.5},
  collectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
