import React, { Component } from 'react';

import './item-list.css';
import SwapiApiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {
    state = {
        items: null,
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((items) => {
                this.setState({items})
            })
    }

    renderItems(items) {
        return items.map((item) => {
            const { id } = item;
            
            return (
            <li className="list-group-item" key={id}
                onClick={() => this.props.onItemSelected(id)}>
                {this.props.renderItem(item)}
            </li>)
        });
    }

    render() {
        const { items } = this.state;

        if (!items) {
            return <Spinner />
        }

        const renderItems = this.renderItems(items).slice(0, 7);
        return (
        <div>
            <ul className ="item-list list-group">
                { renderItems }
            </ul>
        </div>);
    }
};