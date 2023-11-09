const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_ERROR = "SIGN_UP_ERROR";

const initialState = {
  user: null,
  error: null,
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

// Action Creators
export const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpError = (error) => ({
  type: SIGN_UP_ERROR,
  payload: error,
});
