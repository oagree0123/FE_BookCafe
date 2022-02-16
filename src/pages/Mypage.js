import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Text } from '../elements';
import { actionCreators as postActions } from '../redux/modules/post';
import Post from '../components/Post';

const Mypage = (props) => {
  const dispatch = useDispatch();

  const user = props.match.params.nickname;
  const mypost_list = useSelector(state => state.post.mylist);


  useEffect(() => {
    dispatch(postActions.getUserPostDB(user));
  }, [])

  return (
    <MypageWrap>
      <Box>{user}님의 페이지</Box>
      <Text 
        size="28px"
        margin="0px 0xp 10px 0px"
      >
        {user}님이 참여한 모임
      </Text>
      <hr />
      <MycontentsWrap>
        {
          mypost_list.map((m, idx) => {
            return (
              <Post key={idx} {...m} />
            );
          })
        }
      </MycontentsWrap>
    </MypageWrap>
  );
};

const MypageWrap = styled.div`

`;

const MycontentsWrap = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
`;

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

export default Mypage;