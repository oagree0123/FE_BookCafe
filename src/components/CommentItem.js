import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Text, Button } from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentItem = (props) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.userInfo);

  const [is_first, setIsFirst] = useState(true);
  const [is_edit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  const edComment = () => {
    if(!editValue) {
      window.alert("댓글을 입력해주세요!");
      return;
    }
    dispatch(commentActions.editCommentDB(props.commentId, editValue));
    setEditValue("");
    setIsEdit(false);
  }

  const delComment = () => {
    if(user.nickname !== props.nickname) {
      window.alert("본인이 작성한 댓글이 아닙니다.")
      return;
    }

    dispatch(commentActions.deleteCommentDB(props.commentId));
  }

  const editChange = () => {
    if(user.nickname !== props.nickname) {
      window.alert("본인이 작성한 댓글이 아닙니다.")
      return;
    }
    setIsFirst(false);
    setIsEdit(true);
  }

  if(is_edit) {
    return(
      <CommnetWrap>
        <EditInput 
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
          value={editValue}
        />
        <Button
          width="80px"
          _onClick={edComment}
        >
          수정
        </Button>
      </CommnetWrap>
    );
  }

  return (
      <CommnetWrap>
        <ContentWrap>
          <Text is_width="140px">{props.nickname}</Text>
          <Text>{props.comment}</Text>
        </ContentWrap>
        {
        (user.nickname === props.nickname) ?
          <ButtonWrap>
            <Button 
              width="40px"
              _onClick={editChange}
            >
              수정
            </Button>
            <Button 
              width="40px"
              _onClick={delComment}
            >
              삭제
            </Button>
          </ButtonWrap>:
          null
        }
      </CommnetWrap>
  );
};

const CommnetWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 8px;
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

const ButtonWrap =styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const EditInput = styled.input`
  padding: 0px 10px;
  width: 100%;
  height: 42px;
  border: 1px solid #c9c9c9;
  border-radius: 20px;
  box-sizing: border-box;
`;

export default CommentItem;