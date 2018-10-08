import React from "react";
import ReactDOM from "react-dom";
import Image from "/home/karol/Documents/code/MyFirstApp/pages/Image.js";
import Error from "/home/karol/Documents/code/MyFirstApp/pages/Error.js";

const divide = value => {
  let y = [];
  y[0] = value - (value % 10);
  if (value % 10 < 5 && value > 10) {
    y[1] = value % 10;
  } else if (value <= 10) {
    y[0] = 10;
    y[1] = value - 10;
  } else {
    value > 90 ? (y = [90, value % 10]) : (y = [y[0] + 10, (value % 10) - 10]);
  }
  console.log("y", y);
  return y;
};

export const display = value => {
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

class Element extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const i = Number(this.props.order);
    const value = this.props.value;
    const first = this.props.highlight.first;
    const second = this.props.highlight.second;
    const third = this.props.highlight.third;
    const fourth = this.props.highlight.fourth;
    const pos = this.props.pos;
    const firstValue =
      value > 10 ? display(divide(value)[0] / 10) : display(value);
    return isNaN(value) && value !== "empty"
      ? value && <Error value={value} />
      : !isNaN(value) && (
          <div className="element">
            <Image value="/static/leftParenthesis.jpg" />
            <Image
              highlight={first || (second && pos === 1) || (third && pos === 2)}
              value={
                first || (second && pos === 1) || (third && pos === 2)
                  ? divide(value)[0] / 10
                  : display(divide(value)[0] / 10)
              }
            />
            <Image
              highlight={first || (second && pos === 1) || (third && pos === 2)}
              value={
                first || (second && pos === 1) || (third && pos === 2)
                  ? 0
                  : "/static/zero.jpg"
              }
            />
            <Image value="/static/plus.jpg" />
            {divide(value)[1] > 0 ? (
              <div>
                <Image
                  highlight={
                    (second && pos === 2) || (third && pos === 1) || fourth
                  }
                  value={
                    (second && pos === 2) || (third && pos === 1) || fourth
                      ? divide(value)[1]
                      : display(divide(value)[1])
                  }
                />
              </div>
            ) : (
              <div>
                <Image value="/static/leftParenthesis.jpg" />
                <Image
                  highlight={
                    (second && pos === 2) || (third && pos === 1) || fourth
                  }
                  value={
                    (second && pos === 2) || (third && pos === 1) || fourth
                      ? "-"
                      : "/static/minus.jpg"
                  }
                />
                <Image
                  highlight={
                    (second && pos === 2) || (third && pos === 1) || fourth
                  }
                  value={
                    (second && pos === 2) || (third && pos === 1) || fourth
                      ? -1 * divide(value)[1]
                      : display(-1 * divide(value)[1])
                  }
                />
                <Image value="/static/rightParenthesis.jpg" />
              </div>
            )}
            <Image value="/static/rightParenthesis.jpg" />
            <style jsx>{`
              .element {
                display: inline-flex;
                justify-content: ${pos === 1 ? "flex-end" : "flex-start"};
                margin: 1px;
                justify-content: center;
                width: 49%;
              }
              .element div {
                display: flex;
                flex-flow: row wrap;
                width: ${divide(value)[1] > 0 ? "50px" : "240px"};
              }
            `}</style>
          </div>
        );
  }
}

export default Element;
