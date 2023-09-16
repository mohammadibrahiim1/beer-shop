import React from "react";
import { Link } from "react-router-dom";
import "./BeerCard.css";

const BeerCard = ({ item }) => {
  // console.log(item);
  const { image_url, name, boil_volume, description, first_brewed } = item;
  const { unit, value } = boil_volume;
  return (
    <div>
      <div className="card" style={{ width: "19rem" }}>
        <img src={image_url} className="card-img-top" style={{ width: "18rem" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 80)}...</p>
          <div className="d-flex justify-content-between">
            <Link href="#" className="btn btn-danger">
              <span>{value}</span> {unit}
            </Link>
            <Link href="#" className="btn btn-warning">
              first_brewed : {first_brewed}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
