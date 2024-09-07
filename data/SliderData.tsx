import { ImageSourcePropType } from 'react-native';

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};


export const ImagesSliders = [
  {
    title: 'Deadpool & Wolverine',
    image: require('@/assets/images/movies/img1.png'),
    description: 'Eu minim do incididunt magna qui consequat sunt culpa duis aliquip quis proident nostrud.'
  },
  {
    title: 'Mi Villano Favorito 4',
    image: require('@/assets/images/movies/img2.jpg'),
    description: 'Sunt proident minim nostrud non cupidatat laborum cupidatat laborum cupidatat duis qui nostrud exercitation irure.'
  },
  {
    title: 'Guasón 2: folie à deux',
    image: require('@/assets/images/movies/img3.jpg'),
    description: 'Adipisicing quis voluptate duis minim labore dolore dolor dolor est amet Lorem culpa in ipsum.'
  },
  {
    title: 'De Noche Con El Diablo',
    image: require('@/assets/images/movies/img4.png'),
    description: 'Qui pariatur adipisicing sunt aute consequat est non excepteur.'
  }
];
