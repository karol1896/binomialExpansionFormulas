module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Body.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Image__ = __webpack_require__("./pages/Image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Element_js__ = __webpack_require__("./pages/Element.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Output_js__ = __webpack_require__("./pages/Output.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Input_js__ = __webpack_require__("./pages/Input.js");
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/Body.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var divide = function divide(value) {
  value = Number(value);
  var y = [0, 0];
  y[0] = value - value % 10;

  if (value % 10 < 5 && value > 10) {
    y[1] = value % 10;
  } else if (value > 0 && value < 10) {
    y[0] = 10;
    y[1] = value - 10;
  } else if (value === 0) {
    y = [0, 0];
  } else {
    value > 90 ? y = [90, value % 10] : y = [y[0] + 10, value % 10 - 10];
  }

  return y;
};

var validator = function validator(value) {
  var a = Number(value);

  if (!value) {
    return "empty";
  } else if (!isNaN(a)) {
    return Number.isInteger(a) ? a >= 0 ? a > 0 ? a < 100 ? a : "easy" : "zero" : "negative" : "integer";
  }

  return "error";
};

var display = function display(value) {
  var photo = ["/static/zero.jpg", "/static/one.jpg", "/static/two.jpg", "/static/three.jpg", "/static/four.jpg", "/static/five.jpg", "/static/six.jpg", "/static/seven.jpg", "/static/eight.jpg", "/static/nine.jpg"];
  value = Number(value);
  return photo[value];
};

var Body =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    var _this;

    _classCallCheck(this, Body);

    _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));
    _this.state = {
      highlight: {
        first: false,
        second: false,
        third: false,
        fourth: false
      },
      firstValue: "",
      secondValue: ""
    };
    _this.handleFirstValue = _this.handleFirstValue.bind(_assertThisInitialized(_this));
    _this.handleSecondValue = _this.handleSecondValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Body, [{
    key: "handleFirstValue",
    value: function handleFirstValue(event) {
      this.setState({
        firstValue: event.target.value
      });
    }
  }, {
    key: "handleSecondValue",
    value: function handleSecondValue(event) {
      this.setState({
        secondValue: event.target.value
      });
    }
  }, {
    key: "highlight",
    value: function highlight(pos) {
      if (pos === 0 && !this.state.highlight.first) {
        this.setState({
          highlight: {
            first: true
          }
        });
      } else if (pos === 0 && this.state.highlight.first) {
        this.setState({
          highlight: {
            first: false
          }
        });
      } else if (pos === 1 && !this.state.highlight.second) {
        this.setState({
          highlight: {
            second: true
          }
        });
      } else if (pos === 1 && this.state.highlight.second) {
        this.setState({
          highlight: {
            second: false
          }
        });
      } else if (pos === 2 && !this.state.highlight.third) {
        this.setState({
          highlight: {
            third: true
          }
        });
      } else if (pos === 2 && this.state.highlight.third) {
        this.setState({
          highlight: {
            third: false
          }
        });
      } else if (pos === 3 && !this.state.highlight.fourth) {
        this.setState({
          highlight: {
            fourth: true
          }
        });
      } else if (pos === 3 && this.state.highlight.fourth) {
        this.setState({
          highlight: {
            fourth: false
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var first = this.state.firstValue;
      var second = this.state.secondValue;
      var firstDivision = divide(first);
      var secondDivision = divide(second);
      var args = [firstDivision[0] * secondDivision[0] / 100, firstDivision[0] * secondDivision[1] / 10, firstDivision[1] * secondDivision[0] / 10, firstDivision[1] * secondDivision[1]];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-3074875907" + " " + (this.props.style || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: "jsx-3074875907"
      }, "After you type in number, hover over output to see from where it comes from"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Input_js__["a" /* default */], {
        value: first,
        handleValue: this.handleFirstValue,
        pos: "first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Input_js__["a" /* default */], {
        value: second,
        handleValue: this.handleSecondValue,
        pos: "second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-3074875907" + " " + "solution"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Element_js__["a" /* default */], {
        highlight: this.state.highlight,
        value: validator(first),
        pos: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Element_js__["a" /* default */], {
        highlight: this.state.highlight,
        value: validator(second),
        pos: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), typeof validator(first) === "number" && typeof validator(second) === "number" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-3074875907" + " " + "equality"
      }, first && second && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image__["a" /* default */], {
        value: "/static/equal.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Output_js__["a" /* default */], {
        onMouseOver: function onMouseOver() {
          return _this2.highlight(0);
        },
        onMouseOut: function onMouseOut() {
          return _this2.highlight(0);
        },
        arg: args[0],
        pos: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Output_js__["a" /* default */], {
        onMouseOver: function onMouseOver() {
          return _this2.highlight(1);
        },
        onMouseOut: function onMouseOut() {
          return _this2.highlight(1);
        },
        arg: args[1],
        pos: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Output_js__["a" /* default */], {
        onMouseOver: function onMouseOver() {
          return _this2.highlight(2);
        },
        onMouseOut: function onMouseOut() {
          return _this2.highlight(2);
        },
        arg: args[2],
        pos: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Output_js__["a" /* default */], {
        onMouseOver: function onMouseOver() {
          return _this2.highlight(3);
        },
        onMouseOut: function onMouseOut() {
          return _this2.highlight(3);
        },
        arg: args[3],
        pos: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3074875907",
        css: ".equality.jsx-3074875907{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.solution.jsx-3074875907{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.body.jsx-3074875907{width:auto;height:80%;background-color:white;-webkit-animation-name:example2-jsx-3074875907;animation-name:example2-jsx-3074875907;-webkit-animation-duration:0.5s;animation-duration:0.5s;}.body2.jsx-3074875907{display:inline-block;position:relative;width:100%;height:95%;background-color:white;-webkit-animation-name:example-jsx-3074875907;animation-name:example-jsx-3074875907;-webkit-animation:example-jsx-3074875907 0.5s forwards;animation:example-jsx-3074875907 0.5s forwards;min-height:532px;min-width:1151px;}@-webkit-keyframes example-jsx-3074875907{from{opacity:0;margin-top:20px;}to{opacity:1;margin-top:0px;}}@keyframes example-jsx-3074875907{from{opacity:0;margin-top:20px;}to{opacity:1;margin-top:0px;}}@-webkit-keyframes example2-jsx-3074875907{from{opacity:1;margin-top:0px;}to{opacity:0;margin-top:20px;}}@keyframes example2-jsx-3074875907{from{opacity:1;margin-top:0px;}to{opacity:0;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0JvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEtXLEFBR21DLEFBTVQsQUFNQSxBQU9VLEFBWVQsQUFJQSxBQU1BLEFBSUEsVUFiTSxBQUlELEFBTUEsQUFJQyxDQXZDTCxBQU1GLFVBT08sQ0FOSyxHQXVCdkIsQUFNQSxDQVZBLEFBY0EsYUExQlcsTUFOYSxLQU9iLFdBQ1ksdUJBQ0EsQ0FoQlIsaUJBUFEsNkJBZUMsV0FQRCwwQkFnQlMsbUJBUmxDLGNBZmEsV0FDYiw2QkFPQSw2QkFnQm1CLGlCQUNBLGlCQUNuQiIsImZpbGUiOiJwYWdlcy9Cb2R5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcm9sL0RvY3VtZW50cy9jb2RlL015Rmlyc3RBcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50LmpzXCI7XG5pbXBvcnQgT3V0cHV0IGZyb20gXCIuL091dHB1dC5qc1wiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0LmpzXCI7XG5cbmNvbnN0IGRpdmlkZSA9IHZhbHVlID0+IHtcbiAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICBsZXQgeSA9IFswLCAwXTtcbiAgeVswXSA9IHZhbHVlIC0gKHZhbHVlICUgMTApO1xuICBpZiAodmFsdWUgJSAxMCA8IDUgJiYgdmFsdWUgPiAxMCkge1xuICAgIHlbMV0gPSB2YWx1ZSAlIDEwO1xuICB9IGVsc2UgaWYgKHZhbHVlID4gMCAmJiB2YWx1ZSA8IDEwKSB7XG4gICAgeVswXSA9IDEwO1xuICAgIHlbMV0gPSB2YWx1ZSAtIDEwO1xuICB9IGVsc2UgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgeSA9IFswLCAwXTtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA+IDkwID8gKHkgPSBbOTAsIHZhbHVlICUgMTBdKSA6ICh5ID0gW3lbMF0gKyAxMCwgKHZhbHVlICUgMTApIC0gMTBdKTtcbiAgfVxuICByZXR1cm4geTtcbn07XG5leHBvcnQgY29uc3QgdmFsaWRhdG9yID0gdmFsdWUgPT4ge1xuICBjb25zdCBhID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBcImVtcHR5XCI7XG4gIH0gZWxzZSBpZiAoIWlzTmFOKGEpKSB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoYSlcbiAgICAgID8gYSA+PSAwXG4gICAgICAgID8gYSA+IDBcbiAgICAgICAgICA/IGEgPCAxMDBcbiAgICAgICAgICAgID8gYVxuICAgICAgICAgICAgOiBcImVhc3lcIlxuICAgICAgICAgIDogXCJ6ZXJvXCJcbiAgICAgICAgOiBcIm5lZ2F0aXZlXCJcbiAgICAgIDogXCJpbnRlZ2VyXCI7XG4gIH1cbiAgcmV0dXJuIFwiZXJyb3JcIjtcbn07XG5jb25zdCBkaXNwbGF5ID0gdmFsdWUgPT4ge1xuICBsZXQgcGhvdG8gPSBbXG4gICAgXCIvc3RhdGljL3plcm8uanBnXCIsXG4gICAgXCIvc3RhdGljL29uZS5qcGdcIixcbiAgICBcIi9zdGF0aWMvdHdvLmpwZ1wiLFxuICAgIFwiL3N0YXRpYy90aHJlZS5qcGdcIixcbiAgICBcIi9zdGF0aWMvZm91ci5qcGdcIixcbiAgICBcIi9zdGF0aWMvZml2ZS5qcGdcIixcbiAgICBcIi9zdGF0aWMvc2l4LmpwZ1wiLFxuICAgIFwiL3N0YXRpYy9zZXZlbi5qcGdcIixcbiAgICBcIi9zdGF0aWMvZWlnaHQuanBnXCIsXG4gICAgXCIvc3RhdGljL25pbmUuanBnXCJcbiAgXTtcbiAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICByZXR1cm4gcGhvdG9bdmFsdWVdO1xufTtcblxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoaWdobGlnaHQ6IHtcbiAgICAgICAgZmlyc3Q6IGZhbHNlLFxuICAgICAgICBzZWNvbmQ6IGZhbHNlLFxuICAgICAgICB0aGlyZDogZmFsc2UsXG4gICAgICAgIGZvdXJ0aDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBmaXJzdFZhbHVlOiBcIlwiLFxuICAgICAgc2Vjb25kVmFsdWU6IFwiXCJcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRmlyc3RWYWx1ZSA9IHRoaXMuaGFuZGxlRmlyc3RWYWx1ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2Vjb25kVmFsdWUgPSB0aGlzLmhhbmRsZVNlY29uZFZhbHVlLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlRmlyc3RWYWx1ZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgaGFuZGxlU2Vjb25kVmFsdWUoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuICBoaWdobGlnaHQocG9zKSB7XG4gICAgaWYgKHBvcyA9PT0gMCAmJiAhdGhpcy5zdGF0ZS5oaWdobGlnaHQuZmlyc3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdobGlnaHQ6IHsgZmlyc3Q6IHRydWUgfSB9KTtcbiAgICB9IGVsc2UgaWYgKHBvcyA9PT0gMCAmJiB0aGlzLnN0YXRlLmhpZ2hsaWdodC5maXJzdCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZ2hsaWdodDogeyBmaXJzdDogZmFsc2UgfSB9KTtcbiAgICB9IGVsc2UgaWYgKHBvcyA9PT0gMSAmJiAhdGhpcy5zdGF0ZS5oaWdobGlnaHQuc2Vjb25kKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGlnaGxpZ2h0OiB7IHNlY29uZDogdHJ1ZSB9IH0pO1xuICAgIH0gZWxzZSBpZiAocG9zID09PSAxICYmIHRoaXMuc3RhdGUuaGlnaGxpZ2h0LnNlY29uZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZ2hsaWdodDogeyBzZWNvbmQ6IGZhbHNlIH0gfSk7XG4gICAgfSBlbHNlIGlmIChwb3MgPT09IDIgJiYgIXRoaXMuc3RhdGUuaGlnaGxpZ2h0LnRoaXJkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGlnaGxpZ2h0OiB7IHRoaXJkOiB0cnVlIH0gfSk7XG4gICAgfSBlbHNlIGlmIChwb3MgPT09IDIgJiYgdGhpcy5zdGF0ZS5oaWdobGlnaHQudGhpcmQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdobGlnaHQ6IHsgdGhpcmQ6IGZhbHNlIH0gfSk7XG4gICAgfSBlbHNlIGlmIChwb3MgPT09IDMgJiYgIXRoaXMuc3RhdGUuaGlnaGxpZ2h0LmZvdXJ0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZ2hsaWdodDogeyBmb3VydGg6IHRydWUgfSB9KTtcbiAgICB9IGVsc2UgaWYgKHBvcyA9PT0gMyAmJiB0aGlzLnN0YXRlLmhpZ2hsaWdodC5mb3VydGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdobGlnaHQ6IHsgZm91cnRoOiBmYWxzZSB9IH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLnN0YXRlLmZpcnN0VmFsdWU7XG4gICAgY29uc3Qgc2Vjb25kID0gdGhpcy5zdGF0ZS5zZWNvbmRWYWx1ZTtcbiAgICBjb25zdCBmaXJzdERpdmlzaW9uID0gZGl2aWRlKGZpcnN0KTtcbiAgICBjb25zdCBzZWNvbmREaXZpc2lvbiA9IGRpdmlkZShzZWNvbmQpO1xuICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICAoZmlyc3REaXZpc2lvblswXSAqIHNlY29uZERpdmlzaW9uWzBdKSAvIDEwMCxcbiAgICAgIChmaXJzdERpdmlzaW9uWzBdICogc2Vjb25kRGl2aXNpb25bMV0pIC8gMTAsXG4gICAgICAoZmlyc3REaXZpc2lvblsxXSAqIHNlY29uZERpdmlzaW9uWzBdKSAvIDEwLFxuICAgICAgZmlyc3REaXZpc2lvblsxXSAqIHNlY29uZERpdmlzaW9uWzFdXG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQWZ0ZXIgeW91IHR5cGUgaW4gbnVtYmVyLCBob3ZlciBvdmVyIG91dHB1dCB0byBzZWUgZnJvbSB3aGVyZSBpdCBjb21lc1xuICAgICAgICAgIGZyb21cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB2YWx1ZT17Zmlyc3R9XG4gICAgICAgICAgaGFuZGxlVmFsdWU9e3RoaXMuaGFuZGxlRmlyc3RWYWx1ZX1cbiAgICAgICAgICBwb3M9e1wiZmlyc3RcIn1cbiAgICAgICAgLz5cblxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB2YWx1ZT17c2Vjb25kfVxuICAgICAgICAgIGhhbmRsZVZhbHVlPXt0aGlzLmhhbmRsZVNlY29uZFZhbHVlfVxuICAgICAgICAgIHBvcz17XCJzZWNvbmRcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2x1dGlvblwiPlxuICAgICAgICAgIDxFbGVtZW50XG4gICAgICAgICAgICBoaWdobGlnaHQ9e3RoaXMuc3RhdGUuaGlnaGxpZ2h0fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbGlkYXRvcihmaXJzdCl9XG4gICAgICAgICAgICBwb3M9ezF9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RWxlbWVudFxuICAgICAgICAgICAgaGlnaGxpZ2h0PXt0aGlzLnN0YXRlLmhpZ2hsaWdodH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWxpZGF0b3Ioc2Vjb25kKX1cbiAgICAgICAgICAgIHBvcz17Mn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0eXBlb2YgdmFsaWRhdG9yKGZpcnN0KSA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbGlkYXRvcihzZWNvbmQpID09PSBcIm51bWJlclwiICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVxdWFsaXR5XCI+XG4gICAgICAgICAgICAgICAgICB7Zmlyc3QgJiYgc2Vjb25kICYmIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvZXF1YWwuanBnXCIgLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE91dHB1dFxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHRoaXMuaGlnaGxpZ2h0KDApfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gdGhpcy5oaWdobGlnaHQoMCl9XG4gICAgICAgICAgICAgICAgICBhcmc9e2FyZ3NbMF19XG4gICAgICAgICAgICAgICAgICBwb3M9ezB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8T3V0cHV0XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5oaWdobGlnaHQoMSl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiB0aGlzLmhpZ2hsaWdodCgxKX1cbiAgICAgICAgICAgICAgICAgIGFyZz17YXJnc1sxXX1cbiAgICAgICAgICAgICAgICAgIHBvcz17MX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxPdXRwdXRcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB0aGlzLmhpZ2hsaWdodCgyKX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHRoaXMuaGlnaGxpZ2h0KDIpfVxuICAgICAgICAgICAgICAgICAgYXJnPXthcmdzWzJdfVxuICAgICAgICAgICAgICAgICAgcG9zPXsyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE91dHB1dFxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHRoaXMuaGlnaGxpZ2h0KDMpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gdGhpcy5oaWdobGlnaHQoMyl9XG4gICAgICAgICAgICAgICAgICBhcmc9e2FyZ3NbM119XG4gICAgICAgICAgICAgICAgICBwb3M9ezN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmVxdWFsaXR5IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvbHV0aW9uIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlMjtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvZHkyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICAgICAgICAgICAgICBhbmltYXRpb246IGV4YW1wbGUgMC41cyBmb3J3YXJkcztcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTMycHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTE1MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBleGFtcGxlMiB7XG4gICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIl19 */\n/*@ sourceURL=pages/Body.js */"
      }));
    }
  }]);

  return Body;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Body);

/***/ }),

/***/ "./pages/Element.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return display; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Image_js__ = __webpack_require__("./pages/Image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Error_js__ = __webpack_require__("./pages/Error.js");
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/Element.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var divide = function divide(value) {
  var y = [];
  y[0] = value - value % 10;

  if (value % 10 < 5 && value > 10) {
    y[1] = value % 10;
  } else if (value <= 10) {
    y[0] = 10;
    y[1] = value - 10;
  } else {
    value > 90 ? y = [90, value % 10] : y = [y[0] + 10, value % 10 - 10];
  }

  console.log("y", y);
  return y;
};

var display = function display(value) {
  var photo = ["/static/zero.jpg", "/static/one.jpg", "/static/two.jpg", "/static/three.jpg", "/static/four.jpg", "/static/five.jpg", "/static/six.jpg", "/static/seven.jpg", "/static/eight.jpg", "/static/nine.jpg"];
  value = Number(value);
  return photo[value];
};

var Element =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Element, _React$Component);

  function Element(props) {
    _classCallCheck(this, Element);

    return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
  }

  _createClass(Element, [{
    key: "render",
    value: function render() {
      var i = Number(this.props.order);
      var value = this.props.value;
      var first = this.props.highlight.first;
      var second = this.props.highlight.second;
      var third = this.props.highlight.third;
      var fourth = this.props.highlight.fourth;
      var pos = this.props.pos;
      var firstValue = value > 10 ? display(divide(value)[0] / 10) : display(value);
      return isNaN(value) && value !== "empty" ? value && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Error_js__["a" /* default */], {
        value: value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }) : !isNaN(value) && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["916259691", [pos === 1 ? "flex-end" : "flex-start", divide(value)[1] > 0 ? "50px" : "240px"]]]) + " " + "element"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: "/static/leftParenthesis.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        highlight: first || second && pos === 1 || third && pos === 2,
        value: first || second && pos === 1 || third && pos === 2 ? divide(value)[0] / 10 : display(divide(value)[0] / 10),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        highlight: first || second && pos === 1 || third && pos === 2,
        value: first || second && pos === 1 || third && pos === 2 ? 0 : "/static/zero.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: "/static/plus.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), divide(value)[1] > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["916259691", [pos === 1 ? "flex-end" : "flex-start", divide(value)[1] > 0 ? "50px" : "240px"]]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        highlight: second && pos === 2 || third && pos === 1 || fourth,
        value: second && pos === 2 || third && pos === 1 || fourth ? divide(value)[1] : display(divide(value)[1]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["916259691", [pos === 1 ? "flex-end" : "flex-start", divide(value)[1] > 0 ? "50px" : "240px"]]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: "/static/leftParenthesis.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        highlight: second && pos === 2 || third && pos === 1 || fourth,
        value: second && pos === 2 || third && pos === 1 || fourth ? "-" : "/static/minus.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        highlight: second && pos === 2 || third && pos === 1 || fourth,
        value: second && pos === 2 || third && pos === 1 || fourth ? -1 * divide(value)[1] : display(-1 * divide(value)[1]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: "/static/rightParenthesis.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: "/static/rightParenthesis.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "916259691",
        css: ".element.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:".concat(pos === 1 ? "flex-end" : "flex-start", ";-webkit-justify-content:").concat(pos === 1 ? "flex-end" : "flex-start", ";-ms-flex-pack:").concat(pos === 1 ? "flex-end" : "flex-start", ";justify-content:").concat(pos === 1 ? "flex-end" : "flex-start", ";margin:1px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:49%;}.element.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;width:").concat(divide(value)[1] > 0 ? "50px" : "240px", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0VsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUh3QixBQUdxQyxBQU9QLDBFQUNNLDRCQVAwQix5Q0FRVixtQ0FDckMsK0dBUmEsV0FDWSxtR0FDYixVQUNaIiwiZmlsZSI6InBhZ2VzL0VsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fyb2wvRG9jdW1lbnRzL2NvZGUvTXlGaXJzdEFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2UuanNcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvci5qc1wiO1xuXG5jb25zdCBkaXZpZGUgPSB2YWx1ZSA9PiB7XG4gIGxldCB5ID0gW107XG4gIHlbMF0gPSB2YWx1ZSAtICh2YWx1ZSAlIDEwKTtcbiAgaWYgKHZhbHVlICUgMTAgPCA1ICYmIHZhbHVlID4gMTApIHtcbiAgICB5WzFdID0gdmFsdWUgJSAxMDtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxMCkge1xuICAgIHlbMF0gPSAxMDtcbiAgICB5WzFdID0gdmFsdWUgLSAxMDtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA+IDkwID8gKHkgPSBbOTAsIHZhbHVlICUgMTBdKSA6ICh5ID0gW3lbMF0gKyAxMCwgKHZhbHVlICUgMTApIC0gMTBdKTtcbiAgfVxuICBjb25zb2xlLmxvZyhcInlcIiwgeSk7XG4gIHJldHVybiB5O1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSB2YWx1ZSA9PiB7XG4gIGxldCBwaG90byA9IFtcbiAgICBcIi9zdGF0aWMvemVyby5qcGdcIixcbiAgICBcIi9zdGF0aWMvb25lLmpwZ1wiLFxuICAgIFwiL3N0YXRpYy90d28uanBnXCIsXG4gICAgXCIvc3RhdGljL3RocmVlLmpwZ1wiLFxuICAgIFwiL3N0YXRpYy9mb3VyLmpwZ1wiLFxuICAgIFwiL3N0YXRpYy9maXZlLmpwZ1wiLFxuICAgIFwiL3N0YXRpYy9zaXguanBnXCIsXG4gICAgXCIvc3RhdGljL3NldmVuLmpwZ1wiLFxuICAgIFwiL3N0YXRpYy9laWdodC5qcGdcIixcbiAgICBcIi9zdGF0aWMvbmluZS5qcGdcIlxuICBdO1xuICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gIHJldHVybiBwaG90b1t2YWx1ZV07XG59O1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGkgPSBOdW1iZXIodGhpcy5wcm9wcy5vcmRlcik7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5wcm9wcy5oaWdobGlnaHQuZmlyc3Q7XG4gICAgY29uc3Qgc2Vjb25kID0gdGhpcy5wcm9wcy5oaWdobGlnaHQuc2Vjb25kO1xuICAgIGNvbnN0IHRoaXJkID0gdGhpcy5wcm9wcy5oaWdobGlnaHQudGhpcmQ7XG4gICAgY29uc3QgZm91cnRoID0gdGhpcy5wcm9wcy5oaWdobGlnaHQuZm91cnRoO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMucHJvcHMucG9zO1xuICAgIGNvbnN0IGZpcnN0VmFsdWUgPVxuICAgICAgdmFsdWUgPiAxMCA/IGRpc3BsYXkoZGl2aWRlKHZhbHVlKVswXSAvIDEwKSA6IGRpc3BsYXkodmFsdWUpO1xuICAgIHJldHVybiBpc05hTih2YWx1ZSkgJiYgdmFsdWUgIT09IFwiZW1wdHlcIlxuICAgICAgPyB2YWx1ZSAmJiA8RXJyb3IgdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgOiAhaXNOYU4odmFsdWUpICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRcIj5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvbGVmdFBhcmVudGhlc2lzLmpwZ1wiIC8+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtmaXJzdCB8fCAoc2Vjb25kICYmIHBvcyA9PT0gMSkgfHwgKHRoaXJkICYmIHBvcyA9PT0gMil9XG4gICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICBmaXJzdCB8fCAoc2Vjb25kICYmIHBvcyA9PT0gMSkgfHwgKHRoaXJkICYmIHBvcyA9PT0gMilcbiAgICAgICAgICAgICAgICAgID8gZGl2aWRlKHZhbHVlKVswXSAvIDEwXG4gICAgICAgICAgICAgICAgICA6IGRpc3BsYXkoZGl2aWRlKHZhbHVlKVswXSAvIDEwKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGhpZ2hsaWdodD17Zmlyc3QgfHwgKHNlY29uZCAmJiBwb3MgPT09IDEpIHx8ICh0aGlyZCAmJiBwb3MgPT09IDIpfVxuICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgZmlyc3QgfHwgKHNlY29uZCAmJiBwb3MgPT09IDEpIHx8ICh0aGlyZCAmJiBwb3MgPT09IDIpXG4gICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgIDogXCIvc3RhdGljL3plcm8uanBnXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAge2RpdmlkZSh2YWx1ZSlbMV0gPiAwID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtcbiAgICAgICAgICAgICAgICAgICAgKHNlY29uZCAmJiBwb3MgPT09IDIpIHx8ICh0aGlyZCAmJiBwb3MgPT09IDEpIHx8IGZvdXJ0aFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAoc2Vjb25kICYmIHBvcyA9PT0gMikgfHwgKHRoaXJkICYmIHBvcyA9PT0gMSkgfHwgZm91cnRoXG4gICAgICAgICAgICAgICAgICAgICAgPyBkaXZpZGUodmFsdWUpWzFdXG4gICAgICAgICAgICAgICAgICAgICAgOiBkaXNwbGF5KGRpdmlkZSh2YWx1ZSlbMV0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvbGVmdFBhcmVudGhlc2lzLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQ9e1xuICAgICAgICAgICAgICAgICAgICAoc2Vjb25kICYmIHBvcyA9PT0gMikgfHwgKHRoaXJkICYmIHBvcyA9PT0gMSkgfHwgZm91cnRoXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgIChzZWNvbmQgJiYgcG9zID09PSAyKSB8fCAodGhpcmQgJiYgcG9zID09PSAxKSB8fCBmb3VydGhcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIi9zdGF0aWMvbWludXMuanBnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtcbiAgICAgICAgICAgICAgICAgICAgKHNlY29uZCAmJiBwb3MgPT09IDIpIHx8ICh0aGlyZCAmJiBwb3MgPT09IDEpIHx8IGZvdXJ0aFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAoc2Vjb25kICYmIHBvcyA9PT0gMikgfHwgKHRoaXJkICYmIHBvcyA9PT0gMSkgfHwgZm91cnRoXG4gICAgICAgICAgICAgICAgICAgICAgPyAtMSAqIGRpdmlkZSh2YWx1ZSlbMV1cbiAgICAgICAgICAgICAgICAgICAgICA6IGRpc3BsYXkoLTEgKiBkaXZpZGUodmFsdWUpWzFdKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9yaWdodFBhcmVudGhlc2lzLmpwZ1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcmlnaHRQYXJlbnRoZXNpcy5qcGdcIiAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuZWxlbWVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiAke3BvcyA9PT0gMSA/IFwiZmxleC1lbmRcIiA6IFwiZmxleC1zdGFydFwifTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbGVtZW50IGRpdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAke2RpdmlkZSh2YWx1ZSlbMV0gPiAwID8gXCI1MHB4XCIgOiBcIjI0MHB4XCJ9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcbiJdfQ== */\n/*@ sourceURL=pages/Element.js */"),
        dynamic: [pos === 1 ? "flex-end" : "flex-start", divide(value)[1] > 0 ? "50px" : "240px"]
      }));
    }
  }]);

  return Element;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Element);

