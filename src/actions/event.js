import * as types from '../types/event';


export const addEvent = (id, event, notes, date) => ({
  type: types.EVENT_ADDED,
  payload: { id, event, notes, date},
});

export const deleteEvent = (id) => ({
  type: types.EVENT_DELETED,
  payload: {id},
});