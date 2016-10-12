import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/CourseActions'


class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <h2>Add Course </h2>
        {/* <input type="text"
        onChange={this._onTitleChange}
        value={this.state.course.title} />

        <input className="btn btn-info" type="submit"
        value="Save"
        onClick={this._onClickSave}/> */}
      </div>
    )
  }
}

ManageCoursePage.PropTypes = {
  myProp: PropTypes.string.isRequired
}


function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
