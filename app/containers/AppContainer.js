import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// TODO: import relevant actions
// TODO: import relevant components

let AppContainer = () => {
    return(
        <div>
            <h1>React App Container</h1>
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
