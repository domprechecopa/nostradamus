import React from 'react';
import { ProgressBar } from 'react-native-paper';

import { StyleSheet, View } from 'react-native';

import {
     Container, TextLife, LifeLine, DadosVida, TitleVida,
     TextVida
    } from './style';

export default function LifeStatus(){
    return (
        <Container>
            <LifeLine>

                <ProgressBar progress={0.5} style={LifeBarra} />
                <TextLife>50 / 150 HP</TextLife>

            </LifeLine>
            <LifeLine>
                <DadosVida style={{borderRightWidth: 1 }}>
                    <TitleVida>
                        Dado de Vida:
                    </TitleVida>

                    <TextVida>
                        1D6 + 6
                    </TextVida>
                </DadosVida>

                <DadosVida style={{marginLeft: 5}}>
                    <TitleVida>
                        Vida Temporária:
                    </TitleVida>
                    <TextVida>
                        42HP
                    </TextVida>
                </DadosVida>
            </LifeLine>

        </Container>
    );
}

const LifeBarra = StyleSheet.create({
    margin: 10,
    borderRadios: 5,
    width: 180,
});