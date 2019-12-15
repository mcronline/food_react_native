import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = ({ navigation }) => {

    const [ term, setTerm ] = useState('');
    const [restaurants, searchRestaurants] = useRestaurants('');
    
    const restaurantFilter = price => restaurants.filter((item) => item.price === price);
    
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchRestaurants(term)}
            />
            <ScrollView>
                <RestaurantList title="Low Prices" restaurants={restaurantFilter('$')} navigation={navigation} />
                <RestaurantList title="Medium Prices" restaurants={restaurantFilter('$$')} navigation={navigation} />
                <RestaurantList title="Higher Prices" restaurants={restaurantFilter('$$$')} navigation={navigation} />
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    
});

export default SearchScreen;