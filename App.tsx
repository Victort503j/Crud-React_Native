import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/components/Home/Home';
import ListUser from './src/components/user/ListUser';
import DrawerNavegation from './src/components/Menu/CustomDrawer';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <DrawerNavegation>
      
    </DrawerNavegation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});