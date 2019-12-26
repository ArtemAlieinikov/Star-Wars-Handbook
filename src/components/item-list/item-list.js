import React, { Component } from 'react';

import './item-list.css';
import SwapiApiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {
    swapiServie = new SwapiApiService();

    state = {
        people: null
    }

    componentDidMount() {
        this.swapiServie
            .getPeople()
            .then((people) => {
                this.setState({people})
            })
    }

    renderItems(people) {
        return people.map(({ id, name }) => {
            return (
            <li className="list-group-item" key={id}
                onClick={() => this.props.onItemSelected(id)}>
                {name}
            </li>)
        });
    }

    render() {
        const { people } = this.state;

        if (!people) {
            return <Spinner />
        }

        const peopleItems = this.renderItems(people);
        return (
        <div>
            <ul className ="item-list list-group">
                { peopleItems }
            </ul>
        </div>);
    }
};