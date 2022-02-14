import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Text, Image, Button } from './elements';
import { actionCreators as postActions } from './redux/modules/post';

const Detail = (props) => {
  const {history} = props;
  const dispatch = useDispatch();

  return (
    <>
      <PostDetailWrap>
        <PostContentWrap>
          <TitleWrap>
            <Text size="30px" bold>{props.title}</Text>
            <TitleBtnWrap>
              <Button bg="#fff" fcolor="#000">수정</Button>
              <Button 
                bg="#fff" 
                fcolor="#000"
                _onClick={()=>{
                  dispatch(postActions.deletePostDB(props.id));
                }}
              >
                삭제
              </Button>
            </TitleBtnWrap>
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
              모집인원 : {props.moimMember?.length ? props.moimMember.length : 0} / {props.personCnt}
            </Text>
          </BIWrapMid>
          <BIWrapBottom>
            <Text size="18px">D-24</Text>
            <Button bg="#c9c9c9" width="80%">참여 하기</Button>
          </BIWrapBottom>
        </BookInfoWrap>
      </PostDetailWrap>
      {/* <CommentWrite post_id={id}/>
      <CommentList post_id={id}/> */}
    </>
  );
};

const PostDetailWrap = styled.div`
  padding: 45px 20px;
  max-width: 1140px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
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
  margin-right: 52px;
  width: calc(100% - 380px);
`;

const BookInfoWrap = styled.div`
  position: relative;
  margin-top: 72px;
  padding: 18px 28px;
  /* width: 380px; */
  width: calc(100% - 680px);
  height: 422px;
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