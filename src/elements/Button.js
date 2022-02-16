import React, { Children } from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { text, _onClick, children, margin, width, padding, is_float, bg, fcolor } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    bg: bg,
    fcolor: fcolor,
  }

  if(is_float) {
    return (
      <>
        <FloatButton onClick={_onClick} >
          <FbtnText>
            {text? text : children}
          </FbtnText>
        </FloatButton>
      </>
    );
  }

  return (
    <>
      <ElButton {...styles} onClick={_onClick}>{text? text : children}</ElButton>
    </>
  );
};

Button.defaultProps = {
  text: false,
  childred: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  padding: '12px 0px',
  width: '100%',
  bg: false,
  fcolor: false,
}

const ElButton = styled.button`
  width: ${(props) => props.width};
  ${(props) => (props.fcolor? `color: ${props.color};` : 'color: #000;')};
  ${(props) => (props.bg? `background-color: ${props.bg};` : 'background-color: #fff;')};
  cursor: pointer;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: 1px solid #c9c9c9;
  ${(props) => (props.margin? `margin: ${props.margin};` : '')};
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #c9c9c9;
`;

const FloatButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  width: 50px;
  height: 50px;
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  background-color: #212121;
  border: none;
  border-radius: 50px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: pointer;
`;

const FbtnText = styled.p`
  position: relative;
  top: -40px;
`;


export default Button;