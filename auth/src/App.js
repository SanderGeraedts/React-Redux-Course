import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from "./components/LoginForm";

class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBZrFJbefPwwbddgEK6CG2s2XfJTJVS-6Y',
            authDomain: 'authentication-1ec18.firebaseapp.com',
            databaseURL: 'https://authentication-1ec18.firebaseio.com',
            projectId: 'authentication-1ec18',
            storageBucket: 'authentication-1ec18.appspot.com',
            messagingSenderId: '306917226145'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Card>
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                </Card>
                );
            case false:
                return <LoginForm/>
            default:
                return <Spinner size="large"/>

        }

        if (this.state.loggedIn) {

        }


    }

    render() {
        return (
            <View style={{height: 100}}>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;