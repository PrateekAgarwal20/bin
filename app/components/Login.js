import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import * as firebase from 'firebase';

// firebase configurations
var config = {
    apiKey: 'AIzaSyCk_0KslSmCVEUyTda0TjmFRC3IjBi3uuA',
    authDomain: "storage-7c882.firebaseapp.com",
    databaseURL: "https://storage-7c882.firebaseio.com",
    projectId: "storage-7c882",
    storageBucket: "storage-7c882.appspot.com",
    messagingSenderId: "727556459415"
};

firebase.initializeApp(config);

const auth = firebase.auth();

// login
const login = (email, pass) => {
    // authenticate user
    const promise = auth.signInWithEmailAndPassword(email, pass)
    // if successful allow user to view protected routes
    // if error stay on login and log error
    promise.catch(e => console.log(e.message))
}

// signup
const signup = (email, pass) => {
    // crete user an log in
    const promise = auth.createUserWithEmailAndPassword(email, pass)
    // if successful allow user to view protected routes
    // if error stay on login and log error
    promise.catch(e => console.log(e.message))
}

export default function Root({ store }) {
    return (
        <div>hi</div>

    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
