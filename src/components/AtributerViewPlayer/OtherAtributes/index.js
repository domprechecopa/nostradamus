import React from 'react';
import { Feather } from 'react-native-vector-icons';
import { View } from 'react-native';
import {
    Container, TributesClassProfView, TextClassArmor,
    ViewDeslocamento, NumberTrib, TextTrib,
    SalvaguardaView, SalvaguardaLineView, StatusView,
    TitleContainer
} from './style';
import TestLife from './TestLife';


export default function OtherAtributes(){
    return(
        <Container>
            <TributesClassProfView>
                <Feather name="shield" size={18} color='#9e9e9e' style={{marginTop: 14}} />
                <TextClassArmor>22</TextClassArmor>

                <ViewDeslocamento>
                    <TextTrib>
                        Deslocamento:
                    </TextTrib>
                    <NumberTrib>
                        12
                    </NumberTrib>
                </ViewDeslocamento>
                <View style={{ marginLeft: 6 }}>
                    <TextTrib>
                        Proeficiência:
                    </TextTrib>
                    <NumberTrib>
                        +4
                    </NumberTrib>
                </ View>

            </TributesClassProfView>

            <SalvaguardaView>
                <TitleContainer>Salvaguarda:</TitleContainer>
                <SalvaguardaLineView>
                    <StatusView >
                        <TextTrib>
                            Força
                    </TextTrib>
                        <NumberTrib>
                            +5
                    </NumberTrib>

                    </StatusView >

                    <StatusView >
                        <TextTrib>
                            Destreza
                    </TextTrib>
                        <NumberTrib>
                            +5
                    </NumberTrib>

                    </StatusView >

                    <StatusView >
                        <TextTrib>
                            Constituição
                    </TextTrib>
                        <NumberTrib>
                            +5
                    </NumberTrib>

                    </StatusView >

                </SalvaguardaLineView>
                <SalvaguardaLineView>
                <StatusView >
                        <TextTrib>
                            Inteligência
                    </TextTrib>
                        <NumberTrib>
                            +5
                    </NumberTrib>

                    </StatusView >

                    <StatusView >
                        <TextTrib>
                            Destreza
                    </TextTrib>
                        <NumberTrib>
                            +5
                    </NumberTrib>

                    </StatusView >

                    <StatusView >
                        <TextTrib>
                            Constituição
                    </TextTrib>
                        <NumberTrib>
                            +5
                    </NumberTrib>

                    </StatusView >

                </SalvaguardaLineView>
            </SalvaguardaView>

            <TestLife />
        </Container>
    );
}