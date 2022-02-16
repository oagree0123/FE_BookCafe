import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

import { setToken } from "../../shared/token";
import { setCookie, deleteCookie } from "../../shared/Cookie";


// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, () => ({  }));
const logOut = createAction(LOG_OUT, () => ({  }));

// initialState
const initialState = {
  userInfo: {
    username: "",
    nickname: "",
  },
  isLogin: false,
};

const loginCheckDB = () => {
  const token = sessionStorage.getItem("token");
  return function (dispatch, getState, {history}) {
    axios({ 
      method: "post", 
      url: "http://yuseon.shop/islogin", 
      headers: { 
        "content-type": "applicaton/json;charset=UTF-8", 
        "accept": "application/json", 
        "Authorization": `${token}`, 
      }, 
    })
    .then((res) => {
      dispatch(setUser(
        {
          username: res.data.username,
          nickname: res.data.nickname
        })
      );
    })
    .catch((err) => {
      console.log("로그인 확인 실패", err)
    })
  }
}

const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    axios
    /* .post('http://yuseon.shop/user/login',{ */
    .post('http://yuseon.shop/user/login',{
      username: username,
      password: password,
    })
    .then((res) => {
      const token_res = res.headers.authorization;
      setToken(token_res);
      
      return token_res
    })
    .then((token_res) =>{
      axios({ 
        method: "post", 
        url: "http://yuseon.shop/islogin", 
        headers: { 
          "content-type": "applicaton/json;charset=UTF-8", 
          "accept": "application/json", 
          "Authorization": `${token_res}`, 
        }, 
      })
      .then((res) => {
        dispatch(setUser(
          {
            username: res.data.username,
            nickname: res.data.nickname
          })
        );
      })
      .catch((err) => {
        console.log("로그인 확인 실패", err)
      })
      history.replace('/')
    })
    .catch((err) => {
      window.alert("이메일이나 패스워드를 다시 확인해주세요!")
    })
  };
};

const signUpDB = (id, pwd, user_name) => {
  return function (dispatch, getState, {history}){
    /* .post('http://yuseon.shop/user/signup',{ */
    axios
    .post('http://yuseon.shop/user/signup',{
      "username": id,
      "nickname": user_name ,
      "password": pwd,
    })
    .then((res) => {
      window.alert("회원가입이 완료되었습니다!");
      history.replace('/');
    })
    .catch((err) => {
      window.alert(err.response.data.errorMessage);
    })
  }
}

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.userInfo = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        sessionStorage.removeItem("token");
        deleteCookie("is_login");
        draft.userInfo = {
          username: "",
          nickname: "",
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
  signUpDB,
  loginDB,
  loginCheckDB,
};

export { actionCreators };