import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '@components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <PageWrapper>
      <div className="header" />
      <Main>
        <span role="img" aria-label="seedling">
          🌱
        </span>
      </Main>
    </PageWrapper>
  );
}
