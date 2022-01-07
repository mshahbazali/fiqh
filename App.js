import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/Config/Navigation/PublicNav/BottomNav'
export default function App() {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  )
}
