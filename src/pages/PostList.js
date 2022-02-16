import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Button } from '../elements';
import Post from '../components/Post';
import { actionCreators as postActions } from '../redux/modules/post';
import Permit from '../shared/Permit';

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
      <Box>책을 읽는 사람들의 모임</Box>
      <PostListWrap>
        {post_list.map((p, idx) => {
          return (
            <Post 
              key={idx} 
              {...p} 
            />
          );
        })}
        <Permit>
          <Button 
            is_float 
            _onClick={() => {
              history.push("/write")
            }}
          >+</Button>
        </Permit>      
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
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://firebasestorage.googleapis.com/v0/b/bookcafe-stora.appspot.com/o/images%2Fmoims_1644988030271?alt=media&token=a8421298-df85-491f-936c-1885f38e4fa5");
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 48px;
  color: #fff;
  font-size: 48px;
  font-weight: 400;
`

const PostListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
`

export default PostList;