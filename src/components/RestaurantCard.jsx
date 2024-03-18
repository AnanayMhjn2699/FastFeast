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
    <div className="w-[250px] p-4 m-4 hover:bg-slate-100 rounded-lg">
      <img
        className="border rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant card"
      />
      <h2 className="line-clamp-1 text-center font-bold">{name}</h2>
      <span className="flex justify-center font-medium">
        <h4 className="w-6 mr-4">⭐{avgRating}</h4>
        <h4 className="mx-2"> • {sla.slaString}</h4>
      </span>
      <h4 className="line-clamp-1">{cuisines.join(", ")}</h4>
      <span className="flex justify-between mt-3 font-light">
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
