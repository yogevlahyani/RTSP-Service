import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegistrationContainer from '../Registration/RegistrationContainer';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const LoginComponent = ({ authenticate, token, error }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [snackbarOpen, setSnackbarVisibility] = useState(false);
	const [email, setEmail] = useState('example');
	const [password, setPassword] = useState('password');
	const [registrationModalOpen, setRegistrationModalOpen] = React.useState(false);
	const classes = useStyles();

	useEffect(() => {
		if (localStorage.getItem('token') || token) {
			setIsAuth(true);
		}
	}, [token]);

	useEffect(() => {
		if (error) {
			setSnackbarVisibility(true);
		}
	}, [error]);

	if (isAuth) {
		return <Redirect to={{ pathname: '/' }} />;
	}

	const handleRegistrationModalOpen = () => {
		setRegistrationModalOpen(true);
	};

	const handleRegistrationModalClose = () => {
		setRegistrationModalOpen(false);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={event => setEmail(event.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={event => setPassword(event.target.value)}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={() => authenticate(email, password)}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item>
							<Link onClick={handleRegistrationModalOpen} variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>

			{/* // Temporary */}
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				key="top,right"
				open={snackbarOpen}
				onClose={() => setSnackbarVisibility(false)}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{error}</span>}
			/>

			<Dialog
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={registrationModalOpen}
				onClose={handleRegistrationModalClose}
			>
				<DialogTitle id="simple-dialog-title">Registration</DialogTitle>
				<RegistrationContainer handleRegistrationModalClose={handleRegistrationModalClose} />
			</Dialog>
		</Container>
	);
};

LoginComponent.defaultProps = {
	token: null,
	// Temporary
	error: null,
};

LoginComponent.propTypes = {
	authenticate: PropTypes.func.isRequired,
	token: PropTypes.string,
	// Temporary
	error: PropTypes.string,
};

export default LoginComponent;
