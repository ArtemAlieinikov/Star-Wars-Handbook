import React, { Component } from 'react';

import Spinner from '../spinner';

import SwapiApiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiApiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState(
        {
            planet,
            loading: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 22 + 2);
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded);
    }

    render() {
        const { planet, loading } = this.state;

        const componentToShow = loading ? <Spinner /> : <PlanetView planet={ planet }/>

        return (
            <div className = "random-planet">
                <div className = "random-planet-info row">
                    { componentToShow }
                </div>
            </div>);
    }
};

const PlanetView = ({ planet }) => {
    let { id, name, population, climate, diameter } = planet;

    return (
        <React.Fragment>
            <div className="col-sm-3">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} height="250" width="250" />
            </div>
            <div className="col-sm-5">
                <h3>{ name }</h3>
                <ul className = "list-group list-group-flush random-planet-list">
                    <li className="list-group-item">
                        <span>Population</span>: <span>{ population }</span>
                    </li>
                    <li className="list-group-item">
                        <span>Climate</span>: <span>{ climate }</span>
                    </li>
                    <li className="list-group-item">
                        <span>Diameter</span>: <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};