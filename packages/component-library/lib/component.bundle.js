"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("react")),t=e(require("prop-types")),n=e(require("styled-components"));function u(){var e,r,t=(e=["\n  color: red;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return u=function(){return t},t}var a=function(e){var t=e.message,n=void 0===t?"this is an alert":t;return r.createElement("span",null,n)};a.propTypes={message:t.string};var i=n.div(u());exports.Alert=function(e){return r.createElement(i,null,r.createElement(a,e))};
