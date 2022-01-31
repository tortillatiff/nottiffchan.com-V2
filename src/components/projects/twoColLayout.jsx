import React from "react";
import styled from "styled-components";

export default function TwoColLayout(props) {
  const getPercentWidth = (ratioWidth) => {
    return (ratioWidth * 10).toString() + "%";
  };

  return (
    <Row style={{ alignItems: props.alignCenter ? "center" : "start" }}>
      <Column width={getPercentWidth(props.colOneWidth)}>{props.colOne}</Column>
      <Column width={getPercentWidth(10 - props.colOneWidth)}>
        {props.colTwo}
      </Column>
    </Row>
  );
}

const Row = styled.div`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px 0;
  }
`;

const Column = styled.div`
  flex-shrink: 0;
  flex-direction: column;
  padding: 0 16px;

  @media (min-width: 768px) {
    width: calc(${(props) => props.width} - 32px);
  }
`;
