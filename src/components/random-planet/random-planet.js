import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import SwapiApiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiApiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoadedError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onPlanetLoaded = (planet) => {
        this.setState(
        {
            planet,
            loading: false,
            error: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 1;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onPlanetLoadedError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const errorMessage  = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(error || loading) ? <PlanetView planet={ planet }/> : null;

        return (
            <div className = "random-planet">
                <div className = "random-planet-info row">
                    { errorMessage }
                    { spinner }
                    { content }
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