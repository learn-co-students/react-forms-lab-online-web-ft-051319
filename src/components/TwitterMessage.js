import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({msg: e.target.value})
  }

  charsRemaining = () => (this.props.maxChars - this.state.msg.length)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.msg} onChange={this.handleInputChange} />
        <br />
        <p>Characters remaining: {this.charsRemaining()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
