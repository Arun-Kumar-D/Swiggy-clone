export const DEFAULT_LAT = "13.10863";
export const DEFAULT_LNG = "80.2060781";
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png";
export const RESTAURANTS_API = "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=" + DEFAULT_LAT + "&lng=" + DEFAULT_LNG;
export const RESTAURANTS_MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=" + DEFAULT_LAT + "&lng=" + DEFAULT_LNG + "&restaurantId=";
export const SWIGGY_PROXY = ".netlify/functions/swiggy-proxy";
export const PROXY_CORS = "https://corsproxy.org/?";
export const generateProxyUrl = (URL) => PROXY_CORS + encodeURIComponent(URL)
export const ADDRESS_AUTOCOMPLATE_API = "https://www.swiggy.com/dapi/misc/place-autocomplete?input=[ADDRESS]&types=";
export const ADDRESS_RECOMMENDATION_API = "https://www.swiggy.com/dapi/misc/address-recommend?place_id=";
