import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const RestaurantThumb = ( props ) => {
    
    return(
        <View style={style.container}>
            <Image style={style.image} source={{ uri : props.restaurant.image_url}} />
            <Text style={style.name}>{props.restaurant.name}</Text>
            <Text>Ratings: {props.restaurant.rating}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        marginLeft : 15
    },
    image:{
        width:250,
        height: 120,
        borderRadius: 4,
        marginBottom : 5
    },
    name : {
        fontWeight : 'bold'
    }
});

export default RestaurantThumb;