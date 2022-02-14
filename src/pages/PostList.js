import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Button } from '../elements';
import Post from '../components/Post';
import { actionCreators as postActions } from '../redux/modules/post';

const PostList = (props) => {
  const {history} = props
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);

  useEffect(() => {
    if(post_list.length < 3) {
      dispatch(postActions.getPostDB());
    } 
  }, [])

  return (
    <>
      <Box>BOOKCAFE</Box>
      <PostListWrap>
        {post_list.map((p, idx) => {
          return (
            <Post 
              key={idx} 
              {...p} 
            />
          );
        })}
        <Button 
          is_float 
          _onClick={() => {
            history.push("/write")
          }}
        >+</Button>
      </PostListWrap> 
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  background-color: skyblue;
  margin-bottom: 48px;
  font-size: 48px;
  font-weight: 800;
`

const PostListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
`

export default PostList;