"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSizeScreen = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useSizeScreen = function useSizeScreen() {
  var _useState = (0, _react.useState)({
    widthSize: window.innerWidth,
    heightSize: window.innerHeight
  }),
      _useState2 = _slicedToArray(_useState, 2),
      sizeScreen = _useState2[0],
      sertSizeScreen = _useState2[1];

  var setSize = function setSize() {
    sertSizeScreen({
      widthSize: window.innerWidth,
      heightSize: window.innerHeight
    });
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('resize', setSize);
    return function () {
      window.removeEventListener('resize', setSize);
    };
  }, [sizeScreen]);
  var widthSize = sizeScreen.widthSize,
      heightSize = sizeScreen.heightSize;
  return {
    widthSize: widthSize,
    heightSize: heightSize
  };
};

exports.useSizeScreen = useSizeScreen;