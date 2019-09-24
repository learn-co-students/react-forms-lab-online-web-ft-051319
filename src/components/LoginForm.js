import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
 
    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()

    if (this.state.username === "" || this.state.password === ""){
      return
    }else{
    return this.props.handleLogin(this.state)
    }

    // if (!this.state.username || !this.state.password) return    (same as above but a shorter version)

    // this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.onChangeHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.onChangeHandler} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
