
import React from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './app/lib/ImageSelect';

class TestOne extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('TestOne', () => TestOne);
