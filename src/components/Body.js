import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Cuisines from "./Cuisines";
import { IoSearch } from "react-icons/io5";

const Body = () => {
  const [dataObject, setDataObject] = useState(null);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Biryani&trackingId=undefined&submitAction=ENTER&queryUniqueId=30b92518-9086-a42b-8938-90eb3f317fe0&selectedPLTab=RESTAURANT"
    // );

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //use in case of trying to bypass cors policy without using cors chrome plugin
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Biryani&trackingId=undefined&submitAction=ENTER&queryUniqueId=30b92518-9086-a42b-8938-90eb3f317fe0&selectedPLTab=RESTAURANT"
    // );

    const json = await data.json();
    console.log(json);

    // setListOfRestaurants(
    //   json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    // );
    // setFilteredRestaurant(
    //   json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    // );

    setDataObject(json?.data);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please Check Your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-[75vw] m-auto px-6 py-2">
      <div className="w-[80%] m-auto my-5 bg-white border border-gray-400 rounded-md flex justify-center items-center">
        <input
          className="w-[90%] p-2 text-base outline-none"
          type="text"
          placeholder="Search for restaurants and foods"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        />
        <IoSearch className="text-xl text-gray-600" />
      </div>

      <Cuisines cuisinesObj={dataObject?.cards[0]?.card?.card} />

      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-black">
          {dataObject?.cards[2]?.card?.card?.title}
        </h2>
        <div className="flex flex-wrap justify-between">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard restaurantData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
