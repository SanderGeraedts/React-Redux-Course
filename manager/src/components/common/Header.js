// Import libraries
import React from 'react';
import {View, Text} from 'react-native';

// Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 20
    }
};

// Make the commponent available to other
export {Header};