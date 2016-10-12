import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/CourseActions'
import CourseForm from './CourseForm'


class ManageCourses extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }
  }

  render() {
    return (
      <div>
        <h2>Manage Course </h2>
        <CourseForm allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors} />
      </div>
    )
  }
}

ManageCourses.PropTypes = {
  course: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '',
    category: ''}
  return {
    course: course
  }

}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses);
