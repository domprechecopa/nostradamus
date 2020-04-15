import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 5px 10px 0 10px;
    padding: 5px;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;

`;

export const PlayerImgView = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    position: absolute;
`;

export const LifeStatus = styled.Text`
    width: 50px;
    font-size: 13px;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
`;

export const MemberPartyView = styled.View`
    height:80px;
    width:80px;
    align-items: center;
    justify-content: flex-end;
`;


