import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Text, Button } from '../elements';

const CommentList = (props) => {
  const dispatch = useDispatch();

  const { post_id } = props;
  /* const comment_list = useSelector(state => state.comment.list); */

  return (
    <ListWrap>
    {/* {comment_list &&
      comment_list.map((c, idx) => {
        return <CommentItem key={idx} {...c} />
      })
    } */}
    </ListWrap>
  );
}

const CommentItem = (props) => {
  return (
      <CommnetWrap>
        <ContentWrap>
          <Text is_width="140px">{props.nickname}</Text>
          <Text>{props.comment}</Text>
        </ContentWrap>
        <div>
          <Button>수정</Button>
          <Button>삭제</Button>
          <Text>{props.createdAt}</Text>
        </div>
      </CommnetWrap>
  );
};

const ListWrap = styled.div`

`;

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