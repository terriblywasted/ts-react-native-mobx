import TodoStore from './TodoStore';

export type Store = {
    todoStore: TodoStore,
};

export default function createStore(): Store {
  return {
    todoStore: new TodoStore(),
  };
}