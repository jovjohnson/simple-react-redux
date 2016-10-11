export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state, //returns new instance of array
        Object.assign({}, action.course) //creates copy with new course
      ];

    default:
      return state;
  }
}
