import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fecthData();
  }, []);

  // const fecthData = async () => {
  //   const data = await fetch(MENU_API + restaurantId);
  //   const json = await data.json();
  //   setRestaurantInfo(json.data);
  //   console.log(json.data);
  // };

  //use in case of trying to bypass cors policy without using cors chrome plugin
  const fecthData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/" + MENU_API + restaurantId
    );
    const json = await data.json();
    setRestaurantInfo(json.data);
    console.log(json.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
