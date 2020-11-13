import React from "react";
import "./results.css";

import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";

export function Results() {
  const location = useLocation();
  console.log(location.query);

  return (
    <div>
      <Container>Results</Container>
    </div>
  );
}
