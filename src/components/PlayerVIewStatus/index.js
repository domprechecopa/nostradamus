import React from 'react';
import {
    ViewerPlayer, PersonNameText,
    PersonImage, DescriptionPerson, PersonTitleNameText
} from './style';
import { View } from 'react-native';
import userImg from '../../assets/user.png'


export default function PlayerViewStatus() {

    return (
        <ViewerPlayer>
            <PersonImage source={userImg} />
            <DescriptionPerson>
                <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                    <View style={{width: 180}}>
                        <PersonTitleNameText>Personagem:</PersonTitleNameText>
                        <PersonNameText >Pedro Pacheco</PersonNameText>
                    </View>

                    <View style={{marginLeft: 50}}>
                        <PersonTitleNameText>Classe:</PersonTitleNameText>
                        <PersonNameText>Bardo</PersonNameText>
                    </View>
                </View>
                
            </DescriptionPerson>

        </ViewerPlayer>
    );
}