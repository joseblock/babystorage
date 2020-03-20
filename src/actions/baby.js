import * as types from '../types/babys';


export const addBaby = (id, name, lastname) => ({
  type: types.BABY_ADDED,
  payload: { id, name, lastname},
});

export const deleteBaby = (id) => ({
  type: types.BABY_DELETED,
  payload: {id},
});