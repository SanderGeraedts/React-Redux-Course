import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCNEu1ZO8EiIQ9tkKRmrQLMYrbpqr990es',
            authDomain: 'manager-8eca3.firebaseapp.com',
            databaseURL: 'https://manager-8eca3.firebaseio.com',
            projectId: 'manager-8eca3',
            storageBucket: 'manager-8eca3.appspot.com',
            messagingSenderId: '957250204548'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;