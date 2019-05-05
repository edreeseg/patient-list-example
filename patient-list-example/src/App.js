import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import User from './components/User';
import Patient from './components/Patient';
import { getUser } from './redux/actions';
import { Route } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <>
        <Route exact path="/" component={User} />
        <Route path="/patients/:id" component={Patient} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(App);
