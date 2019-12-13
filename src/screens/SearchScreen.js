import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {

    const [term, setTerm ] = useState('');
    const [restaurants, searchRestaurants] = useRestaurants('');
    
    const restaurantFilter = price => restaurants.filter((item) => item.price);
    
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchRestaurants(term)}
            />
            <RestaurantList restaurants={restaurantFilter('$')} />
        </View>
    )
}

const style = StyleSheet.create({

});

export default SearchScreen;