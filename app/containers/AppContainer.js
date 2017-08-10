import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// TODO: import relevant actions
import Login from '../components/Login';

let AppContainer = () => {
    return(
        <div>
            <Login />
        </div>
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
