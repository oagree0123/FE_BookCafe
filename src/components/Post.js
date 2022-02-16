import React from 'react';
import styled from 'styled-components';

import { history } from '../redux/configStore';
import { Grid, Image, Text } from '../elements';

const Post = (props) => {
  return (
    <PostWrap
      onClick={() => {
        history.push(`/post/${props.moimId}`);
      }}
    >
      <ImageWrap >
        <Image src={props.imageUrl} />
      </ImageWrap>

        {/* <Text is_badge>{props.joinUntil}</Text>
        <Text is_badge2>
        {props.moimMember ? props.moimMember.length : 0 } / {props.personCnt}
      </Text> */}
      <ContentWrap>
        <BookEpllipsis>{props.bookTitle}</BookEpllipsis>
        <Text size="11px" margin="0px 0px 2px 0px" color="#828282">{props.nickname}님의 모임</Text>
        <TitleEpllipsis>{props.title}</TitleEpllipsis>
        <TextEpllipsis>{props.contents}</TextEpllipsis>
      </ContentWrap>
    </PostWrap> 
  );
};

const PostWrap = styled.div`
  margin-bottom: 36px;
  width: 100%; 
  height: 100%;
  max-height: 376px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`;

const ImageWrap = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 224px;
  overflow: hidden;
/*   background-color: rgba(255, 138, 0, 0.23); */
  margin: 0 auto;
`;

const ContentWrap =styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 12px 16px 12px;
  min-height: 156px;
  box-sizing: border-box;
`;

const BookEpllipsis = styled.p`
  margin: 0px 0px 14px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  font-size: 14px;
`;

const TitleEpllipsis = styled.p`
  margin: 6px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  font-size: 14px;
`;

const TextEpllipsis = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  font-size: 14px;
`;

export default Post;