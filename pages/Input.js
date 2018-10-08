import React from "react";
import ReactDOM from "react-dom";
import { validator } from "/home/karol/Documents/code/MyFirstApp/pages/Body.js";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input">
        <div>Please, insert {this.props.pos} number from 1 to 99</div>
        <input value={this.props.value} onChange={this.props.handleValue} />
        <style jsx>{`
          .input {
            display: inline-block;
            border: ${isNaN(validator(this.props.value)) && this.props.value
              ? "3px solid red"
              : ""};
            padding: 10px;
            border-radius: ${isNaN(validator(this.props.value)) &&
            this.props.value
              ? "10px"
              : ""};
            margin: 2px;
          }
        `}</style>
      </div>
    );
  }
}

export default Input;
