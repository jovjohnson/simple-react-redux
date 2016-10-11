import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/CourseActions'


class CoursesPage extends Component  {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: { title: '' }
    }

    this._onTitleChange = this._onTitleChange.bind(this)
    this._onClickSave = this._onClickSave.bind(this)
  }

  _onTitleChange(e) {
    const course = this.state.course
    course.title = e.target.value;

    this.setState({ course: course })

  }

  _onClickSave() {

    this.props.dispatch(courseActions.createCourse(this.state.course))

  }

  _courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this._courseRow)}
        <h2>Add Course </h2>
        <input type="text"
        onChange={this._onTitleChange}
        value={this.state.course.title} />

        <input className="btn btn-info" type="submit"
        value="Save"
        onClick={this._onClickSave}/>
      </div>
    )
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}


function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses //'courses' from reducer
  }
}
export default connect(mapStateToProps)(CoursesPage)