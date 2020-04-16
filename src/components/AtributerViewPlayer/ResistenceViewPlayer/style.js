import styled from 'styled-components/native';

export const Container = styled.View`
    width: 200px;
    margin: 8px 8px 8px 20px;
    border-radius: 10px;
    background-color: #fff;
    justify-content: flex-start;
    padding-top: 8px;
    padding-bottom: 4px;

`;

export const AtributeView = styled.View`
    flex: 1;
    margin: 2px 0 0 8px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px 0 20px;
`;


export const TitleAtribute = styled.Text`
    font-size: 15px;
`;


export const NumberAtribute = styled.Text`
    font-size: 13px;
    font-weight: bold;

`;
