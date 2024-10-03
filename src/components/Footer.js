const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-around w-[80%] py-6 border-t-[1px] border-black">
        <div>
          <img
            className="w-48"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Fw3-5a35aBgTdpPgi7UlFQB7ZfoHPqe_MQ&s"
          />
          <div className="ml-4 font-semibold text-sm">
            © 2024 Swiggy Limited
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">Company</h2>
          <h3 className="font-semibold text-gray-500 text-md">About Us</h3>
          <h3 className="font-semibold text-gray-500 text-md">
            Swiggy Corporate
          </h3>
          <h3 className="font-semibold text-gray-500 text-md">Careers</h3>
          <h3 className="font-semibold text-gray-500 text-md">Team</h3>
        </div>
        <div>
          <h2 className="font-bold text-lg">Contact us</h2>
          <h3 className="font-semibold text-gray-500 text-md">
            Help & Support
          </h3>
          <h3 className="font-semibold text-gray-500 text-md">
            Partner with us
          </h3>
          <h3 className="font-semibold text-gray-500 text-md">Ride with us</h3>
        </div>
        <div>
          <h2 className="font-bold text-lg">Available in:</h2>
          <h3 className="font-semibold text-gray-500 text-md">Bangalore</h3>
          <h3 className="font-semibold text-gray-500 text-md">Gurgaon</h3>
          <h3 className="font-semibold text-gray-500 text-md">Hyderabad</h3>
          <h3 className="font-semibold text-gray-500 text-md">Delhi</h3>
          <h3 className="font-semibold text-gray-500 text-md">Mumbai</h3>
          <h3 className="font-semibold text-gray-500 text-md">Pune</h3>
          <h3 className="font-semibold text-gray-500 text-md">Others</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
