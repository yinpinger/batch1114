//1. add todo
//2. mod todo
//3. del todo

export const ADD_TODO = 'ADD_TODO';
export const MOD_TODO = 'MOD_TODO';
export const DEL_TODO = 'DEL_TODO';

export const addTodo = (dispatch) => (content) => {
  dispatch({
    type: ADD_TODO,
    payload: {
      content,
      isCompleted: false,
    },
  });
};

export const modTodo = (dispatch) => (index) => {
  dispatch({
    type: MOD_TODO,
    payload: index,
  });
};

export const delTodo = (dispatch) => (index) => {
  dispatch({
    type: DEL_TODO,
    payload: index,
  });
};
