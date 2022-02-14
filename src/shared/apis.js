import axios from "axios";

const USER_TOKEN = sessionStorage.getItem("X-AUTH-TOKEN");

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.124.130.158/",
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${USER_TOKEN}`;
    return config;
  },
  function (error) {
    console.log("err");
    return Promise.reject(error);
  }
);

export const apis = {
  // 회원가입 요청
  signUp: (userInfo) => instance.post("user/signup", userInfo),
  // 로그인
  login: (data) => instance.post("user/login",  { username: data.username, password: data.password, }),
  // 로그인 체크
  loginCheck: () => instance.get("/api/users/:userUid/validation"),

  // // 게시물 불러오기
  // getPost: () => instance.get("/", {}),
  // // 게시물 작성하기
  // addPost: (contents) => instance.post("/api/posts", contents),
  // // 게시물 수정하기
  // editPost: (id, content) => instance.put(`/api/posts/${id}`, content),
  // // 게시물 삭제하기
  // deletePost: (id) => instance.delete(`/api/posts/${id}`),
  // //게시물 상세페이지 불러오기
  // getPostDetail: (id) => instance.get(`/posts/${id}`),

  // // 댓글 추가
  // addComment: (comment, id) =>
  //   instance.post(`/api/posts/${id}/comments/`, comment),
  // // 댓글 삭제
  // deleteComment: (postUid, commentUid) =>
  //   instance.delete(`/api/posts/${postUid}/comments/${commentUid}`),

  // // 좋아요 추가
  // addLike: (id) => instance.post(`/api/likes/${id}`),
  // // 좋아요 취소
  // deleteLike: (id) => instance.delete(`/api/likes/${id}`),

  // // 모임 참석
  // attendPost: (postUid, userUid) =>
  //   instance.post(`/api/posts/${postUid}/${userUid}`),

  // // 모임 취소
  // notAttendPost: (postUid, userUid) =>
  //   instance.delete(`/api/posts/${postUid}/${userUid}`),
  // // 마이페이지 불러오기
  // getMyPage: (id) => instance.get(`/users/${id}`),
};

export default apis;


