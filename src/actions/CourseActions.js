import * as types from './ActionTypes'

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }
}
