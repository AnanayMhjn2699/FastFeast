import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const MenuItem = ({ menuCategoryItem }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  //   const cartItems = useSelector((store) => store.cart.items);

  //   useEffect(() => {
  //     let count2 = 0;
  //     cartItems.forEach((element) => {
  //       if (element?.card?.info?.name === menuCategoryItem?.card?.info?.name) {
  //         count2++;
  //         setCount(count2);
  //       }
  //     });
  //   }, []);

  const handleAddItem = (menuCategoryItem) => {
    setCount(count + 1);
    dispatch(addItem(menuCategoryItem));
  };
  return (
    <div className="p-2 m-2 border-gray-300 border-b-2 text-left flex flex-wrap justify-between">
      <div className="flex flex-wrap w-9/12">
        <label className="">
          {menuCategoryItem?.card?.info?.isVeg === 1 ? "🟢" : "🔴"}
        </label>
        <div className="w-11/12 justify-center">
          <span className="p-2">{menuCategoryItem?.card?.info?.name} - </span>
          <span className="">
            ₹
            {menuCategoryItem?.card?.info?.price / 100 ||
              menuCategoryItem?.card?.info?.defaultPrice / 100}
          </span>
        </div>

        <button
          onClick={() => handleAddItem(menuCategoryItem)}
          className="ml-2 w-20 border-black border-[1px] rounded-md shadow-md"
        >
          {count > 0 ? count : "Add"}
        </button>
      </div>

      <div className="w-3/12">
        <img
          alt="menu item"
          src={CDN_URL + menuCategoryItem?.card?.info?.imageId}
          className="w-28 h-20 object-cover rounded-md"
        ></img>
      </div>
    </div>
  );
};
export default MenuItem;
