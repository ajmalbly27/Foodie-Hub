import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center shadow-custom">
      <div>
        <Link to="/">
          <img className="w-24 m-3 ml-11" src={LOGO_URL} />
        </Link>
      </div>
      <div className="w-[50%] mr-11">
        <ul className="flex w-[100%] justify-around text-[#282c3f]">
          <li className="px-4 font-semibold hover:text-orange-600">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="font-semibold hover:text-orange-600">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold hover:text-orange-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-semibold hover:text-orange-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="font-semibold group hover:text-orange-600">
            <Link to="/cart" className="flex items-center">
              <span className="relative">
                <svg
                  className="fill-white stroke-current text-[#282c3f] group-hover:text-orange-600"
                  viewBox="-1 0 37 32"
                  height="20"
                  width="20"
                  strokeWidth="2"
                >
                  <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                </svg>
                <span className="absolute top-[-3px] left-[5px] font-s">
                  {cartItems.length}
                </span>
              </span>
              <span className="pl-1">Cart</span>
            </Link>
          </li> */}

          <li className="font-semibold group hover:text-orange-600">
            <Link to="/cart" className="flex items-center">
              <span className="relative">
                <svg
                  className="fill-white stroke-current text-[#282c3f] group-hover:text-orange-600"
                  viewBox="-1 0 37 32"
                  height="20"
                  width="20"
                  strokeWidth="2"
                >
                  <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                  {cartItems.length}
                </span>
              </span>
              <span className="pl-1">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
