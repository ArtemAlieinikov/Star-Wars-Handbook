import React, { Component } from "react"

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from "../error-indicator";
import SwapiApiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
    swapiService = new SwapiApiService();

    state = {
        selectedItemId: null,
        globalError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ globalError: true });
      }

    onItemSelected = (id) => {
        this.setState({
            selectedItemId: id
        });
    }

    render() {
        if (this.state.globalError) {
            return <ErrorIndicator />
        }

        return (
        <div className="row detailed-information">
            <div className="col-sm-5">
                <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getPeople}
                    renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
                />
            </div>
            <div className="col-sm-6 item-details">
                <PersonDetails personId={this.state.selectedItemId}/>
            </div>
        </div>
        );
    }
}