/***/ }),

/***/ "./pages/Error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/Error.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var message = function message(string) {
  var objMessage = {
    easy: "Easy fellow. Let's start with smaller number.",
    negative: "Your number is negative. The negative number case is quite \n    similar to positive one. That's why it will be easier if you type in \n    right value.",
    error: "Your input in not a number. Please  type right value.",
    integer: "Right now let's just focus on integral numbers.",
    zero: "You typed 0.Zero time any number is zero.  Please type right value."
  };
  return objMessage[string];
};

var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error(props) {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this, props));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-8016687"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-8016687"
      }, message(this.props.value)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "8016687",
        css: "div.jsx-8016687{width:45%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;text-align:center;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0Vycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCVyxBQUd5QixVQUNVLHNHQUNGLGtCQUNMLGFBQ2YiLCJmaWxlIjoicGFnZXMvRXJyb3IuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fyb2wvRG9jdW1lbnRzL2NvZGUvTXlGaXJzdEFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNvbnN0IG1lc3NhZ2UgPSBzdHJpbmcgPT4ge1xuICBjb25zdCBvYmpNZXNzYWdlID0ge1xuICAgIGVhc3k6IFwiRWFzeSBmZWxsb3cuIExldCdzIHN0YXJ0IHdpdGggc21hbGxlciBudW1iZXIuXCIsXG4gICAgbmVnYXRpdmU6IGBZb3VyIG51bWJlciBpcyBuZWdhdGl2ZS4gVGhlIG5lZ2F0aXZlIG51bWJlciBjYXNlIGlzIHF1aXRlIFxuICAgIHNpbWlsYXIgdG8gcG9zaXRpdmUgb25lLiBUaGF0J3Mgd2h5IGl0IHdpbGwgYmUgZWFzaWVyIGlmIHlvdSB0eXBlIGluIFxuICAgIHJpZ2h0IHZhbHVlLmAsXG4gICAgZXJyb3I6IFwiWW91ciBpbnB1dCBpbiBub3QgYSBudW1iZXIuIFBsZWFzZSAgdHlwZSByaWdodCB2YWx1ZS5cIixcbiAgICBpbnRlZ2VyOiBcIlJpZ2h0IG5vdyBsZXQncyBqdXN0IGZvY3VzIG9uIGludGVncmFsIG51bWJlcnMuXCIsXG4gICAgemVybzogXCJZb3UgdHlwZWQgMC5aZXJvIHRpbWUgYW55IG51bWJlciBpcyB6ZXJvLiAgUGxlYXNlIHR5cGUgcmlnaHQgdmFsdWUuXCJcbiAgfTtcbiAgcmV0dXJuIG9iak1lc3NhZ2Vbc3RyaW5nXTtcbn07XG5cbmNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+e21lc3NhZ2UodGhpcy5wcm9wcy52YWx1ZSl9PC9oMT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcjtcbiJdfQ== */\n/*@ sourceURL=pages/Error.js */"
      }));
    }
  }]);

  return Error;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Error);

