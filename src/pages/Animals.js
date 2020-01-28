import React, { useState, useEffect } from 'react';
import { Container } from 'native-base';

import Header from '../components/Header';
import AnimalList from '../components/AnimalList'

import api from '../services/api';

export default function List({ navigation }) {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        const response = await api.get('/animals');
        await setAnimals(response.data.animals);
    };

    return (
        <Container>
            <Header navigation={navigation} />
            <AnimalList animals={animals} />
        </Container>
    )
};