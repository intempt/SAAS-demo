import React from 'react';
import styled from "styled-components";
import {colors} from "../../styles/theme";
import CrossInCircle from "@components/App/svgs/crossInCircle";

const HearerWrapper = styled.div`
    padding: 32px 32px 32px 32px;
    border-bottom: 1px solid #E8E9ED;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0;
    margin: 0;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.indigo700};
    cursor: pointer;
    justify-self: flex-end;

    &:hover {
        color: ${colors.indigo500};
    }
`;

const ModalHeader = ({onClose, title}) => {
  return (
    <>
      <HearerWrapper>
        {title ? (
          <HeaderTitle>{title}</HeaderTitle>
        ) : (<div/>)}
        {onClose && (
          <Button onClick={onClose}>
            <CrossInCircle/>
          </Button>
        )}
      </HearerWrapper>
    </>
  );
};

export default ModalHeader;