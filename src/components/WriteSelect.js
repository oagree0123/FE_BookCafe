import React from 'react';
import styled from 'styled-components';

import { Text } from "../elements"

const WriteSelect = (props) => {
  const {_onChange} = props;

  return (
    <SelectWrap>
      <Text margin="0px 12px 0px 0px">모집인원</Text>
      <ElSelect onChange={_onChange}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </ElSelect>
    </SelectWrap>
  );
};

WriteSelect.defalutProps = {
  _onChange: () => {},
}

const SelectWrap = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const ElSelect = styled.select`
  width: 40px;
`;

export default WriteSelect;