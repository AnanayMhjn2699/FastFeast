import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  MENU_CATEGORY_TYPE_KEY,
  MENU_CATEGORY_TYPE_KEY2,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenucategories from "./RestaurantMenuCategories";
import Shimmer2 from "./Shimmer2";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring

  const [restaurant, menuCategories] = useRestaurantMenu(resId); //menucategories will be json data constaining everything
  // therefre we will have to filetr the  menu category heading and items from it and therefore craeting another var below

  const menuCategoriesArray = menuCategories?.cards
    ?.map((x) => x.card?.card)
    ?.filter(
      (x) =>
        x["@type"] === MENU_CATEGORY_TYPE_KEY ||
        x["@type"] === MENU_CATEGORY_TYPE_KEY2
    );
  //console.log(menuCategoriesArray);
  return !restaurant ? (
    <Shimmer2 />
  ) : (
    <div className="text-center">
      <div className="align-middle py-5">
        <h2 className="font-bold text-3xl">{restaurant?.name}</h2>
        <p className="text-center text-sm p-2 font-light">
          {restaurant?.cuisines?.join(", ")}
        </p>
        <div className="flex justify-center">
          <span className="">⭐ {restaurant?.avgRating}</span>
          <span className="mx-2"> | </span>
          <span className="">{restaurant?.sla?.slaString} </span>
          <span className="mx-2"> | </span>
          <span>{restaurant?.costForTwoMessage} </span>
        </div>
      </div>

      {/* Creating a accordian for all categories */}
      {menuCategoriesArray.map((restaurantCategory) => {
        return (
          <RestaurantMenucategories
            key={restaurantCategory?.title}
            data={restaurantCategory}
          />
        );
      })}

      {/* <div className="">
        <div className="">
          <div className="">
            <h3 className="">Recommended</h3>
            <p className="">
              {menuItems.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
