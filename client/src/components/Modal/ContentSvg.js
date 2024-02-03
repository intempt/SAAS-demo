import React from 'react';
import styled from "styled-components";

const Svg = ({html, ...others}) => {
  return <svg
    dangerouslySetInnerHTML={{__html: html}}
    {...others}
  />
}

const StyledSvg = styled(Svg)`

`;

const ContentSvg = ({html, width, height, ...others}) => {
  return (
    <>
      <StyledSvg
      html={html}
      width={width}
      height={height}
      {...others}
      />
    </>
  );
};

export default ContentSvg;