import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [term, setTerm ] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search',{
            params : {
                term : term,
                limit : 50,
                location : 'san jose'
            }
        });
        console.log(response.data.businesses);
        setRestaurants(response.data.businesses);
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />
            <Text>We have found {restaurants.length} restaurant(s).</Text>
        </View>
    )
}

const style = StyleSheet.create({

});

export default SearchScreen;