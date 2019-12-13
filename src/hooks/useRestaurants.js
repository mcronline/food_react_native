import {useState, useEffect} from 'react';
import { Alert } from 'react-native';
import yelp from '../api/yelp';

export default (initialSearch) => {

    const [restaurants, setRestaurants] = useState([]);
    useEffect(() =>{
        searchRestaurants(initialSearch);
    },[]);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('Something went wrong');
    useEffect(()=>{
        if(showAlert)
            Alert(alertMessage);
    },[showAlert])
    

    const searchRestaurants = async (term) => {
        try{

        const response = await yelp.get('/search',{
            params : {
                term : term,
                limit : 50,
                location : 'san jose'
            }
        });
        
        setRestaurants(response.data.businesses);

        }catch(e){
            setAlertMessage("Couldn't retrieve restaurant data. Try again later");
            setShowAlert(true);
        }
    }

    return [restaurants, searchRestaurants];

}