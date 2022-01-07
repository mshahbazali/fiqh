import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../../Screen/Home'
import LeaderBoard from '../../../../Screen/LeaderBoard'
import Profile from '../../../../Screen/Profile'
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';

export default function index() {
    const Tab = createBottomTabNavigator();

    const MainBtn = ({ children, onPress }) => {
        return (
            <TouchableOpacity
                style={{
                    top: -30,
                    justifyContent: 'center',
                    alignItems: "center",
                    ...styles.shadow
                }} onPress={onPress}>
                <View style={{
                    width: 70,
                    height: 70,
                    backgroundColor: '#4361ee',
                    borderRadius: 35
                }}>
                    {children}
                </View>
            </TouchableOpacity>
        )

    }
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    height: 70,
                    ...styles.shadow
                }
            }}
            initialRouteName="HomeScreen"
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Ionicons name={focused ? "trophy" : "trophy-outline"} size={30} color={focused ? "#4361ee" : "grey"} />
                            {/* <Text style={{ color: "#000", fontSize: 12 }}>Home</Text> */}
                        </View>
                    ),
                    headerShown: false
                }}
                name="LeaderBoard" component={LeaderBoard} />
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="home" size={30} color="#fff" />
                    ),
                    tabBarButton: (props) => <MainBtn {...props} />,
                    headerShown: false

                }}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Ionicons name={focused ? "settings" : "settings-outline"} size={30} color={focused ? "#4361ee" : "grey"} />

                            {/* <Text style={{ color: "#000", fontSize: 12 }}>Home</Text> */}
                        </View>
                    ),
                    headerShown: false
                }}
                name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})