import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, images } from '../constants'

const Onboarding = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image 
                    source={images.onboardingImage}
                    resizeMode='contain'
                    style={{ width:"100%", height:"100%"}}
                />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ alignItems: "center", marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
                    <Text style={{ color: COLORS.darkgray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>
                        Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.
                    </Text>
                </View>
                <TouchableOpacity
                    style={[ styles.shadow, { marginTop:SIZES.padding*2, width:"70%", height:50, justifyContent:"center", alignItems:"center", borderRadius:SIZES.radius*.5}]}
                    onPress={() => navigation.navigate("home")}
                >
                    <LinearGradient
                        style={{ width:"100%", height:"100%",justifyContent:"center", alignItems:"center", borderRadius:SIZES.radius*.5}}
                        colors={['#46aeff', '#5884ff']}
                        start={{x:0, y:0}}
                        end={{x:1, y:1}}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start !</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    }
})
