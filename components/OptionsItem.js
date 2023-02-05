import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONTS, SIZES } from '../constants'

const OptionsItem = ({ icon, bgColor, label }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => console.log("item clicked ...")}
        >
            <View
                style={[styles.shadow, { width: 60, height: 60, borderRadius: SIZES.radius * .5}]}
            >
                <LinearGradient
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: SIZES.radius * .5 }}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode='cover'
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.darkgray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default OptionsItem

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
