import { SET_USER, SET_PROVIDERS, CONSENT_SUCCESS } from './actions';

const initialState = {
  token:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZkNWRmYjc4LWZjYmMtNDJkZi1iMTZiLWNmN2FlZGMyMmUzOCIsImlhdCI6MTU1NzAxNzY2OCwiZXhwIjoxNTU3MTA0MDY4fQ.NHhm-K04RRdnwXaT0374boioVsAd6ZKkuOMpr6Fgm0k',
  user: {},
  patients: null,
  providers: null,
};

//reducer returns an object,when it is called for the first time itdoesnt have action
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        patients: action.payload.user.patients,
      };
    case SET_PROVIDERS:
      return { ...state, providers: action.payload };
    default:
      return state;
  }
}

export default reducer;
