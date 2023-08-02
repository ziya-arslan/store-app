import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Image,
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={container}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 20}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* Top bar */}
        <View style={searchContainer}>
          <TouchableOpacity style={searchButton}>
            <FeatherIcon name="search" size={20} color={colors.primary} />
            <Text style={{...searchButtonText, opacity: 0.5}}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcon name="bell" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={{gap: 12, paddingHorizontal: 24}}>
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
                  source={item.image}
                />
                <Text style={{textAlign: 'center', fontWeight: '500'}}>
                  {item.title}
                </Text>
              </View>
            );
          })}
        </ScrollView>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 12,
  },
  searchButton: {
    flex: 1,
    height: 42,
    borderRadius: 12,
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
