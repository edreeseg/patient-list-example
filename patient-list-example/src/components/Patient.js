import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getProviders, giveConsent } from '../redux/actions';

class Patient extends React.Component {
  state = {
    data: null,
    permittedProviders: [],
  };
  componentDidMount() {
    if (this.props.patients) this.setData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.patients) !== JSON.stringify(this.props.patients)
    )
      this.setData();
  }
  setData = () => {
    this.setState(
      {
        data: this.props.patients.filter(
          x => x.id === this.props.match.params.id
        )[0],
      },
      this.getPermittedProviders
    );
    this.props.getProviders();
  };
  getPermittedProviders = () => {
    const url = `https://infinite-castle-77802.herokuapp.com/patients/${
      this.state.data.id
    }/consent`;
    axios
      .get(url, {
        headers: {
          Authorization: this.props.token,
        },
      })
      .then(res => this.setState({ permittedProviders: res.data.providers }))
      .catch(err => console.log(err));
  };
  handleProviderSelect = providerId => {
    this.props.giveConsent(this.state.data.id, providerId);
    setTimeout(this.getPermittedProviders, 2000); // An incredibly hacky way to refresh provider list after giveConsent has finished.  This is not a good way to do it.
  };
  render() {
    return this.state.data ? (
      <section>
        <p>{`${this.state.data.firstName} ${this.state.data.lastName}`}</p>
        <h1>ALL PROVIDERS:</h1>
        <ul>
          {this.props.providers
            ? this.props.providers.map(provider => (
                <li
                  key={provider.id}
                  onClick={() => this.handleProviderSelect(provider.id)}
                >
                  {provider.name}
                </li>
              ))
            : null}
        </ul>
        <h1>GIVEN CONSENT TO:</h1>
        <ul>
          {this.props.providers
            ? this.state.permittedProviders.map(provider => (
                <li key={provider.id}>{provider.name}</li>
              ))
            : null}
        </ul>
      </section>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    providers: state.providers,
    patients: state.patients,
    token: state.token,
  };
};

export default connect(
  mapStateToProps,
  { getProviders, giveConsent }
)(Patient);
