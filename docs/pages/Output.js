//@flow
import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image.js";
import { display as asString } from "./Element.js";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const pos = this.props.pos;
    let arg = this.props.arg;
    arg === 0 ? (arg = "") : arg;
    if (pos === 0) {
      return (
        arg && (
          <div
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
            className="output"
          >
            {arg > 9 && <Image value={asString(Math.floor(arg / 10))} />}
            <Image value={asString(arg % 10)} />
            <Image value="/static/zero.jpg" />
            <Image value="/static/zero.jpg" />
            <style jsx>
              {`
                .output {
                  display: inline-flex;
                  margin: 0;
                  justify-content: center;
                  width: 25%;
                }
                .output:hover {
                  box-shadow: inset 0px 0px 15px 9px rgba(0, 0, 0, 0.75);
                }
              `}
            </style>
          </div>
        )
      );
    } else if (pos === 1) {
      return (
        arg && (
          <div
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
            className="output"
          >
            {arg > 0 ? (
              <Image value="/static/plus.jpg" />
            ) : (
              <Image value="/static/minus.jpg" />
            )}
            {Math.abs(arg) > 9 && (
              <Image value={asString(Math.floor(Math.abs(arg / 10)) % 10)} />
            )}
            <Image value={asString(Math.abs(arg % 10))} />
            <Image value="/static/zero.jpg" />
            <style jsx>
              {`
                .output {
                  display: inline-flex;
                  width: 25%;
                  margin: 0;
                  justify-content: center;
                }
                .output:hover {
                  box-shadow: inset 0px 0px 15px 9px rgba(0, 0, 0, 0.75);
                }
              `}
            </style>
          </div>
        )
      );
    } else if (pos === 2) {
      return (
        arg && (
          <div
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
            className="output"
          >
            {arg > 0 ? (
              <Image value="/static/plus.jpg" />
            ) : (
              <Image value="/static/minus.jpg" />
            )}
            {Math.abs(arg) > 9 && (
              <Image value={asString(Math.floor(Math.abs(arg / 10)) % 10)} />
            )}
            <Image value={asString(Math.abs(arg % 10))} />
            <Image value="/static/zero.jpg" />
            <style jsx>
              {`
                .output {
                  display: inline-flex;
                  margin: 0;
                  width: 25%;
                  justify-content: center;
                }
                .output:hover {
                  box-shadow: inset 0px 0px 15px 9px rgba(0, 0, 0, 0.75);
                }
              `}
            </style>
          </div>
        )
      );
    } else
      return (
        arg && (
          <div
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
            className="output"
          >
            {arg > 0 ? (
              <Image value="/static/plus.jpg" />
            ) : (
              <Image value="/static/minus.jpg" />
            )}
            {Math.abs(arg) > 9 && (
              <Image value={asString(Math.floor(Math.abs(arg / 10)) % 10)} />
            )}
            <Image value={asString(Math.abs(arg % 10))} />
            <style jsx>
              {`
                .output {
                  display: inline-flex;
                  margin: 0;
                  width: 25%;
                  justify-content: center;
                }
                .output:hover {
                  box-shadow: inset 0px 0px 15px 9px rgba(0, 0, 0, 0.75);
                }
              `}
            </style>
          </div>
        )
      );
  }
}

export default Output;
