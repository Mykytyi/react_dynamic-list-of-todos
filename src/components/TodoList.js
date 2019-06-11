import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      todoList: [],
      users: []
    };
    this.loadItems = this.loadItems.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  loadItems(event) {
    event.target.innerHTML = "Loading";

    const xhrTodos = new XMLHttpRequest();
    const xhrUsers = new XMLHttpRequest();
    xhrTodos.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhrTodos.addEventListener('load', () => {
      let todoList = JSON.parse(xhrTodos.response);

      xhrUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
      xhrUsers.addEventListener('load', () => {
        let usersList = JSON.parse(xhrUsers.response);
        this.setState({
          users: usersList,
          todoList: todoList
        });
      });

      xhrUsers.send();
    });

    xhrTodos.send();

    event.target.setAttribute('disabled', 'disabled');
  }

  sortItems() {
    this.setState((state) => ({
      todoList: state.todoList.sort((a, b) => {
        return a["title"].localeCompare(b["title"]);
      })
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.loadItems}>Click</button>
        <button onClick={this.sortItems}>Sort</button>
        <table>
          <tbody>
            {this.state.todoList.map(item => <TodoItem
                data={item}
                key={item.title}
                users={this.state.users}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