/***/ }),

/***/ "./pages/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-764381511" + " " + (this.props.style.header || "")
      }, this.props.activeHeader && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-764381511" + " " + (this.props.style.h1 || "")
      }, "Click and find out how to start calculate fast in simple way!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-764381511" + " " + (this.props.style.button || "")
      }, this.props.activeHeader ? "Let's start" : "Starting panel"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "764381511",
        css: ".header.jsx-764381511{padding:10% 0;width:100%;height:70%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;background:white;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}.h1.jsx-764381511{padding:5%;}.button.jsx-764381511{padding:5%;background:#00ff11;width:15%;box-shadow:0px 0px 50px 20px rgba(0,255,17,1);}.button2.jsx-764381511{position:relative;z-index:1;margin-left:0px;height:100%;width:20%;background:#00ff11;box-shadow:0px 0px 30px 10px rgba(0,255,17,1);}.header2.jsx-764381511{height:5%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-animation-name:toLeftSide-jsx-764381511;animation-name:toLeftSide-jsx-764381511;-webkit-animation:toLeftSide-jsx-764381511 2s forwards;animation:toLeftSide-jsx-764381511 2s forwards;background-color:white;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}@-webkit-keyframes toLeftSide-jsx-764381511{from{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}to{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}@keyframes toLeftSide-jsx-764381511{from{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}to{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlcsQUFHNkIsQUFVSCxBQUdELEFBTVEsQUFTUixBQVNpQixBQUVDLFVBVmpCLENBbEJiLEFBR3FCLEdBYlIsSUFtQkQsR0FVRSxJQTVCRCxHQW1CSyxFQU5QLE1BWmMsSUFhdUIsSUFNbEMsWUFDRixVQUNTLG1CQUMyQixDQVJoRCxTQWM0QixJQU8xQixNQUVBLDBCQWRGLElBdEJlLGdEQTRCb0IsMEJBM0JsQix5REFDRSxpQkFDUSxFQTBCRix1QkFDRSxpQ0ExQjNCLHlCQTJCQSIsImZpbGUiOiJwYWdlcy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fyb2wvRG9jdW1lbnRzL2NvZGUvTXlGaXJzdEFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuc3R5bGUuaGVhZGVyfT5cbiAgICAgICAge3RoaXMucHJvcHMuYWN0aXZlSGVhZGVyICYmIChcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnN0eWxlLmgxfT5cbiAgICAgICAgICAgIENsaWNrIGFuZCBmaW5kIG91dCBob3cgdG8gc3RhcnQgY2FsY3VsYXRlIGZhc3QgaW4gc2ltcGxlIHdheSFcbiAgICAgICAgICA8L2gxPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnN0eWxlLmJ1dHRvbn0+XG4gICAgICAgICAge3RoaXMucHJvcHMuYWN0aXZlSGVhZGVyID8gXCJMZXQncyBzdGFydFwiIDogXCJTdGFydGluZyBwYW5lbFwifVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTAlIDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaDEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICBwYWRkaW5nIDUlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjExO1xuICAgICAgICAgICAgICB3aWR0aDoxNSU7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAyMHB4IHJnYmEoMCwyNTUsMTcsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9uMntcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGZmMTE7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAxMHB4IHJnYmEoMCwyNTUsMTcsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyMiB7XG4gICAgICAgICAgICAgIGhlaWdodDogNSU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiB0b0xlZnRTaWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb246IHRvTGVmdFNpZGUgMnMgZm9yd2FyZHM7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyB0b0xlZnRTaWRlIHtcbiAgICAgICAgICAgICAgZnJvbXtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=pages/Header.js */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/Image.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/Image.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
  }

  _createClass(Image, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(prevProps, props) {
      if (prevProps !== props) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var highlight = this.props.highlight;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1187644702", [highlight ? "yellow" : ""]]]) + " " + "photo"
      }, !highlight ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.props.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1187644702", [highlight ? "yellow" : ""]]])
      }) : "".concat(this.props.value), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1187644702",
        css: ".photo.__jsx-style-dynamic-selector{position:relative;width:60px;height:120px;background-color:".concat(highlight ? "yellow" : "", ";font-size:100px;text-align:center;}img.__jsx-style-dynamic-selector{position:absolute;left:5%;top:15%;width:90%;height:70%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0ltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CVyxBQUdpQyxBQVFBLGtCQVBQLEFBUUgsUUFDQSxHQVJLLEtBU0gsUUFSb0MsRUFTbkMsV0FDYixpQ0FUa0IsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL0ltYWdlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcm9sL0RvY3VtZW50cy9jb2RlL015Rmlyc3RBcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcmV2UHJvcHMsIHByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcyAhPT0gcHJvcHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gdGhpcy5wcm9wcy5oaWdobGlnaHQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9cIj5cbiAgICAgICAgeyFoaWdobGlnaHQgPyA8aW1nIHNyYz17dGhpcy5wcm9wcy52YWx1ZX0gLz4gOiBgJHt0aGlzLnByb3BzLnZhbHVlfWB9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5waG90byB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7aGlnaGxpZ2h0ID8gXCJ5ZWxsb3dcIiA6IFwiXCJ9O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iXX0= */\n/*@ sourceURL=pages/Image.js */"),
        dynamic: [highlight ? "yellow" : ""]
      }));
    }
  }]);

  return Image;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "./pages/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Body_js__ = __webpack_require__("./pages/Body.js");
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/Input.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1609700845", [isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "3px solid red" : "", isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "10px" : ""]]]) + " " + "input"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1609700845", [isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "3px solid red" : "", isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "10px" : ""]]])
      }, "Please, insert ", this.props.pos, " number from 1 to 99"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        value: this.props.value,
        onChange: this.props.handleValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1609700845", [isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "3px solid red" : "", isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "10px" : ""]]])
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1609700845",
        css: ".input.__jsx-style-dynamic-selector{display:inline-block;border:".concat(isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "3px solid red" : "", ";padding:10px;border-radius:").concat(isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "10px" : "", ";margin:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUdrQyxxQkFDZSxvQ0FDdkIsYUFDOEIsMkNBQ2hDLFdBQ2IiLCJmaWxlIjoicGFnZXMvSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fyb2wvRG9jdW1lbnRzL2NvZGUvTXlGaXJzdEFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyB2YWxpZGF0b3IgfSBmcm9tIFwiLi9Cb2R5LmpzXCI7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgIDxkaXY+UGxlYXNlLCBpbnNlcnQge3RoaXMucHJvcHMucG9zfSBudW1iZXIgZnJvbSAxIHRvIDk5PC9kaXY+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlVmFsdWV9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOiAke2lzTmFOKHZhbGlkYXRvcih0aGlzLnByb3BzLnZhbHVlKSkgJiYgdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICAgICAgICA/IFwiM3B4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgIDogXCJcIn07XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpc05hTih2YWxpZGF0b3IodGhpcy5wcm9wcy52YWx1ZSkpICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgICAgID8gXCIxMHB4XCJcbiAgICAgICAgICAgICAgOiBcIlwifTtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */\n/*@ sourceURL=pages/Input.js */"),
        dynamic: [isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "3px solid red" : "", isNaN(Object(__WEBPACK_IMPORTED_MODULE_3__Body_js__["b" /* validator */])(this.props.value)) && this.props.value ? "10px" : ""]
      }));
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "./pages/Output.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Image_js__ = __webpack_require__("./pages/Image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Element_js__ = __webpack_require__("./pages/Element.js");
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/Output.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//@flow





