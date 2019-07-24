import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RtspItem from './RtspItem';

const list = (rtspList) => {
	if (rtspList.length === 0) {
		return (
			<Grid item xs={3}>
				No data yet...
			</Grid>
		);
	}

	return rtspList.map((item) => {
		let title = item.name || item.url;
		title = title.length >= 15 ? `${title.substring(0, 15)}...` : title;

		return (
			<Grid item xs={3} key={item.id}>
				<RtspItem title={title} item={item} />
			</Grid>
		);
	});
};

const RtspList = ({ rtspList }) => (
	<Grid container spacing={2}>
		{rtspList.length > 0 ? list(rtspList) : 'No Data yet...'}
	</Grid>
);

RtspList.defaultProps = {
	rtspList: [],
};

RtspList.propTypes = {
	rtspList: PropTypes.arrayOf(PropTypes.object),
};

export default RtspList;
