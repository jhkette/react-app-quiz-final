import React from "react";
import styled from "styled-components";

const Footer = styled.div`
background-color: #242424
width: 100%;
height: 10rem;

 `;

const CenterBar = styled.div`
  width: 50rem;
  margin: auto;
  display: flex;
  p {
    font-size: 1rem;
    color: white;
    margin-top: 2.5rem;
  }
  a {
    color: white;
  }
`;
const header = props => {
  return (
    <Footer>
      <CenterBar>
        <p>
          This quiz retrieves it's question from an api from{" "}
          <a href="https://opentdb.com/">https://opentdb.com/</a>
        </p>
      </CenterBar>
    </Footer>
  );
};

export default header;
