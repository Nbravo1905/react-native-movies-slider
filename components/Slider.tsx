import { FlatList, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'

import { ImageSliderType } from '@/data/SliderData'
import SliderItem from '@/components/SliderItem'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Pagination from './Pagination'

type Props = {
  moviesSlider: ImageSliderType[]
}

const Slider = ({ moviesSlider }: Props) => {

  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [data, setData] = useState(moviesSlider);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
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
      />
      <Pagination items={moviesSlider} paginationIndex={paginationIndex} scrollX={scrollX} />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})