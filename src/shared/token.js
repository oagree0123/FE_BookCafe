const getToken = () => {
    const token = sessionStorage.getItem("token");
  
    if (token) {
      return token;
    } else {
      return null;
    }
  };
  
  const setToken = (token) => {
    if (!token) {
      return false;
    }
    sessionStorage.setItem("token", token);
  };
  
  const delToken = () => {
    sessionStorage.removeItem("token");
  };
  
  export { getToken, setToken, delToken };