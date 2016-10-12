mport * as types from './ActionTypes'
import authorApi from '../api/mockAuthorApi'

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(err => {
      throw(err);
    })
  }
}
