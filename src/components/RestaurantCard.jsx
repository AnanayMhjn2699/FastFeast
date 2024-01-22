import React from "react";
import { CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="w-[250px] p-4 m-4 bg-teal-100 hover:bg-teal-200 ">
      <img
        className="border rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant card"
      />
      <h2 className="line-clamp-1 text-center font-bold">{name}</h2>
      <span className="flex justify-center">
        <h4
          className="w-6 rounded-xl ml-2"
          style={{
            backgroundColor: avgRating >= 4 ? "#90EE90" : "#FF474C",
          }}
        >
          {avgRating}
        </h4>
        <h4 className="mx-2"> •{sla.slaString}</h4>
      </span>
      <h4 className="line-clamp-1">{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>

      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
