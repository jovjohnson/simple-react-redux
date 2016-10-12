import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/CourseActions'
import CourseForm from './CourseForm'


class ManageCourses extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    }

    this.updateCourseState = this.updateCourseState.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }

  updateCourseState(e) {
    const field = e.target.name
    let course = this.state.course
    course[field] = e.target.value
    return this.setState({ course: course })
  }

  saveCourse(e) {
    e.preventDefault();
    this.props.actions.saveCourse(this.state.course)
    console.log('dkashj');
  }

  render() {
    return (
      <div>
        <CourseForm allAuthors={this.props.author}
        onChange={this.updateCourseState}
        course={this.state.course}
        onSave={this.saveCourse}
        errors={this.state.errors} />
      </div>
    )
  }
}

ManageCourses.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '',
    category: ''}

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }

  })
  return {
    course: course,
    authors: authorsFormattedForDropdown
  }

}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses);
