import { combineReducers } from 'redux';

import baby, * as babySelectors from './baby';



const reducer = combineReducers({
  baby,
});


export default reducer;

export const getBaby = (state, id) => babySelectors.getBaby(state.baby, id);
