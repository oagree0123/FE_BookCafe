import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as commentActions } from '../redux/modules/comment';
import CommentItem from './CommentItem';

const CommentList = (props) => {
  const dispatch = useDispatch();

  const comment_list = useSelector(state => state.comment.list);

  useEffect(() => {
    dispatch(commentActions.getCommentDB(props.post_id));
  }, []);

  return (
    <>
      {comment_list &&
        comment_list.map((c, idx) => {
          return (
          <CommentItem key={idx} {...c} />
          );
        })
      }
    </>
  );
};

export default CommentList;