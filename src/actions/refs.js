import { ADD_REF, ADD_ACTIVE } from './types';

export const addRef = ref => async dispatch => {
  dispatch({
    type: ADD_REF,
    payload: ref
  });
};

export const setActive = section => async dispatch => {
  dispatch({
    type: ADD_ACTIVE,
    payload: section
  });
};
