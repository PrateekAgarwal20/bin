import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarSeparator, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';
import {connect} from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';


import About from '../components/About'

const favoriteIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const accountIcon = <FontIcon className="material-icons md-48">account_circle</FontIcon>;
const boxIcon = <FontIcon style={{backgroundColor: "#01579B", color: "#FDD835"}}className="material-icons md-48">stop</FontIcon>;

// TODO: import relevant actions
// TODO: import relevant components

let AppContainer = () => {
    return(
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <AppBar title="BlockBox"
                style={{backgroundColor:"#FDD835"}}
                iconElementLeft={boxIcon}
                iconElementRight={
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                {accountIcon}
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>}
            />
            <h1>React App Container</h1>
            <About />
            <Paper zDepth={1}>
                <Toolbar>
                    <ToolbarGroup style={{
                    float: 'none',
                    marginLeft: 'auto',
                    marginRight: 'auto'}}>
                        <ToolbarTitle style={{fontSize:"12px", paddingRight:"0px"}} text="Hand crafted with" />
                        <FontIcon style={{color:"#B71C1C", padding:"0px 5px 0px 5px"}} className="material-icons">favorite</FontIcon>
                        <ToolbarTitle style={{fontSize:"12px", paddingRight:"0px"}} text="in Philadelphia" />
                        <ToolbarSeparator style={{backgroundColor: "#01579B"}}/>
                        <ToolbarTitle style={{fontSize:"14px", padding:"0px 121px 0px 32px"}} text="&copy; BlockBox" />
                    </ToolbarGroup>
                </Toolbar>
            </Paper>
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
