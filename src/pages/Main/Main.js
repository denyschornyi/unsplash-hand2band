import React, { useState, useEffect } from "react";
import "./main.css";

import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";

import { getRandomPhoto } from "../../service/getData";

export function Main() {
  const [randomPhoto, setRandomPhoto] = useState("");
  const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    // getRandomPhoto().then((img) => {
    //   setRandomPhoto(img.urls.full);
    // });
  }, []);

  let randomPhotoElement = <div className="main-img"></div>;

  if (!!randomPhoto) {
    randomPhotoElement = (
      <div className="main-img">
        <img src={randomPhoto} alt="" />
      </div>
    );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    history.push({ pathname: "/results", query });
  };
  return (
    <div className="main ">
      {randomPhotoElement}
      <div className="main-content">
        <Container>
          <div className="main-searh">
            <div className="main-title">
              <h1>Unsplash</h1>
            </div>
            <p className="main-subtitle">
              The internet’s source of freely-usable images.
            </p>
            <p className="main-subtitle">Powered by creators everywhere.</p>
            <div className="form-search">
              <form onSubmit={(e) => onFormSubmit(e)}>
                <div className="form-input">
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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
