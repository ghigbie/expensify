'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePickOption = _this.handlePickOption.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: ['Go hunting', 'Walk the dog', 'Wash the dishes', 'Find the chosen one', 'Kill Bill', 'Go fishing', 'Buy lisk']
        };
        return _this;
    }

    //this removes all options


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }

        //this removes ONE option

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            console.log("HDO called");
            this.setState(function (prevState) {
                return {
                    //return false to remove an item from an array, and return true to kep an item in array, in this case it I want it to be false
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePickOption',
        value: function handlePickOption() {
            var random = this.state.options[Math.floor(Math.random() * this.state.options.length)];
            alert(random);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Please enter a valid item to add';
            } else if (this.state.options.indexOf(option) > -1) {
                //index of returns a -1 if the option already exists
                return 'This option already exists. Please enter a valid value';
            } else {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat(option) };
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                    console.log("fetching data");
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(preProps, prevState) {
            console.log("saving data");
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log("saving data");
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("Component will unmount called");
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App';
            var subtitle = 'Put your life in the hands of a computer';

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Header, {
                    title: title,
                    subtitle: subtitle }),
                _react2.default.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePickOption: this.handlePickOption }),
                _react2.default.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption }),
                _react2.default.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(_react2.default.Component);

var Header = function Header(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            props.title
        ),
        _react2.default.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'button',
            {
                onClick: props.handlePickOption,
                className: 'btn btn-default',
                disabled: !props.hasOptions },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Options: ',
            props.options.length
        ),
        props.options.length === 0 && _react2.default.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (option) {
            return _react2.default.createElement(Option, { key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption });
        }),
        _react2.default.createElement(
            'button',
            { className: 'btn btn-danger',
                onClick: props.handleDeleteOptions },
            'Remove All'
        )
    );
};

var Option = function Option(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.optionText,
        _react2.default.createElement(
            'button',
            { className: 'btn btn-default',
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
            document.getElementById('option-form').reset();

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.error && _react2.default.createElement(
                    'h3',
                    null,
                    this.state.error
                ),
                _react2.default.createElement(
                    'h1',
                    null,
                    'Add option here!'
                ),
                _react2.default.createElement(
                    'form',
                    { className: 'form',
                        id: 'option-form',
                        onSubmit: this.handleAddOption },
                    _react2.default.createElement('input', { type: 'text',
                        name: 'option' }),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-default' },
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(_react2.default.Component);

var appRoot = document.getElementById('react-container');
_reactDom2.default.render(_react2.default.createElement(IndecisionApp, null), appRoot);
