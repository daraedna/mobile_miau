import React, { useState, useEffect } from 'react';
import { Container } from 'native-base';

import api from '../services/api';

import AnimalList from '../components/AnimalList'

import Header from '../components/Header';

export default function List({ navigation }) {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await api.get('/animals');
        await setAnimals(response.data.animals);
        console.log(response.data);
    };

    return (
        <Container>
            <Header navigation={navigation} />
            <AnimalList animals={animals} />
        </Container>
    )
};