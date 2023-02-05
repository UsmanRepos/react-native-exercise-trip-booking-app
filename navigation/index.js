import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding, Home, DestinationDetails } from '../screens'
import { COLORS, SIZES, icons, images, } from '../constants'

const stack = createNativeStackNavigator();
const tabs = createBottomTabNavigator();

const tabScreen = () => {
    const tabOptions = {
        showLabel: false,
        style: {
            height: 90,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.53,
            shadowRadius: 11.97,
            elevation: 21,
        }
    }
    return (
        <tabs.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                headerShown:false,
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.secondary
                    switch (route.name) {
                        case "home":
                            return (
                                <Image
                                    source={icons.home}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            )
                        case "search":
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            )
                        case "bookmark":
                            return (
                                <Image
                                    source={icons.bookmark}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            )
                        case "account":
                            return (
                                <Image
                                    source={icons.user}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            )
                    }
                }
            })}
        >

            <tabs.Screen  name="home" component={Home} />
            <tabs.Screen  name="search" component={Home}/>
            <tabs.Screen  name="bookmark" component={Home}/>
            <tabs.Screen  name="account" component={Home}/>
        </tabs.Navigator>
    );
}
 
const stackScreen = () => {

    return (
        <stack.Navigator initialRouteName='outboarding'>
            <stack.Screen
                name="onboarding"
                component={Onboarding}
                options={{
                    title: null,
                    headerLeft: null,
                    headerStyle: { backgroundColor: COLORS.white },
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: SIZES.padding, }}
                            onPress={() => console.log("pressed ...")}
                        >
                            <Image
                                source={icons.barMenu}
                                resizeMode='cover'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <stack.Screen
                name="home"
                component={tabScreen}
                options={({navigation}) => ({
                    title:null,
                    headerStyle:{ backgroundColor:COLORS.white},
                    headerLeft: () => (
                        <TouchableOpacity 
                            style={{ marginLeft:SIZES.padding }}
                            onPress={() => navigation.navigate("onboarding")}
                        >
                            <Image
                                source={icons.back}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height:25,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight:() => (
                        <TouchableOpacity 
                            style={{ marginRight:SIZES.padding }}
                            onPress={() => console.log("menu pressed ...")}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height:25,
                                }}
                            />
                        </TouchableOpacity>
                    )

                })}
            />
            <stack.Screen
                name="destinationDetails"
                component={DestinationDetails}
                options={{
                    headerShown:false,
                }}
            />
        </stack.Navigator>
    )
}



const Index = () => {
    return (
        <NavigationContainer>
            { stackScreen() }
        </NavigationContainer>
    )
}

export default Index
