import React, {Component} from 'react';
import {render} from 'react-dom'
import {observable, computed, action} from 'mobx'
import {Provider, observer} from 'mobx-react'

import '../../less/index.less'

class Todo {
    id = Math.random();
    @observable title;
    @observable finished = false;
    constructor(title) {
        this.title = title;
    }
}

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @action
    addTodo(title) {
        this.todos.push(new Todo(title));
    }
}

@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo => 
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

const TodoView = observer(({todo}) => 
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
);

const store = new TodoList();
render(
    <TodoListView todoList={store} />, 
    document.getElementById('app')
);

store.addTodo('Get Coffee');
store.addTodo('Write simpler code');

store.todos[0].finished = true;

setTimeout(() => {
    store.addTodo('Get a cookie as well');
}, 2000);

window.store = store;
  