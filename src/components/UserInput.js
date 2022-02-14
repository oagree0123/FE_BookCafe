import React, { Children } from 'react';
import styled from 'styled-components';

const UserInput = (props) => {
  const { placeholder, _onChange, type, value, is_width, margin, size, center } = props;

  const styles = {
    margin: margin,
    size: size,
  };

  return (
    <>
      <ElInput center={center} margin={margin} is_width={is_width} type={type} placeholder={placeholder} onChange={_onChange} value={value}/>
    </>
  );
};

UserInput.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: "text",
  value: "",
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
  is_width: false,
  margin: 0,
  size: "14px",
  rows: 10,
  center: false,
}

const ElInput = styled.input`
  border: 1px solid #c9c9c9;
  ${(props) => props.is_width ? `width: ${props.is_width};` : "width: 100%;"}
  padding: 12px 10px;
  box-sizing: border-box;
  ${(props) => props.margin ? `margin: ${props.margin};` : ""}
  font-size: ${(props) => props.size};
  ${(props) => props.center ? "text-align: center;" : ""}
`;

export default UserInput;