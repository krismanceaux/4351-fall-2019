import React, { Component } from 'react';
import { getJwt } from '../utils/jwt';
import { withRouter } from 'react-router-dom';

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push('/');
    }

    fetch('http://localhost:5000/getUser', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.roleID == 1) {
          this.setState({
            user: res.id
          });
        } else {
          this.props.history.push('/home');
        }
      })
      .then(this.render())
      .catch(err => {
        console.log(err);
        localStorage.removeItem('jwt');
        this.props.history.push('/');
      });
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(AuthenticatedComponent);
