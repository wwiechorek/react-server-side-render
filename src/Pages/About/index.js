import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessage } from '../../store/reducers'
import { frontloadConnect } from 'react-frontload'
const frontload = async props =>
    !props.message && await props.getMessage()
class About extends Component {
  render() {
    return (
      <div>
        About
        <br />
        Message: {this.props.message}
      </div>
    );
  }
}
// export default About
const mapStateToProps = state => ({
  message: state.message
});
const mapDispatchToProps = {
  getMessage
}
export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false
})(About));