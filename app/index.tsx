import { StyleSheet, Text, View } from "react-native";

import Slider from "@/components/Slider";
import { ImagesSliders } from "@/data/SliderData";

export default function Index() {
  return (
    <View style={styles.container}>
      <Slider moviesSlider={ImagesSliders} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
  }
})
