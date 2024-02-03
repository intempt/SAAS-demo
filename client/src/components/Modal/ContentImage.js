import React from 'react';
import styled from "styled-components";

const StyledImage = styled.img`

`;

const ContentImage = ({ src, alt, width, height }) => {
  return (
    <>
      <StyledImage
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </>
  );
};

export default ContentImage;