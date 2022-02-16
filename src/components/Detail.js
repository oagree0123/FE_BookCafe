import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { history } from '../redux/configStore';
import { Text, Image, Button } from '../elements';
import { actionCreators as postActions } from '../redux/modules/post';

const Detail = (props) => {
  const dispatch = useDispatch();

  const user_info = useSelector(state => state.user.userInfo);
  const is_login = useSelector(state => state.user.isLogin);

  const deadline = moment(props.joinUntil).diff(moment(), "days");

  const [endJoin, setEndJoin] = useState(false);

  const joinClick = () => {
    if(!is_login) {
      window.alert("로그인후 이용 가능합니다!");
      return ;
    }

    if(props.moimMembers.length === parseInt(props.personCnt)) {
      window.alert("더이상 참여할 수 없습니다!");
      return ;
    }

    dispatch(postActions.joinMoimDB(props.moimId, user_info.nickname));
  }

  const unjoinClick = () => {
    if(!is_login) {
      window.alert("로그인후 이용 가능합니다!");
      return ;
    }

    dispatch(postActions.unjoinMoimDB(props.moimId, user_info.nickname));
  }

  useEffect(() => {
    if(props.moimMembers.length === parseInt(props.personCnt)){
      setEndJoin(true);
    }
    else {
      setEndJoin(false);
    }

    if(props.moimMembers.length === parseInt(props.personCnt)){
    }

  }, [endJoin])

  return (
    <>
      <PostDetailWrap>
        <PostContentWrap>
          <TitleWrap>
            <Text size="30px" bold>{props.title}</Text>
            {(props.nickname === user_info.nickname) ?
              <TitleBtnWrap>
                <Button 
                  bg="#fff" 
                  fcolor="#000"
                  margin="0px 10px 0px 0px"
                  _onClick={() => {
                    history.push(`/write/${props.moimId}`);
                  }}
                >
                  수정
                </Button>
                <Button 
                  bg="#fff" 
                  fcolor="#000"
                  _onClick={()=>{
                    dispatch(postActions.deletePostDB(props.moimId));
                  }}
                >
                  삭제
                </Button>
              </TitleBtnWrap>:
              null
            }
          </TitleWrap>

          <BookContentWrap>
            <Text>{props.bookContents}</Text>
          </BookContentWrap>
          <ContentWrap>
            <Text>{props.contents}</Text>
          </ContentWrap>
        </PostContentWrap>
        <BookInfoWrap>
          <ImageWrap >
            <Image src={props.imageUrl} />
          </ImageWrap>
          <BIWrapTop>
            <Text size="18px" margin="0px 0px 8px 0px">{props.bookTitle}</Text>
            <Text size="14px">
              <a style={{color: "#000", textDecoration: "none"}} href={props.bookUrl}>
                책 사러가기
              </a>
            </Text>
          </BIWrapTop>
          <BIWrapMid>
            <Text>
              모집인원 : {
              props.moimMembers.length ? 
              props.moimMembers.length : 0} / {props.personCnt}
            </Text>
          </BIWrapMid>
          <BIWrapBottom>
            <Text size="22px" bold>
              D-{deadline <= 0 ? 0 : deadline}
            </Text>
            {
              deadline <= 0 ?
              <Button 
                bg="#c9c9c9" width="80%"
                _onClick={() => {
                  window.alert("모집 기간이 아닙니다!")
                }}
              >
                기간 마감
              </Button> :
              (endJoin) && ( !props.moimMembers.includes(user_info?.nickname)) ?
              <Button 
                bg="#c9c9c9" width="80%"
                _onClick={() => {
                  window.alert("모집이 완료되었습니다!")
                }}
              >
                모집 완료
              </Button> :
                props.moimMembers.includes(user_info?.nickname) ?
                <Button 
                  bg="#c9c9c9" width="80%"
                  _onClick={unjoinClick}
                >
                  참여 취소
                </Button>:
                <Button 
                  bg="skyblue" width="80%"
                  _onClick={joinClick}
                >
                  참여 하기
                </Button>
              }
          </BIWrapBottom>
        </BookInfoWrap>
      </PostDetailWrap>
    </>
  );
};

const PostDetailWrap = styled.div`
  padding: 45px 20px;
  max-width: 1140px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleWrap = styled.div`
  width: 100%;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleBtnWrap = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

const BookContentWrap = styled.div`
  margin-bottom: 24px;
  padding: 18px 24px;
  width: 100%;
  height: 160px;
  border: 1px solid #c9c9c9;
  border-radius: 20px;
  box-sizing: border-box;
`;

const ContentWrap = styled.div`
  padding: 18px 24px;
  width: 100%;
  height: 240px;
  border: 1px solid #c9c9c9;
  border-radius: 20px;
  box-sizing: border-box;
`;

const PostContentWrap = styled.div`
  width: calc(100% - 380px);
  min-width: 400px;
`;

const BookInfoWrap = styled.div`
  position: relative;
  margin-top: 72px;
  padding: 18px 28px;
  /* width: 380px; */
  width: calc(100% - 680px);
  min-width: 250px;
  height: auto;
  border: 1px solid #c9c9c9;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
`;

const ImageWrap = styled.div` 
  margin: 0 auto;
  margin-bottom: 24px;
  max-height: 224px;
  overflow: hidden;
`;

const BIWrapTop = styled.div`
  margin-bottom: 18px;
`;

const BIWrapMid = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BIWrapBottom = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Detail;