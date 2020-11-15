import React, { useEffect, useState } from "react";
import "./results.css";

import { useLocation, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

import { getPhotos } from "../../service/getData";
import { exttractImgs } from "../../service/utils";
import { UnsplashImg } from "../../components/UnsplashImg/UnsplashImg";
import { Loader } from "../../components/Loader/Loader";

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

export function Results() {
  const location = useLocation();
  const history = useHistory();
  const query = location.query;
  const [value, setValue] = useState(query);
  const [unsplashPhotos, setUnsplashPhotos] = useState([]);
  const [hasMoreItem, setHasMoreItem] = useState(true);
  const [page, setPage] = useState(1);

  if (!query) {
    history.push("/");
  }

  const getData = (query) => {
    getPhotos(query).then((data) => {
      const photos = data.results.map((item) => {
        return exttractImgs(item);
      });
      setUnsplashPhotos(photos);
      setHasMoreItem(true);
    });
  };

  useEffect(() => {
    getData(query);
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setUnsplashPhotos([]);
    console.log(unsplashPhotos);
    console.log(value);
    getData(value);
  };

  const fetchPhotos = () => {
    setPage(page + 1);
    getPhotos(value, page + 1).then((data) => {
      if (data.results) {
        console.log(data.results);
        const photos = data.results.map((item) => {
          return exttractImgs(item);
        });
        setUnsplashPhotos([...unsplashPhotos, ...photos]);
      } else {
        setHasMoreItem(false);
      }
    });
    console.log(unsplashPhotos);
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

        <div className="similar-queries">
          <span className="similar-query">Beach</span>
          <span className="similar-query">Island</span>
          <span className="similar-query">USA</span>
        </div>

        {unsplashPhotos ? (
          <InfiniteScroll
            dataLength={unsplashPhotos.length}
            next={fetchPhotos}
            hasMore={hasMoreItem}
            loader={<Loader />}
            endMessage={
              <p className="text-center">
                <b>No more results.</b>
              </p>
            }
          >
            <WrapperImages>
              {unsplashPhotos.map((img) => {
                return <UnsplashImg key={img.id} img={img} />;
              })}
            </WrapperImages>
          </InfiniteScroll>
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
}
