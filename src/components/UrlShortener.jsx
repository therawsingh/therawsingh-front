"use strict";
import React, { useRef, useState } from "react";
import axios from "axios";

const UrlShortener = () => {
  //URL logic start here

  const handleURLChange = (e) => {
    setLongURL(e.target.value);
  };

  const handleShortURLClick = () => {
    if (shortURL) {
      navigator.clipboard
        .writeText(shortURL)
        .then(() => {
          console.log("URL copied to clipboard:", shortURL);
        })
        .catch((error) => {
          console.error("Failed to copy URL to clipboard:", error);
        });
    }
  };

  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiShortenUrl = `http://localhost:8080/tools/url/shorten`;

    axios
      .post(apiShortenUrl, longURL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const shortURL = response.data;
        setShortURL(shortURL);
        console.error(longURL);
        console.error(shortURL);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="relative flex h-96 w-52 lg:h-90 lg:w-80 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#080808] to-[#040404] px-8 py-16 shadow-sm shadow-[#ee2400]">
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
      <div className="flex flex-col align-baseline justify-between w-full text-center">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pb-2 text-[#ee2400]">URL Shortener</h2>

          <input
            className="Input text-black text-center appearance-none mb-4 w-full"
            type="text"
            required={true}
            placeholder="Enter URL"
            onChange={handleURLChange}
            value={longURL}
          />
          <p className="pb-2">Shortened URL</p>

          <input
            className="Input text-black text-center appearance-none mb-4 w-full sm:text-base hover:cursor-pointer"
            title={shortURL}
            type="text"
            readOnly
            value={shortURL}
            onClick={handleShortURLClick}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className=" mx-auto mt-1 mb-2 p-1 pl-2 pr-2 border border-[#ee2400] hover:bg-[#ee2400]"
              onChange={setLongURL}
            >
              Shorten URL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UrlShortener;
