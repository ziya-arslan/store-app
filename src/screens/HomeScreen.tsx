import React from 'react';
import {ScrollView} from 'react-native';
import Carousel from '../components/Carousel';
import {CarouselItem} from '../interfaces/ICarousel';

const HomeScreen = () => {
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

  return (
    <ScrollView>
      <Carousel data={data} />
    </ScrollView>
  );
};

export default HomeScreen;
