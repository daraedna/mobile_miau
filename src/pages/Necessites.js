import React, { useState, useEffect } from 'react';
import { Container } from 'native-base';

import Header from '../components/Header';
import NecessiteList from '../components/NecessiteList'

import api from '../services/api';

export default function List({ navigation }) {
    const [necessities, setNecessities] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await api.get('/necessitiesList');
        await setNecessities(response.data.necessities);
        // console.log(response.data);        
    };

    return (
        <Container>
            <Header navigation={navigation} />
            <NecessiteList necessities={necessities} />
        </Container>
    )
};
