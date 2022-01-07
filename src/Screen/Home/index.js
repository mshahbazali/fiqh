import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import LottieView from 'lottie-react-native';

export default function index() {
    return (
        <View style={{ backgroundColor: "#fff" }}>
            <ScrollView>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', height: 60, alignItems: 'center', paddingHorizontal: 17 }}>
                    <TouchableOpacity>
                        <Ionicons name="md-menu-outline" size={30} color="#4361ee" />
                    </TouchableOpacity>
                    <View>
                        <Image source={require("../../Assets/Images/titleayat.png")} style={{ width: 150, height: 45 }} />
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="md-notifications-outline" size={30} color="#4361ee" />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <View style={{backgroundColor: "#fff", width: "90%", height: 150, marginVertical: 15, ...styles.shadow, borderRadius: 15, borderColor: "#4361ee", borderWidth: 1, }}>
                        {/* <LottieView source={require('../../Assets/Animations/16401-forest-morning.json')} autoPlay loop style={{ width: 400, height: 148, }} /> */}
                        {/* <Image source={require("../../Assets/Animations/morningbg.gif")} style={{ width: '100%', height: '100%'}} /> */}
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontWeight: '600', color: "#000", marginBottom: 18, fontSize: 18 }}>Today Question</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: "#4361ee", borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                            <MaterialCommunityIcons name="chevron-triple-down" size={30} color="#4361ee" />
                            <Text style={{ fontFamily: "Jameel Noori Kasheeda", color: "#000", fontSize: 20, textAlign: 'right', marginLeft: 10 }}>سر آپ نیلام ہوئے تھے؟‘ جاوید اختر تنقید کی زد میں</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 17, marginBottom: 100 }}>
                    <Text style={{ fontWeight: '600', color: "#000", marginBottom: 5, fontSize: 18 }}>Features</Text>
                    <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <TouchableOpacity style={{ width: "48%", height: 150, borderColor: "#4361ee", borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="gamepad-circle-right" size={90} color="#4361ee" />
                            <Text style={{ color: "#000", fontSize: 16, fontWeight: "500" }}>Play Game</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "48%", height: 150, borderColor: "#4361ee", borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="book-open-page-variant" size={90} color="#4361ee" />
                            <Text style={{ color: "#000", fontSize: 16, fontWeight: "500" }}>Read Books</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <TouchableOpacity style={{ width: "48%", height: 150, borderColor: "#4361ee", borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="support-agent" size={90} color="#4361ee" />
                            <Text style={{ color: "#000", fontSize: 16, fontWeight: "500" }}>Support</Text>
                        </TouchableOpacity><TouchableOpacity style={{ width: "48%", height: 150, borderColor: "#4361ee", borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="md-share" size={90} color="#4361ee" style={{ transform: [{ rotate: '90deg' }] }} />
                            <Text style={{ color: "#000", fontSize: 16, fontWeight: "500" }}>Invite Friends</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "grey",
        shadowOpacity: 0.7,
        shadowRadius: 3.5,
        elevation: 20
    }
})
