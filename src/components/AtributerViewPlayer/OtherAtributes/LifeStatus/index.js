import React from 'react';
import { ProgressBar } from 'react-native-paper';

import { StyleSheet } from 'react-native';

import {
     Container, TextLife
    } from './style';

export default function LifeStatus(){
    return (
        <Container>
            <ProgressBar progress={0.5} style={LifeBarra} />
            <TextLife>50 / 150 HP</TextLife>

        </Container>
    );
}

const LifeBarra = StyleSheet.create({
    margin: 10,
    borderRadios: 5,
    width: 180,
});