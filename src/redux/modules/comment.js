import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import axios from "axios";

const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment) => ({comment_id, comment}));
const deleteComment = createAction(DELETE_COMMENT, (comment_idx) => ({ comment_idx }));

const initialState = {
  list: [],
};

const getCommentDB = (moim_id) => {
  return function (dispatch, getState, {history}) {
    axios
    .get(`http://yuseon.shop/comments/${moim_id}`)
    .then((res) => {
      dispatch(getComment(res.data));
      /* dispatch(getComment(res.data)); */
    })
    .catch((err) => {
      console.log("댓글 조회 실패", err);
    })
  }
  /* .get(`http://localhost:3003/comments/${moim_id}`) */
  /* .get(`http://13.124.130.158/comments/${moim_id}`) */
}

const addCommentDB = (moim_id, comment) => {
  const token = sessionStorage.getItem('token');
  return function(dispatch, getState, {history}) {
    const user = getState().user.userInfo;

    axios
    .post(`http://yuseon.shop/comments/${moim_id}`, {
      moimId : 1,
      nickname : user.nickname,    
      comment: comment
    }, {
      headers: {
        Authorization: `${token}`
      }
    })
    .then((res) => {
      dispatch(addComment({
          commentId: res.data.commentId,
          nickname: user.nickname, 
          comment: comment,
        }
      ));
    })
    .catch((err) => {
      console.log("댓글추가실패", err);
    })
  }
}

const editCommentDB = (comment_id, comment) => {
  return function (dispatch, getState, {history}) {
    const user = getState().user.userInfo;

    const token = sessionStorage.getItem('token');
    axios
    .put(`http://yuseon.shop/comments/${comment_id}`, {
      nickname : user.nickname,    
      comment: comment,
    }, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      dispatch(editComment(comment_id, comment));
    })
  }
}

const deleteCommentDB = (comment_id) => {
  const token = sessionStorage.getItem('token');
  return function (dispatch, getState, {history}) {
    axios
    .delete(`http://yuseon.shop/comments/${comment_id}`,{
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      const _comment = getState().comment.list;

      const comment_idx = _comment.findIndex((c) => {
        return parseInt(c.commentId) === parseInt(comment_id);
      })

      dispatch(deleteComment(comment_idx))
    })
    .catch((err) => {
      console.log("삭제실패");
    })
  }
}

export default handleActions({
  [GET_COMMENT]: (state, action) => produce(state, (draft) => {
    draft.list = [];
    draft.list.push(...action.payload.comment_list);

    draft.list = draft.list.reduce((acc, cur) => {
      if(acc.findIndex(a => a.commentId === cur.commentId) === -1) {
        return [...acc, cur];
      } else {
        acc[acc.findIndex(a => a.commentId === cur.commentId)] = cur;
        return acc;
      }
    }, [])
  }),
  [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
    draft.list.unshift(action.payload.comment);
  }),
  [EDIT_COMMENT]: (state, action) => produce(state, (draft) => {
    let idx = draft.list.findIndex((c) => {
      return  parseInt(c.commentId) === parseInt(action.payload.comment_id)
    })

    draft.list[idx] = {...draft.list[idx], comment: action.payload.comment};
  }),
  [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {
    const new_comment_list = draft.list.filter((c, i) => {
      return parseInt(action.payload.comment_idx) !== i;
    })

    draft.list = new_comment_list;
  }),
}, initialState);

const actionCreators = {
  getComment,
  getCommentDB,
  addCommentDB,
  editCommentDB,
  deleteCommentDB,
};

export { actionCreators };