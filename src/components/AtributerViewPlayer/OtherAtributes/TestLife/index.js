import React from 'react';
import { Feather } from 'react-native-vector-icons';
import {
    Container, TitleContainer, LineLifeView, TextLineView
} from './style';


export default function TestLife(){
    return (
        <Container>
            <TitleContainer>
                Teste para Vida:
            </TitleContainer>
            <LineLifeView>
                <TextLineView>
                    Vida:
                </TextLineView>
                <Feather name='circle' size={15} color='#9e9e9e' style={{marginTop: 2}}/>
                <Feather name='circle' size={15} color='#9e9e9e' style={{marginTop: 2}}/>
                <Feather name='circle' size={15} color='#9e9e9e' style={{marginTop: 2}}/>

            </LineLifeView>

        </Container>
    );
}