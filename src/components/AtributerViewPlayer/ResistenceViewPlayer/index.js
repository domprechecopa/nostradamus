import React from 'react';
import {
    Container, TitleAtribute, NumberAtribute, AtributeView
} from './style';
import { Feather } from 'react-native-vector-icons';


export default function ResistenceViewPlayer(){

    return(
        <Container>
            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Acrobacia</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>Arcanismo</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Atletismo</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>Atuação</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Enganação</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Furtividade</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>História</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>Intimidação</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Intuição</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>Investigação</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Lidar com Animais</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Medicina</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Natureza</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>


            <AtributeView>
                <TitleAtribute>Percepção</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>Persuasão</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>Prestidigitação</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <TitleAtribute>Religião</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>

            <AtributeView>
                <Feather name="award" color="#9e9e9e" size={16} style={{position : 'absolute'}} />
                <TitleAtribute>Sobrevivência</TitleAtribute>
                <NumberAtribute>+5</NumberAtribute>
            </AtributeView>
        </Container>
    );
}