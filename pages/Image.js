import React from "react";
import ReactDOM from "react-dom";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(prevProps, props) {
    if (prevProps !== props) {
      return true;
    }
    return false;
  }

  render() {
    const highlight = this.props.highlight;
    return (
      <div className="photo">
        {!highlight ? <img src={this.props.value} /> : `${this.props.value}`}
        <style jsx>
          {`
            .photo {
              position: relative;
              width: 60px;
              height: 120px;
              background-color: ${highlight ? "yellow" : ""};
              font-size: 100px;
              text-align: center;
            }
            img {
              position: absolute;
              left: 5%;
              top: 15%;
              width: 90%;
              height: 70%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Image;
