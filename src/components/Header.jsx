import React from 'react';
import {Link, withRouter} from 'react-router-dom'

import {fakeAuthService} from '../service'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuButton from './menuButton.jsx';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


const AuthButton = withRouter(
    ({ history }) =>
        fakeAuthService.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuthService.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
);

class Header extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <MenuButton  items={[{title:'Public page', url:"/public"},{title:'Main', url:"/main"}]}/>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Botmasterzzz
                        </Typography>
                        {<MenuButton  items={['Profile','User Management', 'Logout']}/>}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);