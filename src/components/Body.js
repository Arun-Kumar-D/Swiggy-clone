import RestrauntCard from "./RestrauntCard";
import restrautList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunts] = useState(restrautList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunts(filteredList);
          }}
          >
            Top Rated Restraunts</button>
        </div>
        <div className="restaurant-list">
          {listOfRestaurants.map((restaurant) => {
            return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;