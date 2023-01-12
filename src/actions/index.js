//1. add todo
//2. mod todo
//3. del todo
import { todoApi } from '../api/index';
export const ADD_TODO = 'ADD_TODO';
export const MOD_TODO = 'MOD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const INIT_TODO = 'INIT_TODO';
export const ERROR = 'ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const closeErrorModal = (dispatch) => () => {
  dispatch({
    type: RESET_ERROR,
  });
};

export const initTodo = (dispatch) => () => {
  todoApi
    .getAllTodos()
    .then((todos) =>
      dispatch({
        type: INIT_TODO,
        payload: todos,
      })
    )
    .catch((error) =>
      dispatch({
        type: ERROR,
        payload: { error: true, message: 'init todos failed' },
      })
    );
};

export const addTodo = (dispatch) => async (content) => {
  try {
    const result = await todoApi.addTodo({
      content,
      isCompleted: false,
    });

    console.log(result);
    dispatch({
      type: ADD_TODO,
      payload: {
        content,
        isCompleted: false,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const modTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.modTodo(index);
    dispatch({
      type: MOD_TODO,
      payload: index,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const delTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.delTodo(index);
    dispatch({
      type: DEL_TODO,
      payload: index,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
