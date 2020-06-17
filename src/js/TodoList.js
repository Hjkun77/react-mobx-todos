// import React from "react"
// import { observer } from "mobx-react"


// @observer
// export default class TodoList extends React.Component {
//   createNew(e) {
//     if (e.which === 13) {
//       this.props.store.createTodo(e.target.value)
//       e.target.value = ""
//     }
//   }

//   filter(e) {
//     this.props.store.filter = e.target.value
//   }

//   toggleComplete(todo) {
//     todo.complete = !todo.complete
//   }

//   render() {
//     const { clearComplete, filter, filteredTodos, todos } = this.props.store

//     const todoLis = filteredTodos.map(todo => (
//       <li key={todo.id}>
//        <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
//        <span>{todo.value}</span>
//       </li>
//     ))
//     return <div>
//       <h1>todos</h1>
//       <input className="new" onKeyPress={this.createNew.bind(this)} />
//       <input className="filter" value={filter} onChange={this.filter.bind(this)} />
//       <ul>{todoLis}</ul>
//       <a href="#" onClick={clearComplete}>Clear Complete</a>
//     </div>
//   }
// }

import React, { Component } from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }
  render() {
    const { todos, filter, filteredTodoList, clearComplete } = this.props.store;

    const renderTodoList = filteredTodoList.map(todo => <li key={todo.id}><input onChange={this.toggleComplete.bind(this, todo)} type="checkbox" value={todo.complete} checked={todo.complete} />{todo.value}</li>)


    return (
      <div>
        <h1>todos</h1>
        <input type="text" className="create" onKeyPress={this.createNew.bind(this)} />
        <input type="text" className="filter" onChange={this.filter.bind(this)} />
        <ul>{renderTodoList}</ul>
        <a href="#" onClick={clearComplete}>Clear Complete</a>
      </div>
    )
  }
}