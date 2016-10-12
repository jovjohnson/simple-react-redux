import * as types from '../actions/ActionTypes'
import initialState from './initialState'

export default function authorReducer(state = initialState.authors, action) {
  switch(action.type) {
    case types.CREATE_AUTHOR:
      return [...state, //returns new instance of array
        Object.assign({}, action.author) //creates copy with new author
      ];
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
