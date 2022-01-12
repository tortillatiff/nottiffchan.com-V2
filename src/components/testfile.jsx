import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Testfile() {
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const sections = [
    {
      content: "SSection 1- background color for main red",
      color: "red",
    },
    {
      content: "SSection 2- background color for main blue",
      color: "blue",
    },
    {
      content: "SSection 3- background color for main aqua",
      color: "aqua",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    refs.current.forEach((el, index) => {
      var col = el.attributes.color.value;
      gsap.to(el, {
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => gsap.to("main", { backgroundColor: col }),
          onLeave: () => gsap.to("main", { backgroundColor: "white" }),
          onLeaveBack: () => gsap.to("main", { backgroundColor: "white" }),
          onEnterBack: () => gsap.to("main", { backgroundColor: col }),
          //   markers: true,
        },
      });
    });
  }, []);

  return (
    <main style={{ margin: "0", height: "600vh" }}>
      {sections.map(({ content, color }) => (
        <SSection key={color} ref={addToRefs} color={color}>
          <h2>{content}</h2>
        </SSection>
      ))}
    </main>
  );
}

const SSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
`;
