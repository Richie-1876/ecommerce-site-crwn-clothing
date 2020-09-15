/**********************************************************
                      USER ACTIONS
**********************************************************/
import userActionTypes from "./user.types";

/*********************************************************
              ^^^^^^^^^^^IMPORTS^^^^^^^^^^^^^^^
**********************************************************/

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});
/**********************************************************
                GOOGLE SIGN IN ACTIONS
**********************************************************/

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

/**********************************************************
                EMAIL SIGN IN ACTIONS
**********************************************************/

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

/**********************************************************
              SIGN IN SUCCESS AND FAILURE ACTIONS
**********************************************************/

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

/**********************************************************
              SIGN OUT,  SUCCESS AND FAILURE ACTIONS
**********************************************************/

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

/**********************************************************
              SIGN UP, SUCCESS AND FAILURE ACTIONS
**********************************************************/

export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
