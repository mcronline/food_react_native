import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {

    const [term, setTerm ] = useState('');
    const [restaurants, searchRestaurants] = useRestaurants('');
    

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchRestaurants(term)}
            />
            <Text>We have found {restaurants.length} restaurant(s).</Text>
        </View>
    )
}

const style = StyleSheet.create({

});

export default SearchScreen;