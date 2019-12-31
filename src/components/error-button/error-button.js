import React, { Component } from 'react';

export default class ErrorButton extends Component {
    state = {
        renderError: false
    }

    render() {
        if (this.state.renderError) {
            this.foo.unknownProperty = "ERROR"
        }

        return (
            <button
                className="error-button btn btn-danger btn-lg"
                onClick={() => this.setState({ renderError: true })}
            >
                Initialize ERROR
            </button>
        );
    }
}