import React from 'react';
import { useSelector } from 'react-redux';

const Permit = (props) => {
  const is_login = useSelector(state => state.user.isLogin);

  if(is_login) {
    return (
      <>
        {props.children}  
      </>
    );
  }

  return null;
};

export default Permit;