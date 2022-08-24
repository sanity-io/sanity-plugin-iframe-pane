"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ui = require("@sanity/ui");

var _icons = require("@sanity/icons");

var _useCopytoClipboard = _interopRequireDefault(require("./hooks/useCopytoClipboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sizes = {
  desktop: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    maxHeight: "100%"
  },
  mobile: {
    backgroundColor: "white",
    width: 414,
    height: "100%",
    maxHeight: 736
  }
};

function Iframe(props) {
  var sanityDocument = props.document,
      options = props.options;
  var url = options.url,
      _options$defaultSize = options.defaultSize,
      defaultSize = _options$defaultSize === void 0 ? "desktop" : _options$defaultSize,
      reload = options.reload,
      id = options.id;

  var _useState = (0, _react.useState)(typeof url === 'string' ? url : ""),
      _useState2 = _slicedToArray(_useState, 2),
      displayUrl = _useState2[0],
      setDisplayUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultSize),
      _useState4 = _slicedToArray(_useState3, 2),
      iframeSize = _useState4[0],
      setIframeSize = _useState4[1];

  var input = (0, _react.useRef)();
  var iframe = (0, _react.useRef)();
  var displayed = sanityDocument.displayed;

  var _useCopyToClipboard = (0, _useCopytoClipboard.default)(),
      _useCopyToClipboard2 = _slicedToArray(_useCopyToClipboard, 2),
      copy = _useCopyToClipboard2[1];

  function handleCopy() {
    var _input$current;

    if (!(input !== null && input !== void 0 && (_input$current = input.current) !== null && _input$current !== void 0 && _input$current.value)) return;
    copy(input.current.value);
  }

  function handleReload() {
    if (!(iframe !== null && iframe !== void 0 && iframe.current)) {
      return;
    } // Funky way to reload an iframe without CORS issuies
    // eslint-disable-next-line no-self-assign


    iframe.current.src = iframe.current.src;
  } // Reload on new revisions


  (0, _react.useEffect)(() => {
    if (reload !== null && reload !== void 0 && reload.revision) {
      handleReload();
    }
  }, [displayed._rev, reload === null || reload === void 0 ? void 0 : reload.revision, id]); // Set initial URL and refresh on new revisions

  (0, _react.useEffect)(() => {
    var getUrl = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        var resolveUrl = typeof url === 'function' ? yield url(displayed) : ""; // Only update state if URL has changed

        if (resolveUrl !== displayUrl) {
          setDisplayUrl(resolveUrl);
        }
      });

      return function getUrl() {
        return _ref.apply(this, arguments);
      };
    }();

    if (typeof url === 'function') {
      getUrl();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [displayed._rev, id]);

  if (!displayUrl || typeof displayUrl !== 'string') {
    return /*#__PURE__*/_react.default.createElement(_ui.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(_ui.Flex, {
      padding: 5,
      items: "center",
      justify: "center"
    }, /*#__PURE__*/_react.default.createElement(_ui.Spinner, null)));
  }

  return /*#__PURE__*/_react.default.createElement(_ui.ThemeProvider, null, /*#__PURE__*/_react.default.createElement("textarea", {
    style: {
      position: "absolute",
      pointerEvents: "none",
      opacity: 0
    },
    ref: input,
    value: displayUrl,
    readOnly: true,
    tabIndex: -1
  }), /*#__PURE__*/_react.default.createElement(_ui.Flex, {
    direction: "column",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Card, {
    padding: 2,
    borderBottom: 1
  }, /*#__PURE__*/_react.default.createElement(_ui.Flex, {
    align: "center",
    gap: 2
  }, /*#__PURE__*/_react.default.createElement(_ui.Flex, {
    align: "center",
    gap: 1
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    fontSize: [1],
    padding: 2,
    tone: "primary",
    mode: iframeSize === 'mobile' ? 'default' : 'ghost',
    icon: _icons.MobileDeviceIcon,
    onClick: () => setIframeSize(iframeSize === 'mobile' ? 'desktop' : 'mobile')
  })), /*#__PURE__*/_react.default.createElement(_ui.Box, {
    flex: 1
  }, /*#__PURE__*/_react.default.createElement(_ui.Text, {
    size: 0,
    textOverflow: "ellipsis"
  }, displayUrl)), /*#__PURE__*/_react.default.createElement(_ui.Flex, {
    align: "center",
    gap: 1
  }, reload !== null && reload !== void 0 && reload.button ? /*#__PURE__*/_react.default.createElement(_ui.Button, {
    fontSize: [1],
    padding: 2,
    icon: _icons.UndoIcon,
    title: "Reload",
    "aria-label": "Reload",
    onClick: () => handleReload()
  }) : null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    fontSize: [1],
    icon: _icons.CopyIcon,
    padding: [2],
    title: "Copy",
    "aria-label": "Copy",
    onClick: () => handleCopy()
  }), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    fontSize: [1],
    icon: _icons.LeaveIcon,
    padding: [2],
    text: "Open",
    tone: "primary",
    onClick: () => window.open(displayUrl)
  })))), /*#__PURE__*/_react.default.createElement(_ui.Card, {
    tone: "transparent",
    padding: iframeSize === 'mobile' ? 2 : 0,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Flex, {
    align: "center",
    justify: "center",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    ref: iframe,
    title: "preview",
    style: sizes[iframeSize],
    frameBorder: "0",
    src: displayUrl
  })))));
}

var _default = Iframe;
exports.default = _default;
//# sourceMappingURL=Iframe.js.map