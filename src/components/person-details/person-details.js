import React, { Component } from 'react';

import './person-details';

export default class PersonDetails extends Component {
    render() {
        return (
        <div className = "person-details">
            <div className = "person-details-info row">
                <div className="col-sm-3">
                    <img src="https://i1.wp.com/manyworlds.space/wp-content/uploads/2019/03/PlanetsCouldLookLikeEyeBalls_1024-2.jpg?ssl=1" alt="Smiley face" height="200" width="150" />
                </div>
                <div className="col-sm-5">
                    <h3>Planet name</h3>
                    <ul className = "list-group list-group-flush person-details-list">
                        <li className="list-group-item">Test text 1</li>
                        <li className="list-group-item">Test text 1</li>
                        <li className="list-group-item">Test test 2</li>
                    </ul>
                </div>
            </div>
        </div>);
    }
};