var Output =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Output, _React$Component);

  function Output(props) {
    _classCallCheck(this, Output);

    return _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).call(this, props));
  }

  _createClass(Output, [{
    key: "render",
    value: function render() {
      var pos = this.props.pos;
      var arg = this.props.arg;
      arg === 0 ? arg = "" : arg;

      if (pos === 0) {
        return arg && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onMouseOver: this.props.onMouseOver,
          onMouseOut: this.props.onMouseOut,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          className: "jsx-1181475083" + " " + "output"
        }, arg > 9 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(Math.floor(arg / 10)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(arg % 10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/zero.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/zero.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1181475083",
          css: ".output.jsx-1181475083{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:25%;}.output.jsx-1181475083:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL091dHB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmUsQUFHdUMsQUFNa0MsbURBQ3hELG1EQU5XLFNBQ2MsbUdBQ2IsVUFDWiIsImZpbGUiOiJwYWdlcy9PdXRwdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fyb2wvRG9jdW1lbnRzL2NvZGUvTXlGaXJzdEFwcCIsInNvdXJjZXNDb250ZW50IjpbIi8vQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2UuanNcIjtcbmltcG9ydCB7IGRpc3BsYXkgYXMgYXNTdHJpbmcgfSBmcm9tIFwiLi9FbGVtZW50LmpzXCI7XG5cbmNsYXNzIE91dHB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwb3MgPSB0aGlzLnByb3BzLnBvcztcbiAgICBsZXQgYXJnID0gdGhpcy5wcm9wcy5hcmc7XG4gICAgYXJnID09PSAwID8gKGFyZyA9IFwiXCIpIDogYXJnO1xuICAgIGlmIChwb3MgPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFyZyAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMucHJvcHMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLnByb3BzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthcmcgPiA5ICYmIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihhcmcgLyAxMCkpfSAvPn1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoYXJnICUgMTApfSAvPlxuICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy96ZXJvLmpwZ1wiIC8+XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL3plcm8uanBnXCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm91dHB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHBvcyA9PT0gMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMucHJvcHMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FyZyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9taW51cy5qcGdcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtNYXRoLmFicyhhcmcpID4gOSAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyhhcmcgLyAxMCkpICUgMTApfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5hYnMoYXJnICUgMTApKX0gLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvemVyby5qcGdcIiAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAub3V0cHV0IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0cHV0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCA5cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocG9zID09PSAyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcmcgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLm9uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5wcm9wcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJnID4gMCA/IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9wbHVzLmpwZ1wiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL21pbnVzLmpwZ1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge01hdGguYWJzKGFyZykgPiA5ICYmIChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPXthc1N0cmluZyhNYXRoLmZsb29yKE1hdGguYWJzKGFyZyAvIDEwKSkgJSAxMCl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEltYWdlIHZhbHVlPXthc1N0cmluZyhNYXRoLmFicyhhcmcgJSAxMCkpfSAvPlxuICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy96ZXJvLmpwZ1wiIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5vdXRwdXQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdXRwdXQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcmcgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLm9uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5wcm9wcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJnID4gMCA/IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9wbHVzLmpwZ1wiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL21pbnVzLmpwZ1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge01hdGguYWJzKGFyZykgPiA5ICYmIChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPXthc1N0cmluZyhNYXRoLmZsb29yKE1hdGguYWJzKGFyZyAvIDEwKSkgJSAxMCl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEltYWdlIHZhbHVlPXthc1N0cmluZyhNYXRoLmFicyhhcmcgJSAxMCkpfSAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAub3V0cHV0IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0cHV0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCA5cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE91dHB1dDtcbiJdfQ== */\n/*@ sourceURL=pages/Output.js */"
        }));
      } else if (pos === 1) {
        return arg && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onMouseOver: this.props.onMouseOver,
          onMouseOut: this.props.onMouseOut,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          className: "jsx-1539994407" + " " + "output"
        }, arg > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/plus.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/minus.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), Math.abs(arg) > 9 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(Math.floor(Math.abs(arg / 10)) % 10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(Math.abs(arg % 10)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/zero.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1539994407",
          css: ".output.jsx-1539994407{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:25%;margin:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.output.jsx-1539994407:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL091dHB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGUsQUFHdUMsQUFNa0MsbURBQ3hELG1EQU5ZLFVBQ0QsU0FDYyxtR0FDekIiLCJmaWxlIjoicGFnZXMvT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcm9sL0RvY3VtZW50cy9jb2RlL015Rmlyc3RBcHAiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5IGFzIGFzU3RyaW5nIH0gZnJvbSBcIi4vRWxlbWVudC5qc1wiO1xuXG5jbGFzcyBPdXRwdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5wcm9wcy5wb3M7XG4gICAgbGV0IGFyZyA9IHRoaXMucHJvcHMuYXJnO1xuICAgIGFyZyA9PT0gMCA/IChhcmcgPSBcIlwiKSA6IGFyZztcbiAgICBpZiAocG9zID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcmcgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLm9uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5wcm9wcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJnID4gOSAmJiA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguZmxvb3IoYXJnIC8gMTApKX0gLz59XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKGFyZyAlIDEwKX0gLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvemVyby5qcGdcIiAvPlxuICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy96ZXJvLmpwZ1wiIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5vdXRwdXQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdXRwdXQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwb3MgPT09IDEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFyZyAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMucHJvcHMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLnByb3BzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthcmcgPiAwID8gKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL3BsdXMuanBnXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvbWludXMuanBnXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7TWF0aC5hYnMoYXJnKSA+IDkgJiYgKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5hYnMoYXJnIC8gMTApKSAlIDEwKX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguYWJzKGFyZyAlIDEwKSl9IC8+XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL3plcm8uanBnXCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm91dHB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHBvcyA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMucHJvcHMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FyZyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9taW51cy5qcGdcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtNYXRoLmFicyhhcmcpID4gOSAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyhhcmcgLyAxMCkpICUgMTApfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5hYnMoYXJnICUgMTApKX0gLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvemVyby5qcGdcIiAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAub3V0cHV0IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0cHV0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCA5cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMucHJvcHMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FyZyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9taW51cy5qcGdcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtNYXRoLmFicyhhcmcpID4gOSAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyhhcmcgLyAxMCkpICUgMTApfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5hYnMoYXJnICUgMTApKX0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm91dHB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXRwdXQ7XG4iXX0= */\n/*@ sourceURL=pages/Output.js */"
        }));
      } else if (pos === 2) {
        return arg && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onMouseOver: this.props.onMouseOver,
          onMouseOut: this.props.onMouseOut,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          className: "jsx-1428226127" + " " + "output"
        }, arg > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/plus.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/minus.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }), Math.abs(arg) > 9 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(Math.floor(Math.abs(arg / 10)) % 10),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(Math.abs(arg % 10)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
          value: "/static/zero.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1428226127",
          css: ".output.jsx-1428226127{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:0;width:25%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.output.jsx-1428226127:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL091dHB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRmUsQUFHdUMsQUFNa0MsbURBQ3hELG1EQU5XLFNBQ0MsVUFDYSxtR0FDekIiLCJmaWxlIjoicGFnZXMvT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcm9sL0RvY3VtZW50cy9jb2RlL015Rmlyc3RBcHAiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5IGFzIGFzU3RyaW5nIH0gZnJvbSBcIi4vRWxlbWVudC5qc1wiO1xuXG5jbGFzcyBPdXRwdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5wcm9wcy5wb3M7XG4gICAgbGV0IGFyZyA9IHRoaXMucHJvcHMuYXJnO1xuICAgIGFyZyA9PT0gMCA/IChhcmcgPSBcIlwiKSA6IGFyZztcbiAgICBpZiAocG9zID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcmcgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLm9uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5wcm9wcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJnID4gOSAmJiA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguZmxvb3IoYXJnIC8gMTApKX0gLz59XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKGFyZyAlIDEwKX0gLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvemVyby5qcGdcIiAvPlxuICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy96ZXJvLmpwZ1wiIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5vdXRwdXQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdXRwdXQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwb3MgPT09IDEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFyZyAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMucHJvcHMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLnByb3BzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthcmcgPiAwID8gKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL3BsdXMuanBnXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvbWludXMuanBnXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7TWF0aC5hYnMoYXJnKSA+IDkgJiYgKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5hYnMoYXJnIC8gMTApKSAlIDEwKX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguYWJzKGFyZyAlIDEwKSl9IC8+XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL3plcm8uanBnXCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm91dHB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHBvcyA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMucHJvcHMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FyZyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9taW51cy5qcGdcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtNYXRoLmFicyhhcmcpID4gOSAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyhhcmcgLyAxMCkpICUgMTApfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5hYnMoYXJnICUgMTApKX0gLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvemVyby5qcGdcIiAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAub3V0cHV0IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0cHV0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCA5cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMucHJvcHMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FyZyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9taW51cy5qcGdcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtNYXRoLmFicyhhcmcpID4gOSAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyhhcmcgLyAxMCkpICUgMTApfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5hYnMoYXJnICUgMTApKX0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm91dHB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXRwdXQ7XG4iXX0= */\n/*@ sourceURL=pages/Output.js */"
        }));
      } else return arg && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onMouseOver: this.props.onMouseOver,
        onMouseOut: this.props.onMouseOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-1428226127" + " " + "output"
      }, arg > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: "/static/plus.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: "/static/minus.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), Math.abs(arg) > 9 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(Math.floor(Math.abs(arg / 10)) % 10),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image_js__["a" /* default */], {
        value: Object(__WEBPACK_IMPORTED_MODULE_4__Element_js__["b" /* display */])(Math.abs(arg % 10)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1428226127",
        css: ".output.jsx-1428226127{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:0;width:25%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.output.jsx-1428226127:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL091dHB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSWUsQUFHdUMsQUFNa0MsbURBQ3hELG1EQU5XLFNBQ0MsVUFDYSxtR0FDekIiLCJmaWxlIjoicGFnZXMvT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcm9sL0RvY3VtZW50cy9jb2RlL015Rmlyc3RBcHAiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5IGFzIGFzU3RyaW5nIH0gZnJvbSBcIi4vRWxlbWVudC5qc1wiO1xuXG5jbGFzcyBPdXRwdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5wcm9wcy5wb3M7XG4gICAgbGV0IGFyZyA9IHRoaXMucHJvcHMuYXJnO1xuICAgIGFyZyA9PT0gMCA/IChhcmcgPSBcIlwiKSA6IGFyZztcbiAgICBpZiAocG9zID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcmcgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLm9uTW91c2VPdmVyfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5wcm9wcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXJnID4gOSAmJiA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguZmxvb3IoYXJnIC8gMTApKX0gLz59XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKGFyZyAlIDEwKX0gLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvemVyby5qcGdcIiAvPlxuICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy96ZXJvLmpwZ1wiIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5vdXRwdXQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdXRwdXQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwb3MgPT09IDEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFyZyAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMucHJvcHMub25Nb3VzZU92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLnByb3BzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthcmcgPiAwID8gKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL3BsdXMuanBnXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvbWludXMuanBnXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7TWF0aC5hYnMoYXJnKSA+IDkgJiYgKFxuICAgICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5hYnMoYXJnIC8gMTApKSAlIDEwKX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9e2FzU3RyaW5nKE1hdGguYWJzKGFyZyAlIDEwKSl9IC8+XG4gICAgICAgICAgICA8SW1hZ2UgdmFsdWU9XCIvc3RhdGljL3plcm8uanBnXCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm91dHB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHBvcyA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMucHJvcHMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FyZyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9taW51cy5qcGdcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtNYXRoLmFicyhhcmcpID4gOSAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyhhcmcgLyAxMCkpICUgMTApfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5hYnMoYXJnICUgMTApKX0gLz5cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvemVyby5qcGdcIiAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAub3V0cHV0IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0cHV0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCA5cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMucHJvcHMub25Nb3VzZU91dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FyZyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT1cIi9zdGF0aWMvcGx1cy5qcGdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHZhbHVlPVwiL3N0YXRpYy9taW51cy5qcGdcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtNYXRoLmFicyhhcmcpID4gOSAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyhhcmcgLyAxMCkpICUgMTApfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxJbWFnZSB2YWx1ZT17YXNTdHJpbmcoTWF0aC5hYnMoYXJnICUgMTApKX0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm91dHB1dCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHB1dDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXRwdXQ7XG4iXX0= */\n/*@ sourceURL=pages/Output.js */"
      }));
    }
  }]);

  return Output;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Output);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./pages/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Body__ = __webpack_require__("./pages/Body.js");
