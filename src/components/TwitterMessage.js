import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }
    remainingChars = () => {
     let remaining = this.props.maxChars - this.state.message.length
     return remaining
    }

    handleMessageChange = (event) => {
      this.setState({
        message: event.target.value
      })
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        <strong>Remaining Characters: {this.remainingChars()}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
