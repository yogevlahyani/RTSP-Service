import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	card: {
		textAlign: 'center',
		padding: theme.spacing(1, 1, 1, 1),
	},
}));

const RtspItem = ({ title, item }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent>
				<Link to={`/rtsp/${item.id}`}>
					{title}
				</Link>
			</CardContent>
		</Card>
	);
};

RtspItem.propTypes = {
	title: PropTypes.string.isRequired,
	item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RtspItem;
