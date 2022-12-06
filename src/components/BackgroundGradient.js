import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas, RoundedRect, SweepGradient, vec } from '@shopify/react-native-skia';

export default function backgroundGradient({ width, height }) {

    return (
        <>
            <Canvas style={{ width, height, }}>
                <RoundedRect x={0} y={0} width={width} height={height} color={'white'} r={20} >

                    <SweepGradient c={vec(width / 2, height / 2)} colors={['cyan', 'magenta', 'yellow', 'cyan']} />
                </RoundedRect>
            </Canvas>
        </>
    )
}

const styles = StyleSheet.create({})