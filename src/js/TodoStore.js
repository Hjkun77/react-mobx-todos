// import { computed, observable } from "mobx"

// class Todo {
//   @observable value
//   @observable id
//   @observable complete

//   constructor(value) {
//     this.value = value
//     this.id = Date.now()
//     this.complete = false
//   }
// }

// export class TodoStore {
//   @observable todos = []
//   @observable filter = ""
//   @computed get filteredTodos() {
//     var matchesFilter = new RegExp(this.filter, "i")
//     return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
//   }

//   createTodo(value) {
//     this.todos.push(new Todo(value))
//   }

//   clearComplete = () => {
//     const incompleteTodos = this.todos.filter(todo => !todo.complete)
//     this.todos.replace(incompleteTodos)
//   }
// }

// export default new TodoStore

import { autorun, observable, computed } from "mobx"
// autorun lets you run the code in mobx 

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value;
    this.id = Date.now()
    this.complete = false
  }
}
class TodoStore {
  @observable todos = []
  @observable filter = ""

  @computed get filteredTodoList() {
    let matchesFilter = new RegExp(this.filter, "i");
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }

  createTodo(value) {
    this.todos.push(new Todo(value))
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }
}

var store = window.store = new TodoStore

export default store;

// autorun(() => {
//   console.log(store.todos[0])
//   console.log(store.filter)
// }) 