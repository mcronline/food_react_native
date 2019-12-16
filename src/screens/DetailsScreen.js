import React, { useState, useEffect } from 'react'
import {View, Text, Image, FlatList, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation }) => {

    const [ restaurant, setRestaurant ] = useState(null)
    const id = navigation.getParam('id');
    
    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);        
        setRestaurant(response.data);
    }

    useEffect(() => {
        getRestaurant(id);
    },[])

    if(!restaurant)
        return null;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={restaurant.photos}
                keyExtractor={(photoUrl) => photoUrl}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri : item }} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center'
    },
    image : {
        width : 300,
        height : 200,
        margin : 5
    },
    title : {
        fontSize : 18,
        textAlign : 'center',
        fontWeight : 'bold',
        padding : 10
    }
});

export default DetailsScreen;