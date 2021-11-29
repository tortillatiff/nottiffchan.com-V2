import React from 'react'
import Head from '../components/head';
import styled from 'styled-components';
import Nav from '../components/nav';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
    return (
        <>
          <Head />

          <div id="root">
            <StyledContent>
              <Nav />
              <div id="content">
                {children}
              </div>
            </StyledContent>
          </div>          
        </>
    )
}

export default Layout
