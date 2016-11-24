import {FETCH_WEATHER} from '../actions/index';

// in Redux we do not manipulate state
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // concat doesn't change existing array, it creates new array with old + new values'
      return [action.payload.data, ...state]; // the same to other return
}
  return state;
}