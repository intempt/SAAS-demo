import React from 'react';
import styled from "styled-components";

const StyledTextVariantBig = styled.h3`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0;
    text-align: center;
    color: #030A19;
    margin: 0;
    white-space: pre-line;
`;

const StyledTextVariantNormal = styled.h4`
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    text-align: center;
    color: #030A19;
    margin: 0;
    white-space: pre-line;
`;

const StyledTextVariantSmall = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    text-align: center;
    color: #596680;
    margin: 0;
    white-space: pre-line;
`;

export const TEXT_VARIANTS = {
  BIG: 'big',
  NORMAL: 'normal',
  SMALL: 'small'
}

const ContentText = ({ text, variant = TEXT_VARIANTS.NORMAL }) => {
  return (
    <>
      {variant === TEXT_VARIANTS.BIG && (<StyledTextVariantBig>{text}</StyledTextVariantBig>)}
      {variant === TEXT_VARIANTS.NORMAL || !variant && (<StyledTextVariantNormal>{text}</StyledTextVariantNormal>)}
      {variant === TEXT_VARIANTS.SMALL && (<StyledTextVariantSmall>{text}</StyledTextVariantSmall>)}
    </>
  );
};

export default ContentText;