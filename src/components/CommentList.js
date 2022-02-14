import React from 'react';
import styled from 'styled-components';

import { Text } from '../elements';

const CommentList = (props) => {
  return (
    <>
      <CommnetWrap>
        <ContentWrap>
          <Text is_width="140px">닉네임</Text>
          <Text>댓글 내용</Text>
        </ContentWrap>
        <div>
          <Text>2022-03-01</Text>
        </div>
      </CommnetWrap>
    </>
  );
};

const CommnetWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default CommentList;