import React from "react";
import ReactDOM from "react-dom";
import Image from "/home/karol/Documents/code/MyFirstApp/pages/Image";
import Element from "/home/karol/Documents/code/MyFirstApp/pages/Element.js";
import Output from "/home/karol/Documents/code/MyFirstApp/pages/Output.js";
import Input from "/home/karol/Documents/code/MyFirstApp/pages/Input.js";

const divide = value => {
  value = Number(value);
  let y = [0, 0];
  y[0] = value - (value % 10);
  if (value % 10 < 5 && value > 10) {
    y[1] = value % 10;
  } else if (value > 0 && value < 10) {
    y[0] = 10;
    y[1] = value - 10;
  } else if (value === 0) {
    y = [0, 0];
  } else {
    value > 90 ? (y = [90, value % 10]) : (y = [y[0] + 10, (value % 10) - 10]);
  }
  return y;
};
export const validator = value => {
  const a = Number(value);
  if (!value) {
    return "empty";
  } else if (!isNaN(a)) {
    return Number.isInteger(a)
      ? a >= 0
        ? a > 0
          ? a < 100
            ? a
            : "easy"
          : "zero"
        : "negative"
      : "integer";
  }
  return "error";
};
const display = value => {
  let photo = [
    "/static/zero.jpg",
    "/static/one.jpg",
    "/static/two.jpg",
    "/static/three.jpg",
    "/static/four.jpg",
    "/static/five.jpg",
    "/static/six.jpg",
    "/static/seven.jpg",
    "/static/eight.jpg",
    "/static/nine.jpg"
  ];
  value = Number(value);
  return photo[value];
};

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: {
        first: false,
        second: false,
        third: false,
        fourth: false
      },
      firstValue: "",
      secondValue: ""
    };
    this.handleFirstValue = this.handleFirstValue.bind(this);
    this.handleSecondValue = this.handleSecondValue.bind(this);
  }
  handleFirstValue(event) {
    this.setState({ firstValue: event.target.value });
  }
  handleSecondValue(event) {
    this.setState({ secondValue: event.target.value });
  }
  highlight(pos) {
    if (pos === 0 && !this.state.highlight.first) {
      this.setState({ highlight: { first: true } });
    } else if (pos === 0 && this.state.highlight.first) {
      this.setState({ highlight: { first: false } });
    } else if (pos === 1 && !this.state.highlight.second) {
      this.setState({ highlight: { second: true } });
    } else if (pos === 1 && this.state.highlight.second) {
      this.setState({ highlight: { second: false } });
    } else if (pos === 2 && !this.state.highlight.third) {
      this.setState({ highlight: { third: true } });
    } else if (pos === 2 && this.state.highlight.third) {
      this.setState({ highlight: { third: false } });
    } else if (pos === 3 && !this.state.highlight.fourth) {
      this.setState({ highlight: { fourth: true } });
    } else if (pos === 3 && this.state.highlight.fourth) {
      this.setState({ highlight: { fourth: false } });
    }
  }
  render() {
    const first = this.state.firstValue;
    const second = this.state.secondValue;
    const firstDivision = divide(first);
    const secondDivision = divide(second);
    const args = [
      (firstDivision[0] * secondDivision[0]) / 100,
      (firstDivision[0] * secondDivision[1]) / 10,
      (firstDivision[1] * secondDivision[0]) / 10,
      firstDivision[1] * secondDivision[1]
    ];
    return (
      <div className={this.props.style}>
        <h1>
          After you type in number, hover over output to see from where it comes
          from
        </h1>

        <Input
          value={first}
          handleValue={this.handleFirstValue}
          pos={"first"}
        />

        <Input
          value={second}
          handleValue={this.handleSecondValue}
          pos={"second"}
        />
        <div className="solution">
          <Element
            highlight={this.state.highlight}
            value={validator(first)}
            pos={1}
          />
          <Element
            highlight={this.state.highlight}
            value={validator(second)}
            pos={2}
          />
          {typeof validator(first) === "number" &&
            typeof validator(second) === "number" && (
              <>
                <div className="equality">
                  {first && second && <Image value="/static/equal.jpg" />}
                </div>
                <Output
                  onMouseOver={() => this.highlight(0)}
                  onMouseOut={() => this.highlight(0)}
                  arg={args[0]}
                  pos={0}
                />
                <Output
                  onMouseOver={() => this.highlight(1)}
                  onMouseOut={() => this.highlight(1)}
                  arg={args[1]}
                  pos={1}
                />
                <Output
                  onMouseOver={() => this.highlight(2)}
                  onMouseOut={() => this.highlight(2)}
                  arg={args[2]}
                  pos={2}
                />
                <Output
                  onMouseOver={() => this.highlight(3)}
                  onMouseOut={() => this.highlight(3)}
                  arg={args[3]}
                  pos={3}
                />
              </>
            )}
        </div>
        <style jsx>
          {`
            .equality {
              display: inline-flex;
              justify-content: center;
              width: 100%;
            }

            .solution {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .body {
              width: auto;
              height: 80%;
              background-color: white;
              animation-name: example2;
              animation-duration: 0.5s;
            }
            .body2 {
              display: inline-block;
              position: relative;
              width: 100%;
              height: 95%;
              background-color: white;
              animation-name: example;
              animation: example 0.5s forwards;
              min-height: 532px;
              min-width: 1151px;
            }
            @keyframes example {
              from {
                opacity: 0;
                margin-top: 20px;
              }
              to {
                opacity: 1;
                margin-top: 0px;
              }
            }
            @keyframes example2 {
              from {
                opacity: 1;
                margin-top: 0px;
              }
              to {
                opacity: 0;
                margin-top: 20px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Body;
