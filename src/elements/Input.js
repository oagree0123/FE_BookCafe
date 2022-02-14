import React from 'react';
import styled from 'styled-components';

import { Text, Grid } from './index';

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value, is_submit, onSubmit, is_width, margin } = props;

  const styles = {
    is_width: is_width,
    margin: margin,
  };

  if(multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          {...styles} 
          rows={10}
          value={value}
          placeholder={placeholder} 
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput 
          {...styles}
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
          <ElInput type={type} placeholder={placeholder} onChange={_onChange}/>
        )}
      </Grid>
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
  is_width: false,
  margin: false,
}

const ElTextarea = styled.textarea`
  ${(props) => props.margin ? `margin: ${props.margin};` : ""}
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  ${(props) => props.margin ? `margin: ${props.margin};` : ""}
  ${(props) => props.is_width ? `width: ${props.is_width};` : "width: 100%;"}
  border: 1px solid #212121;
  width: ${(props) => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;