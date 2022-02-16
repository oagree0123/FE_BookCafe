import { createAction, handleActions } from 'redux-actions'
import { produce } from "immer";
import axios from "axios";
import { 
  ref,
  uploadString, 
  getDownloadURL,
} from 'firebase/storage';
import { storage } from '../../shared/firebase';

import { actionCreators as imageActions } from './image';


// actions
const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

const JOIN_MOIM = "JOIN_MOIM";
const UNJOIN_MOIM = "UNJOIN_MOIM";

// action creators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post_data) => ({ post_data }));
const editdPost = createAction(EDIT_POST, (post_id, post) => ({ post_id, post }));
const deletePost = createAction(DELETE_POST, (post_index) => ({ post_index }));

const joinMoim = createAction(JOIN_MOIM, (post_id, nickname) => ({ post_id, nickname }));
const unjoinMoim = createAction(UNJOIN_MOIM, (post_id, nickname) => ({ post_id, nickname }));

// initialState
const initialState = {
  list: [],
};

const initialPost = {
  title: "",
  contents: "",
  nickname: "",
  personCnt: "",
  bookTitle: "",
  joinUntil: "",
  moimMember: "",
  bookUrl: "",
  imageUrl: "http://image.kyobobook.co.kr/images/book/xlarge/239/x9791158392239.jpg",
  createdAt: "",
  modifiedAt: "2022-03-01",
}

