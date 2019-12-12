import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return(
        <View style={style.backgroundStyle}>
            <Feather
                name="search"
                size={30}
                style={style.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={style.inputStyle}
                value={term}
                placeholder="Search"
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const style = StyleSheet.create({

    backgroundStyle : {
        backgroundColor : '#F0EEEE',
        height : 50,
        borderRadius : 5,
        marginHorizontal : 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },

    inputStyle : {
        flex: 1,
        fontSize : 18
    },

    iconStyle : {
        marginHorizontal : 10
    }
});

export default SearchBar;