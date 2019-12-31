import React, { Component } from 'react';

import './person-details';
import SwapiApiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class PersonDetails extends Component {
    swapiService = new SwapiApiService();

    state = {
        person: null,
        loading: true
    };

    componentDidUpdate(previousProps) {
        if (this.props.personId !== previousProps.personId) {
            this.setState({ loading: true });
            this.updatePerson();
        }
    }

    componentDidMount() {
        this.updatePerson();
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then(person => {
                this.setState({ person, loading: false });
            });
    };

    render() {
        if (!this.state.person) {
            return (<span>Select a person from a list</span>);
        }

        if (this.state.loading) {
            return <Spinner />;
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
        <div className = "person-details">
            <div className = "person-details-info row">
                <div className="col-sm-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Smiley face" height="200" width="150" />
                </div>
                <div className="col-sm-5">
                    <h3>Name: {name}</h3>
                    <ul className = "list-group list-group-flush person-details-list">
                        <li className="list-group-item">Gender: {gender}</li>
                        <li className="list-group-item">Birth year: {birthYear}</li>
                        <li className="list-group-item">Eye color: {eyeColor}</li>
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        </div>);
    }
};