import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PlusOneSharp from '@material-ui/icons/PlusOneSharp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const AddRtspForm = ({ addRtsp, handleModalClose }) => {
	const [name, setName] = useState('');
	const [url, setUrl] = useState('');
	const classes = useStyles();

	const addRtspVideo = async () => {
		if (!url) {
			return;
		}

		await addRtsp(name, url);
		handleModalClose();
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<PlusOneSharp />
				</Avatar>
				<Typography component="h1" variant="h5">
					Add RTSP URL
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="name"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Name"
								autoFocus
								value={name}
								onChange={event => setName(event.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								error={!url}
								id="url"
								label="RTSP Url"
								name="url"
								autoComplete="url"
								value={url}
								onChange={event => setUrl(event.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={addRtspVideo}
					>
						Add video
					</Button>
				</form>
			</div>
		</Container>
	);
};

AddRtspForm.propTypes = {
	addRtsp: PropTypes.func.isRequired,
	handleModalClose: PropTypes.func.isRequired,
};

export default AddRtspForm;
