import React from 'react';
import {
    ViewerPlayer, PersonText,
    PersonImage, DescriptionPerson,
     PersonTitleText, PersonTextBold,
      PlayerImgView, LifeStatus
} from './style';
import { View } from 'react-native';
import userImg from '../../assets/user.png'


export default function PlayerViewStatus() {

    return (
        <ViewerPlayer>
            <PlayerImgView>
              <PersonImage source={userImg} />
                <LifeStatus>Lv. 16</LifeStatus>

            </PlayerImgView>
            <DescriptionPerson>
                <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                    <View style={{width: 150}}>
                        <PersonTitleText>Personagem:</PersonTitleText>
                        <PersonText >Pedro Pacheco</PersonText>
                    </View>

                    <View style={{marginLeft: 50}}>
                        <PersonTitleText>Classe:</PersonTitleText>
                        <PersonText>Bardo</PersonText>
                    </View>
                </View>


                <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                    <View style={{width: 150}}>
                        <PersonTitleText>Raça:</PersonTitleText>
                        <PersonText >Meio Elfo</PersonText>
                    </View>

                    <View style={{marginLeft: 50}}>
                        <PersonTitleText>Antecedência:</PersonTitleText>
                        <PersonText>Forasteiro</PersonText>
                    </View>
                </View>


                <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                    <View style={{width: 150}}>
                        <PersonTitleText>Experiência:</PersonTitleText>
                        <PersonTextBold >1900xp</PersonTextBold>
                    </View>

                    <View style={{marginLeft: 50}}>
                        <PersonTitleText>Alinhamento:</PersonTitleText>
                        <PersonText>LB</PersonText>
                    </View>
                </View>
                
            </DescriptionPerson>

        </ViewerPlayer>
    );
}