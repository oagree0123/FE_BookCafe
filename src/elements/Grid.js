import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const { is_flex, is_left, is_right, width, margin, padding, bg, children, center, _onClick, is_cursor, is_justify, is_flexend, is_flexstart, relative } = props;

  const styles = {
    is_flex: is_flex,
    is_flexstart: is_flexstart,
    is_flexend: is_flexend,
    is_left: is_left,
    is_right: is_right,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    is_cursor: is_cursor,
    is_justify: is_justify,
    relative: relative,
  };

  return (
    <GridBox {...styles} onClick={_onClick}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  is_flexstart: false,
  is_flexend: false,
  is_left: false,
  is_right: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
  is_cursor: false,
  is_justify: false,
  relative:false,
};

const GridBox = styled.div`
  width: ${(props) => (props.width)};
  height: 100%;
  box-sizing: border-box;
  ${(props) => props.relative ? `position: relative;` : ""}
  ${(props) => props.padding ? `padding: ${props.padding};` : ""}
  ${(props) => props.margin ? `margin: ${props.margin};` : ""}
  ${(props) => props.bg ? `background-color: ${props.bg};` : ""}
  ${(props) => 
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => 
    props.is_flexstart
      ? `display: flex; align-items: center; justify-content: flex-start; `
      : ""}
  ${(props) => 
    props.is_flexend
      ? `display: flex; align-items: center; justify-content: flex-end; `
      : ""}
  ${(props) => 
    props.is_justify
      ? `display: flex; align-items: center; justify-content: ${props.is_justify}; `
      : ""}
  ${(props) => props.center ? `text-align: center;` : ""}
  ${(props) => props.is_cursor ? `cursor: pointer;` : ""}
  flex-wrap: wrap;
`;

export default Grid;