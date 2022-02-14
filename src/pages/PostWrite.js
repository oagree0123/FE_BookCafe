import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text, WriteInput, Button, Image } from '../elements';
import Deadline from '../components/Deadline';
import WriteSelect from '../components/WriteSelect';
import Upload from '../shared/Upload';
import { actionCreators as postActions } from '../redux/modules/post';

const PostWrite = (props) => {
  const {history} = props;
  const dispatch = useDispatch();

  const preview = useSelector((state) => state.image.preview);

  const [moim_name, setMoimName] = useState("");
  const [book_name, setBookName] = useState("");
  const [book_url, setBookUrl] = useState("");
  const [book_content, setBookContent] = useState("");
  const [content, setContent] = useState("");
  const [person_cnt, setPersonCnt] = useState(1);
  const [deadline, setDeadline] = useState("1주일 후");

  const writePost = () => {
    
    const moims_data = {
      title: moim_name,
      nickname: "닉네임",
      bookTitle: book_name,
      bookContents: book_content,
      bookUrl: book_url,
      contents: content,
      personCnt: person_cnt,
      joinUntill: deadline,
    }

    dispatch(postActions.addPostDB(moims_data));
  }

  return (
    <PostWriteWrap>
      <Grid margin="0px 0px 44px 0px">
        <Text margin="0px 0px 24px 0px" size="22px" bold>모임 이름</Text>
        <WriteInput
          _onChange={(e) => setMoimName(e.target.value)}
          placeholder="모임 이름을 입력해주세요!"
          width="30%" 
          value={moim_name}
        />
      </Grid>

      <Grid margin="0px 0px 44px 0px">
        <Text margin="0px 0px 12px 0px" size="22px" bold>책 정보</Text>
        <BookInfoWrap is_flexstart>
          <WriteInput
            width="24%"
            margin="0px 34px 0px 0px"
            _onChange={(e) => setBookName(e.target.value)}
            placeholder="책 제목"
            value={book_name}
          />
          <WriteInput
            width="30%"
            _onChange={(e) => setBookUrl(e.target.value)}
            placeholder="책 URL을 입력해주세요!"
            value={book_url}
          />
        </BookInfoWrap>
        <Upload />
      </Grid>

      <BookContentWrap >
        <BookImageWrap>
          <Image width="100%" src={preview? preview : "https://missioninfra.net/img/noimg/noimg_4x3.gif"} />
        </BookImageWrap>
        <WriteInput 
          placeholder="책의 내용을 입력해주세요!"
          _onChange={(e) => setBookContent(e.target.value)}
          multiLine rows="7" 
          value={book_content}
        />
      </BookContentWrap>
      
      <PostContentWrap >
        <Text margin="0px 0px 12px 0px" size="22px" bold>모집 내용</Text>
        <SelectWrap>
          <Deadline _onChange={(e) => {
            setDeadline(e.target.value);
            console.log(e.target.value);
          }} />
          <WriteSelect _onChange={(e) => {
            setPersonCnt(e.target.value);
            console.log(e.target.value);
          }} />
        </SelectWrap>
        <WriteInput
          margin="0px 0px 12px 0px"
          _onChange={(e) => setContent(e.target.value)}
          multiLine
          row="8"
          placeholder="모임 내용을 입력해주세요!" 
          value={content}
        />
      </PostContentWrap>
      <PostButtonWrap>
        <Button
          width="20%"
          margin="0px 12px 0px 0px"
          _onClick={writePost}
        >
          게시물 작성
        </Button>
        <Button
          width="20%"
          _onClick={() => {
            history.replace('/');
          }}
        >
          취소
        </Button>
      </PostButtonWrap>
    </PostWriteWrap>
  );
};

const PostWriteWrap = styled.div`

`;  

const BookInfoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BookContentWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BookImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  margin-bottom: 44px;
  width: "240px";
  object-fit: contain;
`;

const PostContentWrap = styled.div`

`;

const PostButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SelectWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default PostWrite;