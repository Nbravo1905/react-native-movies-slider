import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ImageSliderType } from '@/data/SliderData'
import SliderItem from '@/components/SliderItem'

type Props = {
  moviesSlider: ImageSliderType[]
}

const Slider = ({ moviesSlider }: Props) => {

  return (
    <FlatList 
      data={moviesSlider}
      renderItem={({item, index}) => <SliderItem item={item} index={index} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
  )
}

export default Slider

const styles = StyleSheet.create({})