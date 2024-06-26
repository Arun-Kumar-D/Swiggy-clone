import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADDRESS_AUTOCOMPLATE_API, ADDRESS_RECOMMENDATION_API, LOGO_URL, generateProxyUrl,RESTAURANTS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setAddress } from "../utils/slices/addressSlice";


const Landing = () => {
  const [showLocation, setShowLocation] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchSearchSuggestions().then(response => {
//         if (!response.ok) {
//           throw new Error(response.statusText)
//         }
//         return response.json()
//       }).catch(err=>{
//       console.log(err)
//   });
//     }, 500);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchText]);
useEffect(() => {
    fetchLatLng();
}, [])

  async function fetchSearchSuggestions() {
    const resource = RESTAURANTS_API
    const data = await fetch(resource);
    const result = await data.json();
    setSearchResults(result.data || []);
  }

  async function fetchLatLng() {
    const resource = RESTAURANTS_API
    const data = await fetch(resource);
    const result = await data.json();
    console.log(result.data)
    //dispatch(setAddress(result.data[0]));
    navigate("/");
  }

  return (
    <div className="relative h-screen">
      {/* <div className="status">Online Status: <div className="text-red-500 bg-red-700">🟢</div></div> */}
      <div className="md:hidden">
        {showLocation && (
          <div className="relative flex flex-col justify-center items-center pb-2">
            <div onClick={()=>setShowLocation(false)} className="bg-white z-50 text-gray-500 text-xl px-2 py-1 absolute top-3 left-2">←</div>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="text-md border border-gray-300 p-4 col-span-10 w-screen pl-16 md:pl-0"
              type="text"
              placeholder="Enter area, street name..."
            ></input>
            <div className="absolute left-0 top-20 z-30 bg-white border border-gray-300">
              {searchResults &&
                searchResults.length > 0 &&
                searchResults.map((result) => (
                  <div
                    key={result?.place_id}
                    onClick={() => fetchLatLng()}
                    className="cursor-pointer hover:bg-gray-50 text-gray-700 text-sm text-light p-4 border-b border-gray-300"
                  >
                    {result?.description}
                  </div>
                ))}
            </div>
          </div>
        )}
        {!showLocation && (
          <>
            <img className="w-screen h-3/5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_640/2xImageDeliveredQuickly_unovho " />
            <div className="flex flex-col justify-center items-center p-8">
              <h3 className="text-xl font-bold text-center">Order from top & Favourite restaurants</h3>
              <h3 className="text-sm py-2 text-gray-400 text-center">Ready to see top restaurants to order?</h3>
              <button onClick={() => setShowLocation(true)} className="p-4 bg-orange-500 text-white uppercase font-bold text-sm">
                Setup your location
              </button>
              <div className="py-4 text-center text-sm text-gray-400">
                <span>Have an account?</span> <span className="text-orange-600">Login</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="hidden md:grid grid-cols-12">
        <div className="col-span-6 p-12">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img className="p-4 w-48" src={LOGO_URL} alt="logo" />
            </Link>
            <div className="flex">
              <button className="font-semibold px-4 py-2" onClick={() => console.log("Sign In feature - Coming soon")}>
                Login
              </button>
              <button className="bg-black text-white px-4 font-semibold py-2" onClick={() => console.log("Sign up feature - Coming soon")}>
                Sign up
              </button>
            </div>
          </div>
          <div className="pt-20">
            <h1 className="pt-4 pb-2 text-4xl font-bold">Cooking gone wrong?</h1>
            <h3 className="text-2xl text-gray-500 font-light">Order food from favourite restaurants near you.</h3>
            <div className="relative">
              <div className="grid grid-cols-12 mt-4">
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="text-lg border border-gray-500 p-4 col-span-10"
                  type="text"
                  placeholder="Enter your delivery location"
                ></input>
                <button onClick={() => fetchLatLng()} className="col-span-2 bg-orange-500 text-white font-bold p-4">
                  FIND FOOD
                </button>
                <div className="absolute left-0 top-20 z-30 bg-white border border-gray-300">
                  {searchResults &&
                    searchResults.length > 0 &&
                    searchResults.map((result) => (
                      <div
                        key={result?.place_id}
                        onClick={() => fetchLatLng()}
                        className="cursor-pointer hover:bg-gray-50 text-gray-700 text-sm text-light p-4 border-b border-gray-300"
                      >
                        {result?.description}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
