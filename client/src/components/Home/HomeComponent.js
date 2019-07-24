import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddRtspForm from '../Rtsp/AddRtspForm';
import RtspList from '../Rtsp/RtspList';

const useStyles = makeStyles(theme => ({
	app: {
		flexGrow: 1,
		padding: theme.spacing(5, 5, 5, 5),
	},
	addIcon: {
		position: 'absolute',
		right: 20,
		bottom: 20,
	},
}));

const HomeComponent = ({
	user,
	fetchAllRtsp,
	rtspList,
	addRtsp,
}) => {
	const [rtspModalOpen, setRtspModalOpen] = useState(false);
	useEffect(() => {
		fetchAllRtsp();
	}, [fetchAllRtsp]);
	const classes = useStyles();
	const token = localStorage.getItem('token') || user.token;

	const handleRtspModalOpen = () => setRtspModalOpen(true);
	const handleRtspModalClose = () => setRtspModalOpen(false);

	if (!token) {
		return <Redirect to={{ pathname: 'login' }} />;
	}

	return (
		<Container className={classes.app}>
			<Grid container spacing={2}>
				<RtspList rtspList={rtspList} />
			</Grid>
			<Fab
				size="small"
				color="secondary"
				aria-label="Add"
				className={classes.addIcon}
				onClick={handleRtspModalOpen}
			>
				<AddIcon />
			</Fab>

			<Dialog
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={rtspModalOpen}
				onClose={handleRtspModalClose}
			>
				<DialogTitle id="simple-dialog-title">Registration</DialogTitle>
				<AddRtspForm handleModalClose={handleRtspModalClose} addRtsp={addRtsp} />
			</Dialog>
		</Container>
	);
};

HomeComponent.defaultProps = {
	user: {},
	rtspList: [],
};

HomeComponent.propTypes = {
	user: PropTypes.objectOf(PropTypes.string),
	fetchAllRtsp: PropTypes.func.isRequired,
	addRtsp: PropTypes.func.isRequired,
	rtspList: PropTypes.arrayOf(PropTypes.object),
};

export default HomeComponent;
