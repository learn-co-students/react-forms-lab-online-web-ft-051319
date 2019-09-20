import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (e) => {
    let current = e.target.value.length
    this.setState({
      [e.target.name]: e.target.value,
      remaining: this.state.remaining - current
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" name="message" id="message" value={this.state.message}
        onChange={this.handleChange}/> Remaining chars: {this.state.remaining}
      </div>
    );
  }
}

export default TwitterMessage;
