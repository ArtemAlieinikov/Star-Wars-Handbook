import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand main-nav-element" href="#">Star Wars Handbook</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">People <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Starships <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Planets <span className="sr-only"></span></a>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>);
    }
};