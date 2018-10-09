import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    classHeader: {
      header: "header",
      button: "button",
      h1: "h1",
      side: "center"
    },
    classBody: "body",
    body: false
  };
  activeHeader = true;
  toggleClass() {
    if (this.state.classHeader.header === "header") {
      this.activeHeader = false;
      this.setState({
        classHeader: {
          header: "header2",
          button: "button2",
          h1: "h12"
        },
        classBody: "body2"
      });
      setTimeout(
        () =>
          this.setState({
            body: true,
            side: "left"
          }),
        500
      );
    } else {
      this.setState({
        classHeader: {
          header: "header",
          button: "button",
          h1: "h1"
        }
      });
      this.activeHeader = true;
      setTimeout(() => {
        this.setState({
          body: false
        });
      }, 500);
      this.setState({
        classBody: "body"
      });
    }
  }
  render() {
    return (
      <div className="app">
        <div className="content">
          <Header
            activeHeader={this.activeHeader}
            style={this.state.classHeader}
            onClick={() => this.toggleClass()}
          />
          {this.state.body && <Body style={this.state.classBody}>body</Body>}
        </div>

        <style jsx>
          {`
            .app {
              width: 100%;
              height: 93vh;
              padding: 1% 0;
              background-image: url(/static/backgroundPhoto.jpeg);
              text-align: center;
            }
            .content {
              height: 90%;
              margin: auto;
              width: 90%;
            }
          `}
        </style>
      </div>
    );
  }
}
export default App;
