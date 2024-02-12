import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
`;

const CrossInCircle = () => (
    <Svg fill="currentColor" viewBox="0 0 25 24">
      <path
        d="M15.5595 8.63959C15.8524 8.93249 15.8524 9.40736 15.5595 9.70025L13.2598 11.9999L15.5595 14.2996C15.8524 14.5925 15.8524 15.0674 15.5595 15.3603C15.2666 15.6531 14.7917 15.6531 14.4988 15.3603L12.1991 13.0606L9.89947 15.3603C9.60658 15.6531 9.1317 15.6531 8.83881 15.3603C8.54592 15.0674 8.54592 14.5925 8.83881 14.2996L11.1385 11.9999L8.83881 9.70025C8.54592 9.40736 8.54592 8.93249 8.83881 8.63959C9.1317 8.3467 9.60658 8.3467 9.89947 8.63959L12.1991 10.9393L14.4988 8.63959C14.7917 8.3467 15.2666 8.3467 15.5595 8.63959Z"/>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M1.44922 12C1.44922 6.08579 6.28501 1.25 12.1992 1.25C18.1134 1.25 22.9492 6.08579 22.9492 12C22.9492 17.9142 18.1134 22.75 12.1992 22.75C6.28501 22.75 1.44922 17.9142 1.44922 12ZM12.1992 2.75C7.11343 2.75 2.94922 6.91421 2.94922 12C2.94922 17.0858 7.11343 21.25 12.1992 21.25C17.285 21.25 21.4492 17.0858 21.4492 12C21.4492 6.91421 17.285 2.75 12.1992 2.75Z"/>
    </Svg>
  )
;

export default CrossInCircle;