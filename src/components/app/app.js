import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
import StarShipDetails from '../starship-details';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedItemId: null
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return { showRandomPlanet: !state.showRandomPlanet }
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItemId: id
        });
    }

    render() {
        let randomPlanetWidget = this.state.showRandomPlanet ?
            <RandomPlanet /> :
            null;

        return (
        <div className = 'star-wars-handbook-app'>
            <Header />
            { randomPlanetWidget }

            <div className="row mb2 button-row">
                <button type="button" class="btn btn-warning"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
            </div>

            <div className="row detailed-information">
                <div className="col-sm-5">
                    <ItemList onItemSelected={this.onItemSelected}/>
                </div>
                <div className="col-sm-6 item-details">
                    <PersonDetails personId={this.state.selectedItemId}/>
                </div>
            </div>

            <PlanetDetails />
            <StarShipDetails />
        </div>);
    }
};