import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	card: {
		textAlign: 'center',
		margin: theme.spacing(5),
		padding: theme.spacing(1, 1, 1, 1),
	},
}));

const RtspComponent = ({ getOne, rtsp, match }) => {
	useEffect(() => {
		getOne(match.params.id);
	});
	const { name, url } = rtsp;
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent>
				<CardHeader title={name} />
				{url}
			</CardContent>
		</Card>
	);
};

RtspComponent.defaultProps = {
	rtsp: {},
	match: {},
};

RtspComponent.propTypes = {
	getOne: PropTypes.func.isRequired,
	rtsp: PropTypes.objectOf(PropTypes.any),
	match: PropTypes.objectOf(PropTypes.any),
};

export default RtspComponent;
