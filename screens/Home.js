import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, images, FONTS } from '../constants'
import OptionsItem from '../components/OptionsItem'
import { OptionListOne, OptionListTwo } from '../utils'

const Home = ({ navigation }) => {
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Ski Villa",
            img: images.skiVilla,
        },
        {
            id: 1,
            name: "Climb Hills",
            img: images.climbingHills,
        },
        {
            id: 2,
            name: "Frozen Hills",
            img: images.frozenHills,
        },
        {
            id: 3,
            name: "Beach",
            img: images.beach,
        },
    ]);

    const renderDestination = (item, index) => {
        var destinationStyle = {}
        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding }
        }
        return (
            <TouchableOpacity
                style={{ justifyContent: "center", marginHorizontal: SIZES.padding2 * .5, ...destinationStyle }}
                onPress={() => navigation.navigate("destinationDetails")}
            >
                <Image
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        width: SIZES.width * 0.28,
                        height: "82%",
                        borderRadius: SIZES.radius * .5,
                    }}
                />
                <Text style={{ marginTop: SIZES.base * .5, color:COLORS.black, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginTop: SIZES.base, marginHorizontal: SIZES.padding}}>
                <Image
                    source={images.homeBanner}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SIZES.radius * .5,
                    }}
                />
            </View>
            <View style={{ justifyContent: "center" }}>
                <View
                    style={{ flexDirection: "row", marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}
                >
                    {OptionListOne.map((option) => {
                        return (
                            <OptionsItem icon={option.icon} bgColor={option.bgColor} label={option.label} />
                        )
                    })
                    }
                </View>
                <View
                    style={{ flexDirection: "row", marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}
                >
                    {OptionListTwo.map((option) => {
                        return (
                            <OptionsItem icon={option.icon} bgColor={option.bgColor} label={option.label} />
                        )
                    })
                    }
                </View>
            </View>
            <View style={{ flex: 1, marginHorizontal: SIZES.padding , paddingVertical: SIZES.padding}}>
                <Text style={{marginHorizontal: SIZES.padding, marginBottom: SIZES.base, ...FONTS.h2 }}>Destination</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestination(item, index)}
                />

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }

})
