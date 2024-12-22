import React, { useState } from "react";
import "./Beer.css";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Beer = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  // const [beers, setBeers] = useState([]);

  // Fetch Function
  // const fetchBeers = async () => {
  //   const { data } = await axios.get("https://api.punkapi.com/v2/beers");
  //   return data;
  // };
  // TanStack Query to fetch data
  const {
    data,
    // isLoading, isError, error, isSuccess
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data?.products);
      return data;
    },
    onSuccess: () => {
      console.log("Data fetched successfully");
    },
    onError: (error) => {
      console.error("Error fetching data:", error.message);
    },
  });

  console.log(data);

  // const handleSearch = () => {
  //   const filteredProducts = beers.filter((item) =>
  //     item.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setBeers(filteredProducts);
  // };

  return (
    <div>
      <div className="py-5">
        <PasswordGenerator />
        <div className="d-flex justify-content-between align-items-center gap-5">
          <p className="text-danger fw-bold">
            {/* Show all products: {products?.length} */}
          </p>
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              placeholder="Search by name"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn btn-danger"
              // onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="card_container">
          {data?.products?.map((item) => (
            <p>{item?.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beer;
