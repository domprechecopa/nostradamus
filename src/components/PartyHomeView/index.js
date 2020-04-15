import React from 'react';
import PlayerImg from '../../assets/party01.png';
import { View } from 'react-native';
import {    
    Container, PlayerImgView, LifeStatus, MemberPartyView
} from './style';

export default function PartyHomeView(){
    return(
        <Container>
            <MemberPartyView>
                <PlayerImgView source={PlayerImg} />
                <LifeStatus>150</LifeStatus>
            </MemberPartyView>

            <MemberPartyView>
                <PlayerImgView source={PlayerImg} />
                <LifeStatus>150</LifeStatus>
            </MemberPartyView>


            <MemberPartyView>
                <PlayerImgView source={PlayerImg} />
                <LifeStatus>150</LifeStatus>
            </MemberPartyView>


            <MemberPartyView>
                <PlayerImgView source={PlayerImg} />
                <LifeStatus>150</LifeStatus>
            </MemberPartyView>


            <MemberPartyView>
                <PlayerImgView source={PlayerImg} />
                <LifeStatus>150</LifeStatus>
            </MemberPartyView>

            

            
        </ Container>


    );
}