// middleware actions
const getPostDB = () => {
  return function(dispatch, getState, {history}) {
    axios.get('http://yuseon.shop/moims')
    .then((res) => {
      dispatch(getPost(res.data));
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}

const addPostDB = (moims_data) => {
  const token = sessionStorage.getItem('token');
  return async function(dispatch, getState, {history}) {
    /* image upload */
    const _image = getState().image.preview;

    const storageRef = ref(storage, `images/moims_${new Date().getTime()}`);
    const _upload = uploadString(storageRef, _image, 'data_url');

    _upload.then((snapshot) => {
      console.log(snapshot);
      
      getDownloadURL(snapshot.ref)
      .then((url) => {
        console.log(url);
        
        return url;
      }).then(async(url) => {
        console.log(url);

        const _moims_data =  {imageUrl: url, ...moims_data}
        console.log(_moims_data);

        axios.post(`http://yuseon.shop/moims`, {..._moims_data}, 
        {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          /* dispatch(addPost({id: res.data.id, moimId: res.data.id, ..._moims_data})) */
          dispatch(addPost({moimId: res.data.moimId, ..._moims_data}))

          dispatch(imageActions.setPreview(null));
          history.replace('/');
        })
        .catch((err)=> {
          window.alert("포스트 작성에 문제가 있어요!");
          console.log("포스트 작성실패", err);
        })
      })
      .catch((err) => {
        window.alert("이미지 업로드에 문제가 있어요!");
        console.log("이미지 업로드 실패!", err);
      });
    })
  }
}

const editPostDB = (post_id=null, post={}) => {
  const token = sessionStorage.getItem('token');
  return function (dispatch, getState, {history}) {
    if(!post_id) {
      console.log("게시물 정보가 없어요!");
      return;
    }

    const _image = getState().image.preview;
    const _post_idx = getState().post.list.findIndex(p => parseInt(p.moimId) === parseInt(post_id));
    const _post = getState().post.list[_post_idx];
    
    if(_image === _post.imageUrl) {
      axios.put(`http://yuseon.shop/moims/${post_id}`, post, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(editdPost(post_id, {moimId: parseInt(post_id), ...post}));
      })
      return;
    }
    else {
      const storageRef = ref(storage, `images/moims_${new Date().getTime()}`);
      const _upload = uploadString(storageRef, _image, 'data_url');

      _upload.then((snapshot) => {

        getDownloadURL(snapshot.ref)
        .then((url) => {

          return url;
        }).then(async(url) => {
          let new_post = {...post, imageUrl: url}
          console.log(new_post);

          axios.put(`http://yuseon.shop/moims/${post_id}`, {...new_post}, {
            headers: {
              Authorization: `${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            dispatch(editdPost(post_id, {moimId: parseInt(post_id), ...post}));
            history.replace('/')
          }).catch((err) => {
            console.log("포스트 수정 실패", err);
          });

        }).catch((err) => {
          console.log("이미지 업로드 실패", err);
        })
      })

      return;
    }
  }
}

const deletePostDB = (post_id) => {
  const token = sessionStorage.getItem('token');
  return function(dispatch, getState, {history}) {
    if(!post_id) {
      console.log("게시물 정보가 없어요!");
      return;
    }
    const user = getState().user.userInfo;
    const _post = getState().post.list;

    console.log(post_id, user.nickname)

    /* axios.delete(`http://yuseon.shop/moims/${post_id}`,{
      moimId: post_id,
      nickname: user.nickname,
    }, {
      headers: {
        Authorization: `${token}`,
      },
    }) */
    axios({ 
      method: "delete", 
      url: `http://yuseon.shop/moims/${post_id}`, 
      data: {
        moimId: post_id,
        nickname: user.nickname,
      },
      headers: {
        "accept": "application/json", 
        "Authorization": `${token}`, 
      }, 
    })
    .then((res) => {
      const post_index = _post.findIndex((v) => {
        /* return parseInt(v.id) === parseInt(post_id); */
        return parseInt(v.moimId) === parseInt(post_id);
      });
  
      dispatch(deletePost(post_index));
      history.replace('/');
    })
    .catch((err) => {
      console.log("포스트 삭제 실패", err);
    });
  }
}

const getPostOneDB = (post_id) => {
  return function(dispatch, getState, {history}) {
    axios.get(`http://yuseon.shop/moims/${post_id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getPost([res.data]));
    })
    .catch((err) => {
      console.log("포스트 하나 가져오기 실패", err);
    });
  }
}

const joinMoimDB = (moimId, nickname) => {
  const token = sessionStorage.getItem('token');
  return function (dispatch, getState, {history}) {
    axios
    .post(`http://yuseon.shop/moims/join`, {
      moimId: moimId,
      nickname: nickname
    }, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      dispatch(joinMoim(moimId, nickname));
    })
    .catch((err) => {
      console.log("참여할 수 없습니다!", err)
    })
  }
}

const unjoinMoimDB = (moimId, nickname) => {
  const token = sessionStorage.getItem('token');
  return function (dispatch, getState, {history}) {
    console.log(moimId, nickname)
    axios({ 
      method: "delete", 
      url: "http://yuseon.shop/moims/join", 
      data: {
        moimId: moimId,
        nickname: nickname
      },
      headers: {
        "accept": "application/json", 
        "Authorization": `${token}`, 
      }, 
    })
    .then((res) => {
      dispatch(unjoinMoim(moimId, nickname));
    })
    .catch((err) => {
      console.log("참여를 취소할 수 없습니다.", err)
    })
  }
}

// reducer
export default handleActions({
  [GET_POST]: (state, action) => produce(state, (draft) => {
    draft.list.push(...action.payload.post_list);

    draft.list = draft.list.reduce((acc, cur) => {
      if(acc.findIndex(a => a.moimId === cur.moimId) === -1) {
        return [...acc, cur];
      } else {
        acc[acc.findIndex(a => a.moimId === cur.moimId)] = cur;
        return acc;
      }
    }, []);
  }),
  [ADD_POST]: (state, action) => produce(state, (draft) => {
    draft.list.unshift(action.payload.post_data);
  }),
  [EDIT_POST]: (state, action) => produce(state, (draft) => {
    let idx = draft.list.findIndex((p) => parseInt(p.moimId) === parseInt(action.payload.post_id));

    draft.list[idx] = {...draft.list[idx], ...action.payload.post};
  }),
  [DELETE_POST]: (state, action) => produce(state, (draft) => {
    const new_post_list = draft.list.filter((p, i) => {
      return parseInt(action.payload.post_index) !== i
    })

    draft.list = new_post_list;
  }),
  [JOIN_MOIM]: (state, action) => produce(state, (draft) => {
    let idx = draft.list.findIndex((p) => parseInt(p.moimId) === parseInt(action.payload.post_id));

    draft.list[idx].moimMembers.push(action.payload.nickname);
  }),
  [UNJOIN_MOIM]: (state, action) => produce(state, (draft) => {
    let idx = draft.list.findIndex((p) => parseInt(p.moimId) === parseInt(action.payload.post_id));

    let filterMembers = draft.list[idx].moimMembers.filter(m => {
      return m !== action.payload.nickname;
    });

    draft.list[idx] = {...draft.list[idx], moimMembers: filterMembers}
  }),
}, initialState);

const actionCreators = {
  getPost,
  addPost,
  getPostDB,
  addPostDB,
  editPostDB,
  getPostOneDB,
  deletePostDB,
  joinMoimDB,
  unjoinMoimDB,
}

export { actionCreators };