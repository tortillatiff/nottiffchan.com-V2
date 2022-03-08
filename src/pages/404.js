import * as React from "react";
import sadGirl from "../assets/sadgirl.png";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100vh",
};

// markup
const NotFoundPage = () => {
  return (
    // <main style={pageStyles}>
    //   <title>Not found</title>
    //   <h1 style={headingStyles}>Page not found</h1>
    //   <p style={paragraphStyles}>
    //     Sorry{" "}
    //     <span role="img" aria-label="Pensive emoji">
    //       😔
    //     </span>{" "}
    //     we couldn’t find what you were looking for.
    //     <br />
    //     {process.env.NODE_ENV === "development" ? (
    //       <>
    //         <br />
    //         Try creating a page in <code style={codeStyles}>src/pages/</code>.
    //         <br />
    //       </>
    //     ) : null}
    //     <br />
    //     <Link to="/">Go home</Link>.
    //   </p>
    // </main>
    <main style={mainStyle}>
      <img src={sadGirl} style={{ width: "180px" }} alt="A sad girl" />
      <h1 className="purple-font">Oops...</h1>
      <p>This page doesn't exist.</p>
      <AniLink paintDrip hex="#5F3962" to="/">
        <button className="tiff-btn btn-pri">Go back</button>
      </AniLink>
    </main>
  );
};

export default NotFoundPage;
