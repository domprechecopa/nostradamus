import React from 'react';
import ResistenceViewPlayer from './ResistenceViewPlayer';
import { View } from 'react-native';

export default function AtributerViewPlayer(){
    return(
    <View style={{flex: 1 , flexDirection: 'row'}}>
        <ResistenceViewPlayer />
    </View>
    );
}