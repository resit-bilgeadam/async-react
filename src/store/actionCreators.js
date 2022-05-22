import { SET_TODOS } from "./types";
import api from "../api";

export const setTodosAction = (todos) => ({ type: SET_TODOS, payload: todos });

export const fetchTodosAction = () => async (dispatch) => {
  // Side effects here...
  const { data } = await api.get("/todos");

  return dispatch(setTodosAction(data.data));
};

export const fetchTodoAction = (id) => async (dispatch) => {
  const { data } = await api.get(`/todos/${id}`);

  console.log(data);
  return data.data;
};
