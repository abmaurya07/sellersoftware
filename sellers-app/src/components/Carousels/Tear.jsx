import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');

const TearCarousel = () => {
  const data = [
    {
      title: 'Item 1',
    },
    {
      title: 'Item 2',
    },
    {
      title: 'Item 3',
    },
  ];

  return (
    <View>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              width,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{item.title}</Text>
          </View>
        )}
        itemWidth={0.7 * width}
        inActiveOpacity={0.3}
        containerWidth={width}
        separatorWidth={0}
        inActiveScale={0.8}
        activeScale={1}
      />
    </View>
  );
};

export default TearCarousel;
