import * as types from './ActionTypes'
import courseApi from '../api/mockAuthorApi'

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSucces(courses));
    }).catch(err => {
      throw(err);
    })
  }
}
