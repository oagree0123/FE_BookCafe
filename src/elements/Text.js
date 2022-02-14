import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {bold, color, size, children, margin, _onClick, center, is_cursor, is_badge, is_badge2, } = props;

  const styles = {
    margin: margin,
    bold: bold,
    color: color,
    size: size,
    center: center,
    is_cursor: is_cursor,
  }
  if(is_badge) {
    return (
      <Badge>{children}</Badge>
    );
  }
  if(is_badge2) {
    return (
      <BadgeTwo>{children}</BadgeTwo>
    );
  }

  return (
    <P {...styles} onClick={_onClick}>
      { children }
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '14px',
  margin: 0,
  _onClick: () => {},
  center: false,
  is_cursor: false,
  is_badge: false,
  is_badge2: false,
}

const Badge = styled.p`
  position: absolute;
  top: -28px;
  right: 18px;
  background-color: #eee;
`;

const BadgeTwo = styled.p`
  position: absolute;
  top: 0px;
  right: 18px;
  background-color: #eee;
`;

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  margin: ${(props) => props.margin}
  ${(props) => (props.center? `text-align: center;` : '')}
  ${(props) => (props.is_cursor? `cursor: pointer;` : '')}
`;

export default Text;