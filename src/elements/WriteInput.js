import React from 'react';
import styled from 'styled-components';

import { Text, Grid } from './index';

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value, is_submit, onSubmit, width, margin, size, rows, center } = props;

  const styles = {
    width: width,
    margin: margin,
    size: size,
  };

  if(multiLine) {
    return (
      <Grid margin={margin} width={width}>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          {...styles} 
          rows={rows}
          value={value}
          placeholder={placeholder} 
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput 
            {...styles}
            center={center}
            margin={margin}
            type={type} 
            placeholder={placeholder} 
            onChange={_onChange} 
            value={value} 
            onKeyPress={(e) => {
              if(e.key === "Enter") {
                onSubmit(e)}
              }
            }
           />
        ) : (
          <ElInput center={center} margin={margin} width={width} type={type} placeholder={placeholder} onChange={_onChange} value={value}/>
        )}
    </>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: "text",
  value: "",
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
  width: "100%",
  margin: 0,
  size: "14px",
  rows: 10,
  center: false,
}

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: ${(props) => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => props.margin ? `margin: ${props.margin};` : ""}
  font-size: ${(props) => props.size};
`;

const ElInput = styled.input`
  border: none;
  border-bottom: 1px solid #212121;
  width: ${(props) => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => props.margin ? `margin: ${props.margin};` : ""}
  font-size: ${(props) => props.size};
  ${(props) => props.center ? "text-align: center;" : ""}
`;

export default Input;