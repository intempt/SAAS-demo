import React from 'react';
import styled from "styled-components";
import ContentSwitcher from "@components/Modal/ContentSwitcher";

const BodyWrapper = styled.div`
    padding: 32px;
    padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

const ModalBody = ({contentConfig = []}) => {
  return (
    <BodyWrapper>
      {contentConfig.length && contentConfig.map((content, index) => (
        <ContentSwitcher
            key={`modal_body_${index}`}
            id={`modal_body_${index}`}
            content={content}
        />
      ))}
    </BodyWrapper>
  );
};

export default ModalBody;