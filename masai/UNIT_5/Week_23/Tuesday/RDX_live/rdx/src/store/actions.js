// action Creator
import { ADD_COUNT } from "./actionType";
import { SUB_COUNT } from "./actionType";

export const AddCount = (data) => ({
  type: ADD_COUNT,
  payload: data,
});

export const SubCount = (data) => ({
  type: SUB_COUNT,
  payload: data,
});
