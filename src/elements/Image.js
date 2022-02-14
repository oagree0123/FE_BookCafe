import React from 'react';

import styled from 'styled-components';

const Image = (props) => {

  const { src, width, margin } = props;

  const styles = {
    src: src,
    width: width,
    margin: margin,
  }

  return (
    <AspectInner src={props.src} {...styles}></AspectInner>
  );
};

Image.defaultProps = {
  src: "https://media.istockphoto.com/photos/dog-puppy-on-garden-picture-id1142412984?k=20&m=1142412984&s=170667a&w=0&h=VLomTUSZwXDrVauJrpiyMboe0Q7lUYYiMO89sFy2dgY=",
  width: "100%",
  margin: 0,
};

const AspectInner = styled.img`
  width: ${(props) => (props.width)};
  margin: ${(props) => (props.margin)};
  min-height: 180px;
  max-height: 224px;
  display: block;
  position: relative;
  overflow: hidden;
  object-fit: cover;
`;

export default Image;