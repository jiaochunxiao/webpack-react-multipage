webpackJsonp([2],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _desc2, _value2, _class3, _descriptor3, _class5;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _mobx = __webpack_require__(57);

var _mobxReact = __webpack_require__(81);

__webpack_require__(151);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Todo = (_class = function Todo(title) {
    _classCallCheck(this, Todo);

    this.id = Math.random();

    _initDefineProp(this, 'title', _descriptor, this);

    _initDefineProp(this, 'finished', _descriptor2, this);

    this.title = title;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'title', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'finished', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
})), _class);
var TodoList = (_class3 = function () {
    function TodoList() {
        _classCallCheck(this, TodoList);

        _initDefineProp(this, 'todos', _descriptor3, this);
    }

    _createClass(TodoList, [{
        key: 'addTodo',
        value: function addTodo(title) {
            this.todos.push(new Todo(title));
        }
    }, {
        key: 'unfinishedTodoCount',
        get: function get() {
            return this.todos.filter(function (todo) {
                return !todo.finished;
            }).length;
        }
    }]);

    return TodoList;
}(), (_descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'todos', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class3.prototype, 'unfinishedTodoCount', [_mobx.computed], Object.getOwnPropertyDescriptor(_class3.prototype, 'unfinishedTodoCount'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'addTodo', [_mobx.action], Object.getOwnPropertyDescriptor(_class3.prototype, 'addTodo'), _class3.prototype)), _class3);

var TodoListView = (0, _mobxReact.observer)(_class5 = function (_Component) {
    _inherits(TodoListView, _Component);

    function TodoListView() {
        _classCallCheck(this, TodoListView);

        return _possibleConstructorReturn(this, (TodoListView.__proto__ || Object.getPrototypeOf(TodoListView)).apply(this, arguments));
    }

    _createClass(TodoListView, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    this.props.todoList.todos.map(function (todo) {
                        return _react2.default.createElement(TodoView, { todo: todo, key: todo.id });
                    })
                ),
                'Tasks left: ',
                this.props.todoList.unfinishedTodoCount
            );
        }
    }]);

    return TodoListView;
}(_react.Component)) || _class5;

var TodoView = (0, _mobxReact.observer)(function (_ref) {
    var todo = _ref.todo;
    return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('input', {
            type: 'checkbox',
            checked: todo.finished,
            onClick: function onClick() {
                return todo.finished = !todo.finished;
            }
        }),
        todo.title
    );
});

var store = new TodoList();
(0, _reactDom.render)(_react2.default.createElement(TodoListView, { todoList: store }), document.getElementById('app'));

store.addTodo('Get Coffee');
store.addTodo('Write simpler code');

store.todos[0].finished = true;

setTimeout(function () {
    store.addTodo('Get a cookie as well');
}, 2000);

window.store = store;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[149]);
//# sourceMappingURL=index.js.map