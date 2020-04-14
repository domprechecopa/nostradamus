import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Player from './pages/Player';
import Spell from './pages/Spell';



const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Player"
            activeColor="#FFFFFF"
            style={{backgroundColor: 'blue'}}
        >
            <Tab.Screen
                name='Player'
                component={Player}
                options={{
                    tabBarLabel: 'Player',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }}
                  />

                <Tab.Screen
                    name='Spell'
                    component={Spell}
                    options={{
                        tabBarLabel: 'Spell',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                    style={{ backgroundColor: "#BD1DC3" }}
                />

        </Tab.Navigator>
        </NavigationContainer>
    );
}