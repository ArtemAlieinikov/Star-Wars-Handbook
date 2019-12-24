import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div class='error-indicator'>
            <img src={require('./death-star-error.png')} alt="death star drone" height='150mm' width='150mm'/>
            <span class='boom'>ERROR</span>
            <span>This drons have no chill...</span>
        </div>
    );
}

export default ErrorIndicator;