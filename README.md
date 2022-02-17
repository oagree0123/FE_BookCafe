# Book Cafe (Front-End)

<img width="50%" alt="thumb" src="https://user-images.githubusercontent.com/90660499/154438250-2e527d48-4999-44e3-b6bf-7dcd63c19ae3.jpg"> <img width="49%" alt="preview" src="https://user-images.githubusercontent.com/90660499/154441036-df6c4164-8ec1-4e89-ba47-3989b5e6bfd3.png">
<br></br>

><p>여러 사람들과 책을 같이 읽고 토론 하고 싶을 때 모임을 만들어봐요. </p>
><p>모임 마감 일자, 모임 인원을 설정할 수 있어요. 마이페이지에서는 내가 참여한 모임을 확인 할 수 있어요.</p>
<br></br>
### 🗓 프로젝트 기간
- 2022년 2월 11일 ~ 2022년 2월 17일
<br></br>

## 🎈 LINK
- 🎥 유튜브 링크 : https://youtu.be/2-U77XR8JBM


- 📔 노션 링크 : https://www.notion.so/56c39e3254f2440b9152488e39535158
<br></br>

## 👥 팀원
- [Front-End]: [오예준](https://github.com/oagree0123), [김재민](https://github.com/suchan0), [지정환](https://github.com/jeonghwanJay)
- [Back-End]: [박유선](https://github.com/pyuseon), [나경운](https://github.com/kyungwoon), [박정희](https://github.com/P-jeong-hee/mini)
<br></br>
[Back-End Github]: https://github.com/pyuseon/bookCafe_BE
<br></br>

## 🛠 Tech Stack
- Frontend Tech Stack
  - React.js
  - Redux
<br></br>
- Backend Tech Stack
  - Spring
  - MySQL
  - JWT
<br></br>
- Other
  - Firebase Storage(Image Upload)
  
<br></br>

## 📖 와이어프레임
<img width="80%" alt="wireframe" src="https://user-images.githubusercontent.com/90660499/154443494-628483cd-a383-4547-a1be-d348e2b46637.png">
<br></br>

## 📜 ER 다이어그램
<img width="70%" alt="ERD" src="https://user-images.githubusercontent.com/90660499/154444034-65cbdc86-1804-4b85-8ae0-d649015800b1.png">
<br></br>

## 🔨 API 설계
    | 페이지 | 기능 | Method | URL | Request | Response |
    | --- | --- | --- | --- | --- | --- |
    | 메인페이지 | 게시글 조회 | GET | /home |  | \[<br/>{'article_id': article_id,<br/>"username" : username,<br/> 'type': type, <br/>'nickname': nickname,<br/> 'title': title,<br/> 'createDate': createDate},<br/>\] | 
    | 작성페이지 | 게시글 작성 | POST | /api/article | {"type": type, <br/>"title": title, <br/>"content": content} |  |
    | 상세페이지 | 게시글 수정 | PUT | /api/article/{article_id} | {"title": title,<br/> "content": content} |  |    
    |  | 게시글 상세 | GET | /article/{article_id} |  | {'article_id': article_id, <br/>'type': type, <br/>'nickname': nickname, <br/>'title': title, <br/>'content': content, <br/>'createDate': createDate, <br/>'greenCount': greenCount, <br/>'redCount': redCount} | |
    |  | 게시글 삭제 | DELETE | /api/article/{article_id} |  |  |
    |  | 그린라이트 | POST | /api/article/{article_id}/green |  |  |
    |  | 레드라이트 | POST | /api/article/{article_id}/red |  |  |
    |  | 댓글 좋아요 | POST | /api/comment/{comment_id}/like |  |  |
    |  | 댓글조회 | GET | /api/{article_id}/comment |  | [<br/>{'comment_id': comment_id,<br/>'nickname': nickname,<br/>'comment': comment,<br/>'likeCommentCount': likeCount,<br/>'createDate': createDate},<br/>] |  |
    |  | 댓글 작성 | POST | /api/commnet/{article_id} | {"comment" : comment} |  |
    |  | 댓글 삭제 | DELETE | /api/commnet/{comment_id} |  |  |
    | 로그인 |  | POST | /user/signin | {"username": username,<br/> "password" : password} |  | 
    | 로그아웃 |  |  |  |  |  |  |
    | 회원가입 | 회원가입 | POST | /user/signup | {"username" : username,<br/>"nickname" : nickname,<br/>"password" : password,<br/>"password2" : password2} |  | 


## ✨ 핵심기능
* 로그인 페이지  
  -JWT 토큰 이용하여 로그인
  
* 회원가입 페이지   
  
* 메인 페이지  
  
* 게시글 상세 페이지  

- 로그인, 회원가입
  - 
 
- 독서 모임 모집
  - 모임 생성, 수정, 삭제
  - 모임 댓글, 수정, 삭제
  - 모임 참여, 참여 취소
  - 마이페이지(참여한 모임 목록)

<br></br>
<br></br>
<br></br>
