import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: this.props.maxChars,
      value: ''
    };
  }

  handleChange=(event)=>{
    this.setState({
      remaining: this.props.maxChars-Number(event.target.value.length),
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <p>Characters Remaining: {this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
