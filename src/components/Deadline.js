import React from 'react';
import styled from 'styled-components';

import { Text } from "../elements"

const Deadline = (props) => {
  const {_onChange} = props;

  return (
    <SelectWrap>
      <Text margin="0px 12px 0px 0px">마감 일자</Text>
      <ElSelect onChange={_onChange}>
        <option value={7}>1주일 후</option>
        <option value={14}>2주일 후</option>
        <option value={21}>3주일 후</option>
        <option value={28}>4주일 후</option>
      </ElSelect>
    </SelectWrap>
  );
};

Deadline.defalutProps = {
  _onChange: () => {},
}

const SelectWrap = styled.div`
  display: flex;
  margin-right: 12px;
  margin-bottom: 12px;
`;

const ElSelect = styled.select`
  width: 84px;
`;

export default Deadline;