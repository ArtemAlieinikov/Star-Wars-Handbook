import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
import StarShipDetails from '../starship-details';

export default class App extends Component {
    render() {
        return (
        <div>
            <Header />
            App Text
            <ItemList />
            <PersonDetails />
            <RandomPlanet />
            <PlanetDetails />
            <StarShipDetails />
        </div>);
    }
};