import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    let charsRemaining = this.props.maxChars - event.target.value.length;

    if (charsRemaining >= 0){
      this.setState({
        [event.target.name]: event.target.value
      })
    } else {
      alert("Tweet cannot have more than 140 characters.")
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>{this.props.maxChars - this.state.message.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
