import React from 'react';
import {  ViewerPlayer, PersonNameText, 
    PersonImage, DescriptionPerson, PersonTitleNameText,
    PersonClassTitleText, PersonClassText
} from './style';
import userImg from '../../assets/user.png'


export default function PlayerViewStatus(){

    return (
        <ViewerPlayer>
            <PersonImage source={userImg} />
            <DescriptionPerson>
                <PersonTitleNameText>Personagem:</PersonTitleNameText>
                <PersonNameText > Pedro Pacheco Mendes</PersonNameText>
                <PersonClassTitleText>Classe:</PersonClassTitleText>
                <PersonClassText>Bardo</PersonClassText>
            </DescriptionPerson>

        </ViewerPlayer>
    );
}