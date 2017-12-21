webpackJsonp([0],{

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(87);

var _Places = __webpack_require__(602);

var _Places2 = _interopRequireDefault(_Places);

var _actions = __webpack_require__(603);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return _extends({}, state.places);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchPlaces: function fetchPlaces() {
            return dispatch((0, _actions.fetchPlaces)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Places2.default);

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = __webpack_require__(597);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Card2.default;

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(238);

var _Card2 = _interopRequireDefault(_Card);

var _Dialog = __webpack_require__(239);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = __webpack_require__(136);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(27);

var _Typography2 = _interopRequireDefault(_Typography);

__webpack_require__(598);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomCard = function (_Component) {
    _inherits(CustomCard, _Component);

    function CustomCard() {
        _classCallCheck(this, CustomCard);

        var _this = _possibleConstructorReturn(this, (CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call(this));

        _this.state = {
            isDialogOpen: false
        };
        _this.openDialog = _this.openDialog.bind(_this);
        _this.closeDialog = _this.closeDialog.bind(_this);
        return _this;
    }

    _createClass(CustomCard, [{
        key: 'openDialog',
        value: function openDialog() {
            this.setState({
                isDialogOpen: true
            });
        }
    }, {
        key: 'closeDialog',
        value: function closeDialog() {
            this.setState({
                isDialogOpen: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$title = _props.title,
                title = _props$title === undefined ? 'Title' : _props$title,
                _props$desc = _props.desc,
                desc = _props$desc === undefined ? 'Description' : _props$desc,
                _props$imageUrl = _props.imageUrl,
                imageUrl = _props$imageUrl === undefined ? 'assets/image.svg' : _props$imageUrl;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Card2.default,
                    { className: 'card' },
                    _react2.default.createElement(_Card.CardMedia, {
                        className: 'card-media',
                        image: imageUrl || 'assets/image.svg' }),
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _react2.default.createElement(
                            _Typography2.default,
                            { type: 'headline', component: 'h2', className: 'card-title' },
                            title
                        ),
                        _react2.default.createElement(
                            _Typography2.default,
                            { component: 'div', className: 'card-desc' },
                            desc
                        )
                    ),
                    _react2.default.createElement(
                        _Card.CardActions,
                        null,
                        _react2.default.createElement(
                            _Button2.default,
                            { dense: true, color: 'primary', onClick: this.openDialog },
                            'See More'
                        )
                    )
                ),
                _react2.default.createElement(
                    _Dialog2.default,
                    { open: this.state.isDialogOpen,
                        onClose: this.closeDialog,
                        onBackdropClick: this.closeDialog,
                        onEscapeKeyUp: this.closeDialog,
                        className: 'dialog' },
                    _react2.default.createElement(
                        _Dialog.DialogTitle,
                        { className: 'dialog-title' },
                        title
                    ),
                    _react2.default.createElement(
                        _Dialog.DialogContent,
                        null,
                        _react2.default.createElement(
                            _Dialog.DialogContentText,
                            { className: 'dialog-desc' },
                            desc
                        )
                    ),
                    _react2.default.createElement(
                        _Dialog.DialogActions,
                        null,
                        _react2.default.createElement(
                            _Button2.default,
                            { dense: true, color: 'primary', onClick: this.closeDialog },
                            'Close'
                        )
                    )
                )
            );
        }
    }]);

    return CustomCard;
}(_react.Component);

exports.default = CustomCard;

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(599);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(89)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/less-loader/dist/cjs.js!./styles.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/less-loader/dist/cjs.js!./styles.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)(undefined);
// imports


// module
exports.push([module.i, ".card .card-media {\n  height: 220px;\n}\n.card .card-popup-media {\n  width: 100%;\n  height: auto;\n}\n.card .card-title {\n  font-family: 'Open Sans', sans-serif;\n}\n.card .card-desc {\n  height: 32px;\n  overflow: hidden;\n  font-family: 'Open Sans', sans-serif;\n}\n.dialog .dialog-title h2 {\n  font-family: 'Open Sans', sans-serif;\n}\n.dialog .dialog-desc {\n  font-family: 'Open Sans', sans-serif;\n}\n", ""]);

// exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Snackbar = __webpack_require__(601);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Snackbar2.default;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Snackbar = __webpack_require__(240);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomSnackBar = function (_Component) {
    _inherits(CustomSnackBar, _Component);

    function CustomSnackBar(props) {
        _classCallCheck(this, CustomSnackBar);

        var _this = _possibleConstructorReturn(this, (CustomSnackBar.__proto__ || Object.getPrototypeOf(CustomSnackBar)).call(this, props));

        _this.state = _extends({}, props);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    _createClass(CustomSnackBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            this.setState(_extends({}, newProps));
        }
    }, {
        key: 'handleClose',
        value: function handleClose(a, b) {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Snackbar2.default, _extends({
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                autoHideDuration: 3000,
                onRequestClose: this.handleClose
            }, this.state));
        }
    }]);

    return CustomSnackBar;
}(_react.Component);

exports.default = CustomSnackBar;

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(596);

var _card2 = _interopRequireDefault(_card);

var _Progress = __webpack_require__(137);

var _snackbar = __webpack_require__(600);

var _snackbar2 = _interopRequireDefault(_snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Places = function (_Component) {
    _inherits(Places, _Component);

    function Places() {
        _classCallCheck(this, Places);

        return _possibleConstructorReturn(this, (Places.__proto__ || Object.getPrototypeOf(Places)).apply(this, arguments));
    }

    _createClass(Places, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.fetchPlaces();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                isLoading = _props.isLoading,
                list = _props.list;

            return _react2.default.createElement(
                'div',
                null,
                isLoading && _react2.default.createElement(
                    'div',
                    { className: 'page-loading' },
                    _react2.default.createElement(_Progress.CircularProgress, { className: 'loading', size: 65, thickness: 3 })
                ),
                !isLoading && _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    list.map(function (place) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4 card-wrap', key: place.id },
                            _react2.default.createElement(_card2.default, place)
                        );
                    })
                ),
                _react2.default.createElement(_snackbar2.default, {
                    open: !isLoading,
                    message: 'Loaded ' + list.length + ' places.'
                })
            );
        }
    }]);

    return Places;
}(_react.Component);

exports.default = Places;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPlaces = undefined;

var _createAction = __webpack_require__(236);

var _createAction2 = _interopRequireDefault(_createAction);

var _fetch = __webpack_require__(237);

var _fetch2 = _interopRequireDefault(_fetch);

var _constants = __webpack_require__(241);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestPlaces = function requestPlaces() {
    return (0, _createAction2.default)(_constants2.default.REQUEST);
};

var receivePlaces = function receivePlaces(data) {
    return (0, _createAction2.default)(_constants2.default.RECEIVE, {
        data: data
    });
};

var fetchPlaces = exports.fetchPlaces = function fetchPlaces() {
    return function (dispatch) {
        dispatch(requestPlaces());
        return (0, _fetch2.default)('assets/json/places.json').then(function (data) {
            return dispatch(receivePlaces(data));
        });
    };
};

/***/ })

});