import React from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const {labelStyle, containerStyle, inputStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>

            <TextInput
                style={inputStyle}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        height: 40
    }
};

export {Input};