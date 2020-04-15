import React from 'react';
import PlayerViewStatus from '../../components/PlayerVIewStatus';
import ModificatorViewPlayer from '../../components/ModificatorViewPlayer';
import { Container } from './style';

export default function Player(){
    return (
        <Container>
            <PlayerViewStatus />
<ModificatorViewPlayer/>
        </Container>
    );
}