import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { Grid, Text, WriteInput, Button, Image } from '../elements';
import Deadline from '../components/Deadline';
import WriteSelect from '../components/WriteSelect';
import Upload from '../shared/Upload';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/image';

const PostWrite = (props) => {
  const {history} = props;
  let hello;
  const dispatch = useDispatch();

  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  let _post = is_edit ? post_list.find((p) => parseInt(p.moimId) === parseInt(post_id)) : null;

  const [moim_name, setMoimName] = useState(_post ? _post.title : "");
  const [book_name, setBookName] = useState(_post ? _post.bookTitle : "");
  const [book_url, setBookUrl] = useState(_post ? _post.bookUrl :"");
  const [book_content, setBookContent] = useState(_post ? _post.bookContents :"");
  const [content, setContent] = useState(_post ? _post.contents :"");
  const [person_cnt, setPersonCnt] = useState(1);
  const [deadline, setDeadline] = useState(moment().add('7',"d").format("YYYY-MM-DD"));

  const writePost = () => {
    const moims_data = {
      title: moim_name,
      contents: content,
      nickname: "닉네임",
      personCnt: person_cnt,
      bookTitle: book_name,
      bookContents: book_content,
      joinUntil: deadline,
      bookUrl: book_url,
    }

    dispatch(postActions.addPostDB(moims_data));
  }

  const editPost = () => {
    const moims_data = {
      title: moim_name,
      contents: content,
      nickname: "닉네임",
      personCnt: person_cnt,
      bookTitle: book_name,
      bookContents: book_content,
      joinUntil: deadline,
      bookUrl: book_url,
      imageUrl: preview,
    }

    dispatch(postActions.editPostDB(post_id, moims_data));
  }

  useEffect(() => {
    if(is_edit && !_post) {
      history.goBack();
      return;
    }

    if(is_edit) {
      dispatch(imageActions.setPreview(_post.imageUrl));
    }
  }, [])

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
            let addDate = e.target.value
            let new_Date = moment().add(`${addDate}`,"d").format("YYYY-MM-DD")
            setDeadline(new_Date);
            console.log(moment().add(`${addDate}`,"d").format("YYYY-MM-DD")); 
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
        {is_edit ?
          <Button
            width="20%"
            margin="0px 12px 0px 0px"
            _onClick={editPost}
          >
            수정 하기
          </Button>
          :<Button
            width="20%"
            margin="0px 12px 0px 0px"
            _onClick={writePost}
          >
            작성 하기
          </Button>
        }
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