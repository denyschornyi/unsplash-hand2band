import React from "react";
import "./results.css";

import { useLocation, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

export function Results() {
  const location = useLocation();
  const history = useHistory();

  const query = location.query;

  if (!query) {
    history.push("/");
  }

  return (
    <div>
      <Container>Results</Container>
    </div>
  );
}
