import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import CustomMenu from "./DrawerNavegation";
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import ListUser from '../user/ListUser';
import ListRol from '../rol/ListRol';

const Drawer = createDrawerNavigator();

const DrawerNavegation = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <CustomMenu {...props} />}
                screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#00ABED'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff',
                    lazy: true,
                }}
                backBehavior='history'
                detachInactiveScreens
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Usuarios" component={ListUser} />
                <Drawer.Screen name="Roles" component={ListRol} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
};


export default DrawerNavegation;