// imports

import { actionCreators as userActions } from "redux/modules/user";

// actions

const SET_FEED = "SET_FEED";

// actions creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

// api action

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFeed(json)));
  };
}

// intial state

const initalState = {};

// reducer

function reducer(state = initalState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// reducer function

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

const actionCreators = {
  getFeed
};

// export

export { actionCreators };

// default reducer export

export default reducer;
