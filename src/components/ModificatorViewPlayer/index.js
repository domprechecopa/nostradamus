import React from 'react';

import {
    ModificatorContainerView,ModificatorDescription, ModificatorView,
     ModificatorNumber, ModificatorName, Container, ModificatorNumberDesc
} from './style';

export default function ModificatorViewPlayer(){
    return (
        <Container>
        <ModificatorContainerView>
            <ModificatorView>
                <ModificatorName>FOR</ModificatorName>
                <ModificatorNumber>+5</ModificatorNumber>
                <ModificatorNumberDesc>12</ModificatorNumberDesc>

            </ModificatorView>
            <ModificatorView>
                <ModificatorName>DES</ModificatorName>

                <ModificatorNumber>+5</ModificatorNumber>
                <ModificatorNumberDesc>12</ModificatorNumberDesc>

            </ModificatorView>

            <ModificatorView>
                <ModificatorName>CON</ModificatorName>

                <ModificatorNumber>+5</ModificatorNumber>
                <ModificatorNumberDesc>12</ModificatorNumberDesc>


            </ModificatorView>
            <ModificatorView>
                <ModificatorName>INT</ModificatorName>

                <ModificatorNumber>+5</ModificatorNumber>
                <ModificatorNumberDesc>12</ModificatorNumberDesc>

            </ModificatorView>
            <ModificatorView>
                <ModificatorName>SAB</ModificatorName>

                <ModificatorNumber>+5</ModificatorNumber>
                <ModificatorNumberDesc>12</ModificatorNumberDesc>

            </ModificatorView>
            <ModificatorView>
                <ModificatorName>CAR</ModificatorName>

                <ModificatorNumber>+5</ModificatorNumber>
                <ModificatorNumberDesc>12</ModificatorNumberDesc>

            </ModificatorView>

        </ModificatorContainerView>
        </Container>
    );
}