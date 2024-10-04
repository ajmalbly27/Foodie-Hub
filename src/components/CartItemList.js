import { useDispatch } from "react-redux";
import { CDN_URL_FOR_RESTAURANTS } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";
import { FaStar } from "react-icons/fa";

const CartItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    // dispatch action
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between mb-2 border rounded-lg"
        >
          <div
            key={item.card.info.id}
            className="flex justify-between w-[100%] px-4 py-3 text-left"
          >
            <div className="w-9/12">
              <div className="text-lg font-bold text-gray-800">
                {item.card.info.name}
              </div>
              <div className="font-semibold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              {item.card.info.ratings.aggregatedRating.rating && (
                <div className="flex items-center mt-2 font-semibold">
                  <FaStar className="text-sm text-green-900" />
                  {item.card.info.ratings.aggregatedRating.rating}
                  <span>
                    ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>
              )}
              <p className="font-semibold text-sm text-gray-500">
                {item.card.info.description}
              </p>
            </div>
            <div>
              <div className="w-52">
                <img
                  className="w-[100%] h-36 object-cover rounded-2xl"
                  src={CDN_URL_FOR_RESTAURANTS + item.card.info.imageId}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleRemoveItem(item)}
              className="mr-1 text-gray-500 font-semibold"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
