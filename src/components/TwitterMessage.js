import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

     this.state = {
      value: "",
      valueTail:"",
      count: 0
    };
  }
  handleMessage(event) {
    var valueHead;
    valueHead = event.target.value.substr(0,this.props.maxChars-1)

    this.setState({value: valueHead})
    var valueTail = event.target.value.substring(this.props.maxChars)
    this.setState({valueTail: event.target.value.substring(this.props.maxChars)})

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={event => this.handleMessage(event)}/>
        {(this.props.maxChars-this.state.value.length)}
    </div>
    );
  }
}

export default TwitterMessage;
