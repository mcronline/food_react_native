import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantThumb from './RestaurantThumb';
import { FlatList } from 'react-native-gesture-handler';

const restaurantList = ( { title, restaurants, navigation } ) => {
    if(!restaurants.length)
        return null;
    
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Details', { id : item.id})}    
                        >
                            <RestaurantThumb key={item.id} restaurant={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    title :{
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 15,
        marginBottom : 5
    },
    container : {
        marginBottom : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#CCC',
        paddingBottom : 10
        
    }
});

export default withNavigation(restaurantList);