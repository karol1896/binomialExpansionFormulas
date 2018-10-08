import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <div className={this.props.style.header}>
        {this.props.activeHeader && (
          <h1 className={this.props.style.h1}>
            Click and find out how to start calculate fast in simple way!
          </h1>
        )}
        <div onClick={this.props.onClick} className={this.props.style.button}>
          {this.props.activeHeader ? "Let's start" : "Starting panel"}
        </div>

        <style jsx>
          {`
            .header {
              padding: 10% 0;
              width: 100%;
              height: 70%;
              justify-content: center;
              display: flex;
              flex-wrap: wrap;
              background: white;
              transition: all 0.5s ease;
            }
            .h1 {
              padding: 5%;
            }
            .button {
              padding 5%;
              background: #00ff11;
              width:15%;
              box-shadow: 0px 0px 50px 20px rgba(0,255,17,1);
            }
            .button2{
              position: relative;
              z-index: 1;
              margin-left: 0px;
              height: 100%;
              width: 20%;
              background: #00ff11;
              box-shadow: 0px 0px 30px 10px rgba(0,255,17,1);
            }
            .header2 {
              height: 5%;
              width: 100%;
              display:flex;
              animation-name: toLeftSide;
              animation: toLeftSide 2s forwards;
              background-color: white;
              transition: all 0.5s ease;
            }
            @keyframes toLeftSide {
              from{justify-content: center;
              }
            to {justify-content: flex-start;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Header;
