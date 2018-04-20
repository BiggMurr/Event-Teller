import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const { user } = this.props;
        console.log(this.props)
        const userDataJSX = this.props.user.display_name ? (
            <div>
                <div>
                    <img src={user.img} alt="profile pic" />
                </div>
                <div>
                    <a href="">Hello, <strong>{user.display_name}</strong></a>
                    <ul>
                        <li>
                            <a href="http://localhost:3002/auth/logout" className="logout">
                                Logout
                               </a>
                        </li>
                    </ul>
                </div>
            </div>
        ) : (
                <p>Please log in!</p>
            );
        return (
            <div>
                {userDataJSX}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, { getUserInfo })(Profile);