import React from 'react';

import {fakeAuthService, userService} from '../service';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    paperinfo: {
        backgroundColor: '#e0f7fa',
        marginTop: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});


class Login extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: '',
            redirectToReferrer: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;

        userService.loginAuth(username, password)
            .then(
                user => {
                    // const { from } = this.props.location.state || { from: { pathname: "/" } };
                    // this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );

        fakeAuthService.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });

        // this.setState({ submitted: true });
        // const { username, password, returnUrl } = this.state;
        //
        // // stop here if form is invalid
        // if (!(username && password)) {
        //     return;
        // }
        //
        // this.setState({ loading: true });
        // userService.login(username, password)
        //     .then(
        //         user => {
        //             const { from } = this.props.location.state || { from: { pathname: "/" } };
        //             this.props.history.push(from);
        //         },
        //         error => this.setState({ error, loading: false })
        //     );
    }


    login = () => {
        fakeAuthService.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        // if (redirectToReferrer) return <Redirect to={from} />;
        const { classes } = this.props;

        const { username, password, submitted, loading, error } = this.state;
        return (
            <div className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <Paper className={classes.paperinfo}>
                    Username: admin<br />
                    Password: iTAgZwgjdYdxeDXN
                </Paper>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="username">Email Address</InputLabel>
                        <Input id="username" name="username" autoComplete="username" value={username} onChange={this.handleChange} autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" value={password} onChange={this.handleChange} autoComplete="current-password" />
                    </FormControl>
                    {/*<FormControlLabel*/}
                        {/*control={<Checkbox value="remember" color="primary" />}*/}
                        {/*label="Remember me"*/}
                    {/*/>*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log in
                    </Button>
                </form>
            </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Login);