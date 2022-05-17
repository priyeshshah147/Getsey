import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(this.props.closeModal)

  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    return(this.props.deleteErrors())
 }



  demoUser(){
    const user = { username: "Demo", password: "password" }
    this.props.processForm(user).then(this.props.closeModal)
  }

  render() {
    return (
      <div>
        
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
          <div ><label  className="modal-heading">Sign in to continue</label></div>
            <br/>
            <label className="login-label">Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label className="login-label">Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            {this.renderErrors()}
            <br/>
            <input className="login-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        <br></br>
        <button className="demo-user-button" onClick={this.demoUser}>Demo User</button>
      </div>
      </div>
    );
  }
}

export default LoginForm;
