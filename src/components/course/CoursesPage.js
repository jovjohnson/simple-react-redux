import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/CourseActions'
import CourseList from './CourseList'
import { browserHistory } from 'react-router'


class CoursesPage extends Component  {
  constructor(props, context) { //initialize state and bind functions
    super(props, context)

    // this._onTitleChange = this._onTitleChange.bind(this)
    // this._onClickSave = this._onClickSave.bind(this)

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  // _onTitleChange(e) {
  //   const course = this.state.course
  //   course.title = e.target.value;
  //
  //   this.setState({ course: course })
  //
  // }

  // _onClickSave() {
  //   this.props.actions.createCourse(this.state.course)
  // }

  _courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course')
  }

  render() { //ideally renders child components, no markup
    const { courses } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
        value="Add Course"
        className="btn btn-primary"
        onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={ courses }/>

      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses //'courses' from reducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
