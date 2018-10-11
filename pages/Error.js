import React from "react";
import ReactDOM from "react-dom";

const message = string => {
  const objMessage = {
    easy: "Easy fellow. Let's start with smaller number.",
    negative: `Your number is negative. The negative number case is quite 
    similar to positive one. That's why it will be easier if you type in 
    right value.`,
    error: "Your input in not a number. Please  type right value.",
    integer: "Right now let's just focus on integral numbers.",
    zero: "You typed 0.Zero time any number is zero.  Please type right value."
  };
  return objMessage[string];
};

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{message(this.props.value)}</h1>
        <style jsx>
          {`
            div {
              width: 45%;
              display: inline-flex;
              text-align: center;
              padding: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Error;
