import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Greeting from './greeting'

const msp = ( state) => (
  { user: state.entities.users[state.session.id] }
);

const mdp = (dispatch) => (
  {
    logOut: () => dispatch(logOut());
  }
);

export default connect(msp, mdp)(Greeting);
