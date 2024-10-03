import { CDN_URL_FOR_RESTAURANTS } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restaurantData?.info;

  const deliveryTimeString = restaurantData?.info?.sla?.slaString;

  return (
    <div className="w-[225px] mt-7">
      <div className="w-56">
        <img
          className="w-[100%] h-[160px] object-cover rounded-2xl"
          alt="res-logo"
          src={CDN_URL_FOR_RESTAURANTS + cloudinaryImageId}
        />
      </div>
      <div className="py-2 px-3">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex font-semibold">
          <div className="flex items-center">
            <FaStar className="p-1 text-xl bg-green-900 text-white rounded-full" />
            &nbsp;{avgRating} •&nbsp;
          </div>
          <h4>{deliveryTimeString}</h4>
        </div>
        <p className="font-semibold truncate text-gray-600">
          {cuisines.join(", ")}
        </p>
        <h4 className="font-semibold truncate text-gray-600">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
