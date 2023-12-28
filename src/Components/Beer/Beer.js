import React, { useEffect, useState } from "react";
import BeerCard from "../BeerCard/BeerCard";
import "./Beer.css";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";

const Beer = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const url = `https://api.punkapi.com/v2/beers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeers(data);
      });
  }, [query]);
  const handleSearch = () => {
    const filteredProducts = beers.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setBeers(filteredProducts);
  };

  return (
    <div>
      <div className="py-5">
        <PasswordGenerator />
        <div className="d-flex justify-content-between align-items-center gap-5">
          <p className="text-danger fw-bold">
            Show all products: {beers.length}
          </p>
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              placeholder="Search by name"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-danger" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <div className="card_container ">
          {beers?.slice(0, 12)?.map((item) => (
            <BeerCard item={item} key={item.id}></BeerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beer;
