import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
import StarShipDetails from '../starship-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiApiService from '../../services/swapi-service';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {
    swapiService = new SwapiApiService();

    state = {
        showRandomPlanet: true,
        globalError: false
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return { showRandomPlanet: !state.showRandomPlanet }
        });
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ globalError: true });
      }

    render() {
        if (this.state.globalError) {
            return <ErrorIndicator />
        }

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
                <ErrorButton />
            </div>

            <PeoplePage />

            <div className="row detailed-information">
                <div className="col-sm-5">
                    <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.swapiService.getPlanets}
                        renderItem={({name, population, diameter}) => `${name} ${population} ${diameter}`}
                    />
                </div>
                <div className="col-sm-6 item-details">
                    <PersonDetails personId={this.state.selectedItemId}/>
                </div>
            </div>

            <div className="row detailed-information">
                <div className="col-sm-5">
                    <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.swapiService.getStarships}
                        renderItem={({name, MGLT, model}) => `${name} ${MGLT} ${model}`}
                    />
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