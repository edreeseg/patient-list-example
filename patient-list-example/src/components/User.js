import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions';
import PatientLink from './PatientLink';

class User extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.patients ? (
          <ul>
            {this.props.patients.map(x => (
              <PatientLink key={x.id} data={x} />
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    patients: state.patients,
    providers: state.providers,
  };
}

export default connect(
  mapStateToProps,
  { getUser }
)(User);
