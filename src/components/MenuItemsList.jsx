import MenuItem from "./MenuItem";

const MenuItemsList = (props) => {
  //console.log(props);
  return (
    <div>
      {props.data?.map((menuCategoryItem) => {
        return (
          <MenuItem
            menuCategoryItem={menuCategoryItem}
            key={menuCategoryItem?.card?.info?.name}
          />
        );
      })}
      {/* {
        return (
          <div
            key={menuCategoryItem?.card?.info?.name}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex flex-wrap justify-between"
          >
            <div className="flex flex-wrap w-9/12">
              <label className="">
                {menuCategoryItem?.card?.info?.isVeg === 1 ? "🟢" : "🔴"}
              </label>
              <div className="w-11/12 justify-center">
                <span className="p-2">
                  {menuCategoryItem?.card?.info?.name} -{" "}
                </span>
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
                Add
              </button>
            </div>

            <div className="w-3/12">
              <img
                alt="menu item"
                src={CDN_URL + menuCategoryItem?.card?.info?.imageId}
                className="w-28 rounded-md"
              ></img>
            </div>
          </div>
        );
      } */}
    </div>
  );
};

export default MenuItemsList;
