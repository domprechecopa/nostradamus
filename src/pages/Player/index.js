import React from 'react';
import PlayerViewStatus from '../../components/PlayerVIewStatus';
import ModificatorViewPlayer from '../../components/ModificatorViewPlayer';
import PartyHomeView from '../../components/PartyHomeView';
import AtributerViewPlayer from '../../components/AtributerViewPlayer';


import { Container } from './style';

export default function Player(){
    return (
        <Container>
            <PlayerViewStatus />
            <PartyHomeView />
            <ModificatorViewPlayer/>
            <AtributerViewPlayer />
        </Container>
    );
}