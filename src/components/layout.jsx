import React from "react";
import Head from "../components/head";
import styled from "styled-components";
import Nav from "../components/nav";
import Cursor from "../components/customCursor";
import Footer from "./footer";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import useWindowSize from "../hooks/useWindowSize";
import Menu from "./menu";

const StyledContent = styled.div`
  position: relative;
  background-color: var(--bg-color);
  z-index: 99;
  margin-bottom: 100vh;
  * {
    text-decoration: none;
    cursor: none;
  }
`;

const Layout = ({ addAnimation, children }) => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const size = useWindowSize();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <>
      <Head image="/banner.png" />
      <Cursor />

      <div id="root">
        {size.width && (
          <>
            <StyledContent>
              {size.width > 768 ? (
                <Nav
                  onCursor={onCursor}
                  addAnimation={addAnimation}
                  index={0}
                />
              ) : (
                <Menu />
              )}
              <div id="content">{children}</div>
            </StyledContent>
            <Footer onCursor={onCursor} />
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
