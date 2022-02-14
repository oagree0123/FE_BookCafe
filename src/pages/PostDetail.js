import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {actionCreators as postActions} from "../redux/modules/post"
import Detail from '../Detail';

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const id = props.match.params.id;

  const post_list = useSelector(store => store.post.list);
  const post_idx = post_list.findIndex(p => p.id === parseInt(id));

  console.log(id, post_list)

  const post = post_list[post_idx];
  console.log(post);

  useEffect(() => {
    if(post) {
      return ;
    }
    dispatch(postActions.getPostOneDB(id));
  }, [])
  return (
    <>
      {post &&
        <Detail 
          {...post}
        />
      }
      {/* <CommentWrite post_id={id}/>
      <CommentList post_id={id}/> */}
    </>
  );
};

export default PostDetail;