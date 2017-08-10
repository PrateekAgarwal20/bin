import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const usIcon = <FontIcon className="material-icons">supervisor_account</FontIcon>;
const signUpIcon = <FontIcon className="material-icons">assignment</FontIcon>;
const nearbyIcon = <IconLocationOn />;
// TODO: import relevant actions
// TODO: import relevant components

let About = () => {
    return(
        <div>
            <Paper zDepth={1}>
                <BottomNavigation >
                    <BottomNavigationItem
                        label="Nearby Storage"
                        icon={nearbyIcon}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Sign up"
                        icon={signUpIcon}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Contact us"
                        icon={usIcon}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        </div>
    );
};

About.propTypes = {

};

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

About = connect(
    mapStateToProps,
    mapDispatchToProps
)(About);

export default About;
