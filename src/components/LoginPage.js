import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

// export default class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: props.expense ? props.expense.username : '',
//             password: props.expense ? props.expense.password : '',
//         };
//     };
//     render() {
//         return (
//             <div>
//                 <form>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         autoFocus
//                         value={this.state.username}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                     />
//                     <button>Login</button>
//                 </form>
//             </div>
//         )
//     };
// };