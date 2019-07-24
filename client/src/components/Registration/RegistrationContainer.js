import { connect } from 'react-redux';
import { register } from '../../redux/thunks/user.thunk';
import RegistrationComponent from './RegistrationComponent';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	register: (email, name, password) => dispatch(register(email, name, password)),
});

const RegistrationContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(RegistrationComponent);

export default RegistrationContainer;
