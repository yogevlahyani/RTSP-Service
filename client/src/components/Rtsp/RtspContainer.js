import { connect } from 'react-redux';
import RtspComponent from './RtspComponent';
import { getOne } from '../../redux/thunks/rtsp.thunk';

const mapStateToProps = state => ({
	rtsp: state.rtsp,
});

const mapDispatchToProps = dispatch => ({
	getOne: id => dispatch(getOne(id)),
});

const RtspContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(RtspComponent);

export default RtspContainer;
