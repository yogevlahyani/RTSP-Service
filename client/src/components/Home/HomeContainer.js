import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { getAll, create } from '../../redux/thunks/rtsp.thunk';

const mapStateToProps = state => ({
	user: state.user,
	rtspList: state.rtsp.list,
});

const mapDispatchToProps = dispatch => ({
	fetchAllRtsp: () => dispatch(getAll()),
	addRtsp: (name, url) => dispatch(create(name, url)),
});

const HomeContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomeComponent);

export default HomeContainer;
