import {observable, computed, action} from 'mobx';
import {apiRequest} from '../utils';
export type TodosView = 'all' | 'completed' | 'pending';

export default class TodoStore {
  @observable todos: TodoModel[] = [];
  @observable newTodoText = '';
  @observable view: TodosView = 'all';

  @computed get completedTodos(): TodoModel[] {
    return this.todos.filter((todo) => todo.isComplete);
  }

  @computed get pendingTodos(): TodoModel[] {
    return this.todos.filter((todo) => !todo.isComplete);
  }

  @computed get completedCount(): number {
    return this.completedTodos.length;
  }

  @computed get count(): number {
    return this.todos.length;
  }

  callApi = async (): Promise<Object> => {
    const result = await apiRequest({url: 'config', method: 'GET'});
    console.log(result);
    return result;
  }

  // Another example of a second-order computed property.
  @computed get visibleTodos(): TodoModel[] {
    switch (this.view) {
      case 'all': return this.todos;
      case 'completed': return this.completedTodos;
      case 'pending': return this.pendingTodos;
      default: throw new Error('type is `never` here, but have to return or throw'); // TODO
    }
  }

  @action addTodo = (text: string): void => {
    if (!text) {
      return;
    }
    this.todos.push(new TodoModel(text));
    this.newTodoText = '';
  }

  @action removeTodo = (todo: TodoModel): void => {
    (this.todos as any).remove(todo); // TODO type is unfortunately array instead of MobX array
  }

  @action updateNewTodoText = (text: string): void => {
    this.newTodoText = text;
  }

  @action setView = (view: TodosView): void => {
    this.view = view;
  }
}


class TodoModel {
  @observable text = '';
  @observable isComplete = false;

  constructor(text: string) {
    this.text = text;
  }

  @action toggleComplete = (): void => {
    this.isComplete = !this.isComplete;
  }
}