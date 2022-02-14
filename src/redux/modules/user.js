import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

import { setToken } from "../../shared/token";
import apis from "../../shared/apis";

import Login from "../../pages/Login";
import instance from "../../shared/apis"

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, () => ({  }));
const getUser = createAction(GET_USER, () => ({  }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  userInfo: {
    userUid: "",
    userNickname: "",
  },
  isLogin: false,
  // user: null,
  // username: "",
};

// middleware actions
// const loginAction = (user) => {
//   return function (dispatch, getState, { history }) {
//     console.log(history);
//     dispatch(setUser(user));
//     history.push("/");
//   }
// };

// 로그인

const LoginDB = (username, password, user_name) => {
  return function (dispatch, getState, { history }) {
    axios
    .post('http://13.124.130.158/user/login',{
      username: username,
      // nickname: user_name ,
      password: password,
    })
      .then((res) => {
        const USER_TOKEN = res.data.token;

        sessionStorage.setItem("X-AUTH-TOKEN", USER_TOKEN);
        dispatch(
          setUser({
            userUid: res.data.userUid,
            userNickname: res.data.userNickname,
          })
        );
      })
      .then(() => {
        window.alert("성공적으로 로그인되었습니다!");
        history.push("/");
      })
      .catch(() => window.alert("로그인 정보가 존재하지 않습니다!"));
  };
};
    

const SignUpDB = (id, pwd, user_name) => {
  return function (dispatch, getState, {history}){
    axios
    .post('http://13.124.130.158/user/signup',{
      "username": id,
      "nickname": user_name ,
      "password": pwd,
    })
    .then((res) => {
      if (res.data === "성공적으로 회원 가입이 완료 되었습니다.") {
        window.alert(res.data)
        history.push("/");
        return;
      }
      window.alert(res.data)
    })
    .catch((error) => {
      console.log(error);
    })
    
  }
}

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = {
          userNickname: "",
          userUid: "",
        };
        draft.isLogin = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  // loginAction,
  // signupFB,
  SignUpDB,
  LoginDB,
};

export { actionCreators };