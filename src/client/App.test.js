import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('Tesing Todo App', () => {
  const initState = {
    todos: [],
    error: { error: false, message: '' },
  };

  const oneTodoState = {
    todos: [{ content: '111', isCompleted: false }],
    error: { error: false, message: '' },
  };

  const threeTodoState = {
    todos: [
      { content: '111', isCompleted: false },
      { content: '222', isCompleted: false },
      { content: '333', isCompleted: false },
    ],
    error: { error: false, message: '' },
  };

  const mockStore = configureStore();
  let store;
  it('App is rendered correctly with no todo list', () => {
    store = mockStore(initState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Todo App')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-btn')).toBeInTheDocument();
    expect(screen.getByTestId('todo-text-input')).toBeInTheDocument();
  });

  it('App is rendered correctly with one todo', () => {
    store = mockStore(oneTodoState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('111-0')).toBeInTheDocument();
  });
});
