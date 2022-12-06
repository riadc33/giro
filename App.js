import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import BrackGroundGradient from './src/components/BackgroundGradient'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const HEIGHT = 256
const WIDTH = SCREEN_WIDTH * 0.9;

export default function App() {
  return (
    <View style={styles.container}>
      <BrackGroundGradient width={WIDTH} height={HEIGHT} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
