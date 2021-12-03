import React from 'react'
import Head from '../components/head';
import styled from 'styled-components';
import Nav from '../components/nav';
import Cursor from '../components/customCursor';
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  * {
    text-decoration: none;
    cursor: none;
  }
`;

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <>
      <Head />
      <Cursor />

      <div id="root">
        <StyledContent>
          <Nav onCursor={onCursor} />
          <div id="content">
            {children}
          </div>
        </StyledContent>
      </div>
    </>
  )
}

export default Layout
