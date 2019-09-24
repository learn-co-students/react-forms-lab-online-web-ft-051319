import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  } 

  charChangeHandler = (e) =>{
      this.setState({
        [e.target.name]: e.target.value
      })
  }

 // charCount = () => {this.props.maxChars - this.state.message}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.charChangeHandler} value={this.state.message} />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
