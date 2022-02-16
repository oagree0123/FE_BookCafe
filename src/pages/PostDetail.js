import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {actionCreators as postActions} from "../redux/modules/post"
import { actionCreators as commentActions } from '../redux/modules/comment';
import Detail from '../components/Detail';
import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommentWrite';

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const id = props.match.params.id;

  const post_list = useSelector(store => store.post.list);
  const post_idx = post_list.findIndex(p => parseInt(p.moimId) === parseInt(id));

  const post = post_list[post_idx];

  useEffect(() => {
    if(post) {
      return ;
    }
    dispatch(postActions.getPostOneDB(id));
  }, []);

  return (
    <>
      {post &&
        <Detail 
          {...post}
        />
      }
      <CommentWrap>
        <CommentWrite post_id={id}/>
        <CommentList post_id={id}/> 
      </CommentWrap>
    </>
  );
};

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PostDetail;