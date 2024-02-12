import React from 'react';
import styled from "styled-components";
import ContentSwitcher from "@components/Modal/ContentSwitcher";


const ButtonsWrapper = styled.div`
   display: flex;
    justify-content: center;
    gap: 15px;
`;

const ContentButtons = ({buttons}) => {
  return (
    <ButtonsWrapper>
      {buttons.length && buttons.map((button, index) => (
        <ContentSwitcher
            key={`modal_buttons_${index}`}
            id={`modal_buttons_${index}`}
            content={button}
        />
      ))}
    </ButtonsWrapper>
  );
};

export default ContentButtons;