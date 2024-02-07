import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const ButtonLinkWrapper = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const PrimaryButton = styled.button`
    padding: 10px 24px 10px 24px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    background: #6239F5;
    border: 1px solid #6239F5;
    transition: background-color 0.3s ease-in-out;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0;
    text-align: center;

    &:hover {
        background: #4625ba;
    }
`;

const OutlinedButton = styled.button`
    padding: 10px 24px 10px 24px;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #E8E9ED;
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0;
    text-align: center;

    &:hover {
        border-color: #c8cacc;
        color: #030A19;
    }
`;

const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  OUTLINED: 'outlined'
}

const ContentButton = ({variant = BUTTON_VARIANTS.PRIMARY, url, action, text}) => {
  const drawButton = () => {
    let ButtonComponent = PrimaryButton

    if (variant === BUTTON_VARIANTS.OUTLINED) {
      ButtonComponent = OutlinedButton
    }

    return <ButtonComponent {...(action ? {onClick: action} : {})}>{text}</ButtonComponent>
  }
  return (
    <div>
      {url
        ?  (
              <Link href={url} passHref>
                <ButtonLinkWrapper>{drawButton()}</ButtonLinkWrapper>
              </Link>
          )
        : drawButton()
      }
    </div>
  );
};

export default ContentButton;