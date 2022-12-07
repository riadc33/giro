import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BrackGroundGradient from './src/components/BackgroundGradient'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const HEIGHT = 256
const WIDTH = SCREEN_WIDTH * 0.9;
const WIDTH_CARD = WIDTH - 5;
const HEIGHT_CARD = HEIGHT - 5;

export default function App() {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);


  const gestures = Gesture.Pan().runOnJS(true).onBegin((event) => {
    rotateX.value = withTiming(interpolate(
      event.y,
      [0, HEIGHT_CARD],
      [10, -10],
      Extrapolate.CLAMP))
    rotateY.value = withTiming(interpolate(
      event.x,
      [0, WIDTH_CARD],
      [-10, 10],
      Extrapolate.CLAMP))
  })
    .onUpdate((event) => {
      rotateX.value = withTiming(interpolate(
        event.y,
        [0, HEIGHT_CARD],
        [10, -10],
        Extrapolate.CLAMP))
      rotateY.value = withTiming(interpolate(
        event.x,
        [0, WIDTH_CARD],
        [-10, 10],
        Extrapolate.CLAMP))

    }).onFinalize(() => {
      rotateX.value = withTiming(0)
      rotateY.value = withTiming(0)

    })

  const rStyle = useAnimatedStyle(() => {

    const rotateXvalue = `${rotateX.value}deg`
    const rotateYvalue = `${rotateY.value}deg`

    return {
      transform: [{
        perspective: 300
      },
      { rotateX: rotateXvalue },
      { rotateY: rotateYvalue }
      ]
    }
  }, [])


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View style={styles.container}>
        <BrackGroundGradient width={WIDTH} height={HEIGHT} />
        <GestureDetector gesture={gestures}>
          <Animated.View style={[{
            height: HEIGHT_CARD,
            width: WIDTH_CARD,
            backgroundColor: 'black',
            position: 'absolute',
            borderRadius: 20,
            zIndex: 300,
          },
            rStyle
          ]}>
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '10%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 50,
                  aspectRatio: 1,
                  borderRadius: 25,
                  backgroundColor: '#272F46',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 10,
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 80,
                    borderRadius: 25,
                    backgroundColor: '#272F46',
                  }}
                />
                <View
                  style={{
                    height: 20,
                    width: 80,
                    borderRadius: 25,
                    backgroundColor: '#272F46',
                  }}
                />
              </View>
            </View>
          </Animated.View>
        </GestureDetector>

      </View>
    </GestureHandlerRootView>
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

