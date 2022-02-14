
// 아이디 형식
export const idCheck = (id) => {
  let emailreg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  return emailreg.test(id);
}

// 닉네임 형식
export const usernameCheck = (user_name) => {
  let Nickreg = /^[가-힣a-zA-Z]+$/
return Nickreg.test(user_name);
};

// 비밀번호 체크
  export const pwdCheck = (pwd_check) => {
    let pwdreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,15}$/;
    return pwdreg.test(pwd_check);
  };
  
// // 아이디 체크 함수

//   export const emailCheck = (email) => {
//   let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

//   return _reg.test(email);
// }

// 비밀번호 형식
// export const pwdCheck = (pwd_check) => {
//   let pwdreg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//   return pwdreg.test(pwd_check);
// };