import axios from 'axios';

export const SET_USER = 'SET_USER';
export const SET_PROVIDERS = 'SET_PROVIDERS';
export const CONSENT_SUCCESS = 'CONSENT_SUCCESS';

export const getUser = () => dispatch => {
  axios
    .get('https://infinite-castle-77802.herokuapp.com/user', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZkNWRmYjc4LWZjYmMtNDJkZi1iMTZiLWNmN2FlZGMyMmUzOCIsImlhdCI6MTU1NzAxNzY2OCwiZXhwIjoxNTU3MTA0MDY4fQ.NHhm-K04RRdnwXaT0374boioVsAd6ZKkuOMpr6Fgm0k',
      },
    })
    .then(res => dispatch({ type: SET_USER, payload: res.data }))
    .catch(err => console.log(err));
};

export const getProviders = () => dispatch => {
  axios
    .get('https://infinite-castle-77802.herokuapp.com/providers', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZkNWRmYjc4LWZjYmMtNDJkZi1iMTZiLWNmN2FlZGMyMmUzOCIsImlhdCI6MTU1NzAxNzY2OCwiZXhwIjoxNTU3MTA0MDY4fQ.NHhm-K04RRdnwXaT0374boioVsAd6ZKkuOMpr6Fgm0k',
      },
    })
    .then(res => dispatch({ type: SET_PROVIDERS, payload: res.data.providers }))
    .catch(err => console.log(err));
};

export const giveConsent = (patientId, providerId) => dispatch => {
  axios
    .post(
      `https://infinite-castle-77802.herokuapp.com/patients/${patientId}/consent`,
      { providerId },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZkNWRmYjc4LWZjYmMtNDJkZi1iMTZiLWNmN2FlZGMyMmUzOCIsImlhdCI6MTU1NzAxNzY2OCwiZXhwIjoxNTU3MTA0MDY4fQ.NHhm-K04RRdnwXaT0374boioVsAd6ZKkuOMpr6Fgm0k',
        },
      }
    )
    .then(res => dispatch({ type: CONSENT_SUCCESS }))
    .catch(err => console.log(err));
};
