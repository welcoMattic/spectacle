'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = require('../utils/base');

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLink = /*#__PURE__*/(0, _reactEmotion2.default)('a')(function (props) {
  return props.styles;
});

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link() {
    (0, _classCallCheck3.default)(this, Link);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Link.prototype.render = function render() {
    var typefaceStyle = this.context.typeface || {};
    return (0, _jsx3.default)(StyledLink, {
      className: this.props.className,
      href: this.props.href,
      target: this.props.target,
      styles: [this.context.styles.components.link, _base.getStyles.call(this), typefaceStyle, this.props.style]
    }, void 0, this.props.children);
  };

  return Link;
}(_react.Component);

exports.default = Link;


Link.contextTypes = {
  styles: _propTypes2.default.object,
  store: _propTypes2.default.object,
  typeface: _propTypes2.default.object
};