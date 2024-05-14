// export const CDN_URL =
//   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
// https://thingproxy.freeboard.io/  :::add this before any url to overcome the CORS issue

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5996207&lng=77.3736349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// Swiggy API to get Restaurant Menu data with thingproxy
export const swiggy_menu_api_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5996207&lng=77.3736349&restaurantId=";

// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;

// menu items api card type key
export const MENU_CATEGORY_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
export const MENU_CATEGORY_TYPE_KEY2 =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

//empty cart image
export const EMPTY_CART_IMAGE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0";
