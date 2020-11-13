import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
`;

export function UnsplashImg({ img }) {
  return (
    <>
      <Img src={img.img} alt="" />
    </>
  );
}
