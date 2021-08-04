import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import API from "../helpers/axios";
import Container from "../Conteiner/Container";
import Pagination from "../Pagination/Pagination";

const images = ["img1", "img2", "img3", "img4"];

export default function KinoFx() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);

  function requestPopular() {
    API.get("movie/popular?api_key=5cb211b4a84d1af00969d894b214726c").then(
      (response) => {
        setData(response.data.results);
        console.log(response);
      }
    );
  }

  useEffect(() => {
    requestPopular();
  }, []);

  function requestBySearch() {
    API.get(
      `search/movie?api_key=5cb211b4a84d1af00969d894b214726c&query=${search}`
    ).then((response) => {
      setData(response.data.results);
    });
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    search ? requestBySearch() : requestPopular();
  }, [search]);

  function getBgImg() {
    const id = setInterval(() => {
      setIndex((prevIndex) => {
        return prevIndex === 3 ? 0 : prevIndex + 1;
      });
    }, 5000);
    return id;
  }

  useEffect(() => {
    getBgImg();
  }, []);

  return (
    <div className={`img ${images[index]}`}>
      <div className="w-9/12 m-auto">
        <div className="pt-80 ">
          <Header handleChange={handleChange} />
        </div>
        <div className="pt-10 pb-10 flex">
          <Container data={data} />
        </div>
        <div className="flex bg-gray-500 bg-opacity-80">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
