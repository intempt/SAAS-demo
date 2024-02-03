import React from 'react';
import styled from "styled-components";
import ContentSwitcher from "@components/Modal/ContentSwitcher";

const BodyWrapper = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

const ModalFooter = ({contentConfig}) => {
  return (
    <BodyWrapper>
      {contentConfig.length && contentConfig.map((content, index) => (
        <ContentSwitcher id={`modal_footer_${index}`} content={content}/>
      ))}
    </BodyWrapper>
  );
};

export default ModalFooter;