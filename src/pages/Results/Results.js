import React, { useEffect, useState } from "react";
import "./results.css";

import { useLocation, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

export function Results() {
  const location = useLocation();
  const history = useHistory();
  const query = location.query;
  const [value, setValue] = useState(query);

  if (!query) {
    history.push("/");
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
  };

  return (
    <div>
      <Container>
        <div className="results-header">
          <h2 className="results-header-title">{query}</h2>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="#767676"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search free high-resolution photos"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
      </Container>
    </div>
  );
}
