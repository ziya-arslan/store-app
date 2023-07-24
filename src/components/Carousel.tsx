import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import {CarouselItem} from '../interfaces/ICarousel';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type CarouselProps = {
  data: Array<CarouselItem>;
};

const Carousel = ({data}: CarouselProps) => {
  const [newData] = useState([
    {key: 'spacer-left', image: null},
    ...data,
    {key: 'spacer-right', image: null},
  ]);

  const {width} = useWindowDimensions();
  const SIZE = width * 0.88;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={true}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate="fast"
      onScroll={onScroll}>
      {newData.map((item, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
            [0.91, 1, 0.91],
          );
          return {
            transform: [{scale}],
          };
        });
        if (!item.image) {
          return <View style={{width: SPACER}} key={index} />;
        }
        return (
          <View key={index} style={{width: SIZE}}>
            <Animated.View style={[styles.imageContainer, style]}>
              <Image source={item.image} style={styles.image} />
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
  },
});
