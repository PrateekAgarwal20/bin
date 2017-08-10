import React from 'react';

import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyDOQlkW0VQXOlETu1OXG5_unH4qKOfiRQ8',
    authDomain: 'bin-eb830.firebaseapp.com',
    databaseURL: 'https://bin-eb830.firebaseio.com',
    projectId: 'bin-eb830',
    storageBucket: '',
    messagingSenderId: '689886384025'
};
firebase.initializeApp(config);


function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('connected boiii');
    } else {
    // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
    }
}

function checkLoginState() {
    console.log('here');
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    }, true);
}


const Login = () => {
    return (
        <div>
            <div id = "fb-root" />
            <script>
                ${
                    window.fbAsyncInit = function() {
                        FB.init({
                            appId: '491285881219076',
                            cookie: true,  // enable cookies to allow the server to access
                            // the session
                            xfbml: true,  // parse social plugins on this page
                            version: 'v2.8' // use graph api version 2.8
                        });

                        FB.getLoginStatus(function(response) {
                            statusChangeCallback(response);
                        });
                    }(function(d, s, id) {
                        let js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'http://connect.facebook.net/en_US/sdk.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'))
                }
            </script>

            <h1>Login</h1>
            <button onClick={() => checkLoginState()}>YOOOOO </button>
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false" onClick={() => checkLoginState()}/>
            <div id="status" />
        </div>
    );
};


export default Login;
