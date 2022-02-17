# Book Cafe (Front-End)

<img width="50%" alt="thumb" src="https://user-images.githubusercontent.com/90660499/154438250-2e527d48-4999-44e3-b6bf-7dcd63c19ae3.jpg"> <img width="49%" alt="preview" src="https://user-images.githubusercontent.com/90660499/154441036-df6c4164-8ec1-4e89-ba47-3989b5e6bfd3.png">
<br />

><p>여러 사람들과 책을 같이 읽고 토론 하고 싶을 때 모임을 만들어봐요. </p>
><p>모임 마감 일자, 모임 인원을 설정할 수 있어요. 마이페이지에서는 내가 참여한 모임을 확인 할 수 있어요.</p>
<br />

### 🗓 프로젝트 기간
- 2022년 2월 11일 ~ 2022년 2월 17일
<br />

## 🎈 LINK
- 🎥 유튜브 링크 : https://youtu.be/2-U77XR8JBM


- 📔 노션 링크 : https://www.notion.so/56c39e3254f2440b9152488e39535158
<br />

## 👥 팀원
- [Front-End]: [오예준](https://github.com/oagree0123), [김재민](https://github.com/suchan0), [지정환](https://github.com/jeonghwanJay)
- [Back-End]: [박유선](https://github.com/pyuseon), [나경운](https://github.com/kyungwoon), [박정희](https://github.com/P-jeong-hee/mini)
<br></br>
[Back-End Github]: https://github.com/pyuseon/bookCafe_BE
<br />

## 🛠 Tech Stack
- Frontend Tech Stack
  - React.js
  - Redux
<br />

- Backend Tech Stack
  - Spring
  - MySQL
  - JWT
<br />

- Other
  - Firebase Storage(Image Upload)
  
<br />

## 📖 와이어프레임
<details> 
    <summary>와이어프레임 확인하기</summary>   

<img width="80%" alt="wireframe" src="https://user-images.githubusercontent.com/90660499/154443494-628483cd-a383-4547-a1be-d348e2b46637.png">
</details> 
<br />

## 📜 ER 다이어그램
<details> 
    <summary>ER 다이어그램 확인하기</summary> 

<img width="70%" alt="ERD" src="https://user-images.githubusercontent.com/90660499/154444034-65cbdc86-1804-4b85-8ae0-d649015800b1.png">
</details> 
<br />

## 🔨 API 설계
<details> 
    <summary>API 명세서 확인하기</summary>   

![image](https://user-images.githubusercontent.com/44867889/154416182-57c81828-dc0a-45b6-a189-8a0485f2f530.png)  
![image](https://user-images.githubusercontent.com/44867889/154416295-d01d95bd-fb18-4b12-97d3-7c4c25dd4417.png)  
![image](https://user-images.githubusercontent.com/44867889/154416385-6ca9fa04-575e-4f6e-8c28-b29a2be1124d.png)
![image](https://user-images.githubusercontent.com/44867889/154416417-a7bbe513-bbef-45dd-8b10-300b06659292.png)    
</details> 
<br />

## ✨ 핵심기능
* 로그인 / 회원가입  
  - JWT 토큰 이용하여 로그인
  - 이메일 형식으로 회원가입
  - 회원가입시 이메일, 닉네임 중복검사  
  
* 메인 페이지  
  - 사용자가 작성한 모임 리스트
  - 로그인시 글 작성 버튼 생성
  - 로그인시 헤더 변경
  
* 게시글 상세 페이지 
  - 글을 작성한 사용자일 때, 수정 / 삭제 가능
  - 모임 참여 / 취소(로그인시)
  - 모임 인원이 가득찰 경우 버튼 비활성화
  - 모임 기간이 마감이 되었을 시 버튼 비활성화
  - 댓글 작성(로그인시)
  - 댓글 작성한 사용자일 때, 수정 / 삭제 가능

* 마이 페이지
  - 로그인한 사용자의 닉네임
  - 사용자가 참여한 모임의 목록
 
<br />
<br />
<br />
