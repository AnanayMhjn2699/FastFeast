// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard
// component as props with unique key as index
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    // console.log(json);
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //the search bar is controlled compoenent and based on search inputted value we need to render on
  //screen therefore using filtered list state var
  function catchSearchText(text) {
    setFilteredRestaurantList(
      restaurantList.filter((restaurantName) => {
        return restaurantName.info.name
          .toLowerCase()
          .includes(text.toLowerCase());
      })
    );
  }

  //this is a custom hook to check if the user has active internet connection and
  // basis that we need to render things on screen
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are offline, check your internet connection</h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <SearchBar catchSearchText={catchSearchText} />
      <div className="ml-16 flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
