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
  // TODO: dangerouslySetInnerHTML={{ __html: text }} - This should be sanitized, just for demo purposes
  /**
   * Example
   * import DOMPurify from 'dompurify';
   *
   * const SafeContent = ({ content }) => {
   *   const sanitizedContent = DOMPurify.sanitize(content);
   *   return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
   * };
   *
   * // Usage in your component
   * <SafeContent content={formattedText} />
   */

  return (
    <>
      {variant === TEXT_VARIANTS.BIG && (<StyledTextVariantBig dangerouslySetInnerHTML={{ __html: text }}/>)}
      {variant === TEXT_VARIANTS.NORMAL || !variant && (<StyledTextVariantNormal dangerouslySetInnerHTML={{ __html: text }}/>)}
      {variant === TEXT_VARIANTS.SMALL && (<StyledTextVariantSmall dangerouslySetInnerHTML={{ __html: text }}/>)}
    </>
  );
};

export default ContentText;