import { Dimensions, FlatList, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { ImageSliderType } from '@/data/SliderData'
import SliderItem from '@/components/SliderItem'
import Animated, { scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from 'react-native-reanimated'
import Pagination from './Pagination'

const { width } = Dimensions.get('screen');

type Props = {
  moviesSlider: ImageSliderType[]
}

const Slider = ({ moviesSlider }: Props) => {

  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [data, setData] = useState(moviesSlider);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const interval = useRef<NodeJS.Timeout>();
  const offset = useSharedValue(0);


  useEffect(() => {
    
    if( isAutoPlay == true) {
       interval.current = setInterval(() => {
        offset.value = offset.value + width
       }, 2000); 
    }else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    }

  }, [isAutoPlay, offset, width]);

  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true)
  });

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offset.value = e.contentOffset.x;
    }
  });

  const onViewableItemsChanged = ({ viewableItems } : {viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index % moviesSlider.length);
    }
  }
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  }

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged}
  ])

  return (
    <View>
      <Animated.FlatList
        ref={ref}
        data={data}
        renderItem={({ item, index }) => <SliderItem item={item} index={index} scrollX={scrollX} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        removeClippedSubviews={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...moviesSlider])}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true);
        }}
      />
      <Pagination items={moviesSlider} paginationIndex={paginationIndex} scrollX={scrollX} />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})