import { connect } from 'react-redux';
import { login } from '../../thunks/user.thunk';
import LoginComponent from './LoginComponent';

const mapStateToProps = state => ({
	token: state.user.token,
	// Temporary
	error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
	authenticate: (email, password) => dispatch(login(email, password)),
});

const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginComponent);

export default LoginContainer;
