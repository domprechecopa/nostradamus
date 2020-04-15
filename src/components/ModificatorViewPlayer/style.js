import styled from 'styled-components/native';


export const Container = styled.View`
    margin: 8px 20px 0 20px;
    border-radius: 10px;
    padding: 15px;
    background-color: #fff;
`;

export const ModificatorContainerView = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const ModificatorView = styled.View`
    align-items: center;
    width: 50px;
`;

export const ModificatorName= styled.Text` 
    font-size: 13px;
`;

export const ModificatorNumber = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const ModificatorNumberDesc = styled.Text`
    font-size: 13px;
`;

export const ModificatorDescription = styled.View`
    align-items: center;
`;
