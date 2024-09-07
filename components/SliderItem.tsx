import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/data/SliderData'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  item: ImageSliderType;
  index: number;
}

const { width } = Dimensions.get('screen');

const SliderItem = ({item, index}: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image 
        source={item.image}
        style={{width: 300, height: 500, borderRadius: 20}}
      />
      <LinearGradient
        colors={[
          'transparent',
          'rgba(0,0,0,0.8)'
        ]}
        style={styles.background}
      >
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity style={styles.iconButtom}>
            <Ionicons name='heart-outline' size={30} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    width: width
  },
  background: {
    position: 'absolute',
    height: 500,
    width: 300,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  iconButtom: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 5,
    borderRadius: 30
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.5
  },
  description: {
    color: '#fff',
    fontSize: 12,
    letterSpacing: 1.2
  }
});