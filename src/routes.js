import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Player from './pages/Player';
import Spell from './pages/Spell';
import Inventory from './pages/Inventory';
import Dice from './pages/Dice';





const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Player"
            activeColor="#FFFFFF"
        >
            <Tab.Screen
                name='Player'
                component={Player}
                options={{
                    tabBarLabel: 'Jogador',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }}
                  />

                <Tab.Screen
                    name='Spell'
                    component={Spell}
                    options={{
                        tabBarLabel: 'Magias',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                    style={{ backgroundColor: "#BD1DC3" }}
                />


                <Tab.Screen
                    name='Inventory'
                    component={Inventory}
                    options={{
                        tabBarLabel: 'Inventário',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                    style={{ backgroundColor: "#BD1DC3" }}
                />
                
                <Tab.Screen
                    name='Dice'
                    component={Dice}
                    options={{
                        tabBarLabel: 'Dados',
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