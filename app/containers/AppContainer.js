import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

// TODO: import relevant actions
import Login from '../components/Login';
import PageContainer from './PageContainer';
import Home from '../components/Home';

let AppContainer = () => {
    // TODO: This should be a Switch Router kind of deal
    return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
    );
};

AppContainer.propTypes = {

};

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

export default AppContainer;
