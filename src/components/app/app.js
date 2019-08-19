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
        <div className = 'star-wars-handbook-app'>
            <Header />
            <RandomPlanet />

            <div className="row item-list">
                <div className="col-sm-5">
                    <ItemList />
                </div>
                <div className="col-sm-7">
                    <PersonDetails />
                </div>
            </div>

            <PlanetDetails />
            <StarShipDetails />
        </div>);
    }
};