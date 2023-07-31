import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  RefreshControl,
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
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
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
    {
      title: 'Puma RS-X3',
      price: 120,
      image:
        'https://img01.ztat.net/article/spp-media-p1/714ccdf466c24e71843fcb70034eea17/8e2e1b63e1fd4cb28103979ee4028f8b.jpg?imwidth=1800&filter=packshot',
      colorNames: ['#000', '#2BA7F7', '#FF6513', 'yellow', 'black'],
    },
  ];

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const {
    container,
    searchContainer,
    searchButton,
    searchButtonText,
    collectionContainer,
  } = styles;

  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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

        {/* Categories list */}

        {/* Collection View */}
        <View style={{gap: 12}}>
          <View style={collectionContainer}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              New Collection
            </Text>
            <TouchableOpacity>
              <Text style={{color: colors.text, opacity: 0.5}}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToInterval={200}
            decelerationRate="fast"
            contentContainerStyle={{gap: 12, paddingHorizontal: 20}}>
            {cardData.map((item, index) => {
              return <Card key={index} {...item} />;
            })}
          </ScrollView>
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
    paddingHorizontal: 24,
  },
});
