import React, { Component } from 'react';

import SwapiApiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiApiService();

    state = {
        name: null,
        population: null,
        climate: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        this.swapiService
        .getPlanet(4)
        .then((planet) => this.setState(
            {
                name: planet.name,
                population: planet.population,
                climate: planet.climate,
                diameter: planet.diameter
            }));
    }

    render() {
        let { name, population, climate, diameter } = this.state;

        return (
            <div className = "random-planet">
                <div className = "random-planet-info row">
                    <div className="col-sm-3">
                        <img src="https://i1.wp.com/manyworlds.space/wp-content/uploads/2019/03/PlanetsCouldLookLikeEyeBalls_1024-2.jpg?ssl=1" alt="Smiley face" height="250" width="250" />
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
                </div>
            </div>);
    }
};