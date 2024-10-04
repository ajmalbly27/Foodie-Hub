import { useDispatch } from "react-redux";
import { CDN_URL_FOR_RESTAURANTS } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { FaStar } from "react-icons/fa";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex mt-6 pb-8 border-gray-200 border-b-2 text-left"
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
            <div className="relative w-52">
              <img
                className="w-[100%] h-36 object-cover rounded-2xl"
                src={CDN_URL_FOR_RESTAURANTS + item.card.info.imageId}
              />
              <button
                className="absolute left-12 -bottom-4 px-8 py-1 font-bold rounded-lg bg-white text-green-700 shadow-lg hover:bg-gray-200"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
