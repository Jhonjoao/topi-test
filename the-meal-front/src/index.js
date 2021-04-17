import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

ReactDOM.render(
    <IconSettings iconPath="/icons">
        <App />
    </IconSettings>, 
document.getElementById('root'));