var _jsxFileName = "/home/karol/Documents/code/MyFirstApp/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        classHeader: {
          header: "header",
          button: "button",
          h1: "h1",
          side: "center"
        },
        classBody: "body",
        body: false
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "activeHeader", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    return _this;
  }

  _createClass(App, [{
    key: "toggleClass",
    value: function toggleClass() {
      var _this2 = this;

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
        setTimeout(function () {
          return _this2.setState({
            body: true,
            side: "left"
          });
        }, 500);
      } else {
        this.setState({
          classHeader: {
            header: "header",
            button: "button",
            h1: "h1"
          }
        });
        this.activeHeader = true;
        setTimeout(function () {
          _this2.setState({
            body: false
          });
        }, 500);
        this.setState({
          classBody: "body"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-651904452" + " " + "app"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-651904452" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
        activeHeader: this.activeHeader,
        style: this.state.classHeader,
        onClick: function onClick() {
          return _this3.toggleClass();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), this.state.body && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Body__["a" /* default */], {
        style: this.state.classBody,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "body")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "651904452",
        css: ".app.jsx-651904452{width:100%;height:93vh;padding:1% 0;background-image:url(/static/backgroundPhoto.jpeg);text-align:center;}.content.jsx-651904452{height:90%;margin:auto;width:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFVyxBQUcwQixBQU9BLFdBTkMsQUFPQSxZQU5DLEFBT0gsVUFDWixHQVBxRCxtREFDakMsa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcm9sL0RvY3VtZW50cy9jb2RlL015Rmlyc3RBcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBCb2R5IGZyb20gXCIuL0JvZHlcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgc3RhdGUgPSB7XG4gICAgY2xhc3NIZWFkZXI6IHtcbiAgICAgIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgICAgIGJ1dHRvbjogXCJidXR0b25cIixcbiAgICAgIGgxOiBcImgxXCIsXG4gICAgICBzaWRlOiBcImNlbnRlclwiXG4gICAgfSxcbiAgICBjbGFzc0JvZHk6IFwiYm9keVwiLFxuICAgIGJvZHk6IGZhbHNlXG4gIH07XG4gIGFjdGl2ZUhlYWRlciA9IHRydWU7XG4gIHRvZ2dsZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNsYXNzSGVhZGVyLmhlYWRlciA9PT0gXCJoZWFkZXJcIikge1xuICAgICAgdGhpcy5hY3RpdmVIZWFkZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGFzc0hlYWRlcjoge1xuICAgICAgICAgIGhlYWRlcjogXCJoZWFkZXIyXCIsXG4gICAgICAgICAgYnV0dG9uOiBcImJ1dHRvbjJcIixcbiAgICAgICAgICBoMTogXCJoMTJcIlxuICAgICAgICB9LFxuICAgICAgICBjbGFzc0JvZHk6IFwiYm9keTJcIlxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PlxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYm9keTogdHJ1ZSxcbiAgICAgICAgICAgIHNpZGU6IFwibGVmdFwiXG4gICAgICAgICAgfSksXG4gICAgICAgIDUwMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsYXNzSGVhZGVyOiB7XG4gICAgICAgICAgaGVhZGVyOiBcImhlYWRlclwiLFxuICAgICAgICAgIGJ1dHRvbjogXCJidXR0b25cIixcbiAgICAgICAgICBoMTogXCJoMVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hY3RpdmVIZWFkZXIgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGJvZHk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGFzc0JvZHk6IFwiYm9keVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBhY3RpdmVIZWFkZXI9e3RoaXMuYWN0aXZlSGVhZGVyfVxuICAgICAgICAgICAgc3R5bGU9e3RoaXMuc3RhdGUuY2xhc3NIZWFkZXJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZUNsYXNzKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ib2R5ICYmIDxCb2R5IHN0eWxlPXt0aGlzLnN0YXRlLmNsYXNzQm9keX0+Ym9keTwvQm9keT59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5hcHAge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5M3ZoO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxJSAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9iYWNrZ3JvdW5kUGhvdG8uanBlZyk7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map