import Search_Icon from "../assets/Search_Icon.svg";
import Plus_Sign from "../assets/Plus_Sign.svg";
import Login_Image from "../assets/Login_Image.png";
import Hand_Image from "../assets/Hand_Image.png";

const Header = () => {
  return (
    <div className="flex px-7 h-16 w-full shadow-md items-center justify-between">
      <div className="flex gap-x-7">
        <div className="flex px-2 w-80 shadow-md shadow-gray-400 h-10  rounded-3xl outline outline-slate-300 outline-1 justify-between">
          <input
            className=" w-full mx-2 text-[1.08rem]"
            placeholder="Search bookings"
          />
          <img src={Search_Icon} className="w-7" alt="search icon" />
        </div>
        <div className="flex gap-x-2 px-2 w-48 shadow-md shadow-gray-400 h-10  rounded-3xl justify-center items-center text-white bg-[#FB8085]">
          <img src={Plus_Sign} className="w-5" alt="logo" />
          New Booking
        </div>
      </div>
      <div className="flex gap-x-1 px-2 w-44 shadow-md shadow-gray-400 h-10 rounded-3xl justify-between font-semibold items-center">
        <img src={Login_Image} alt='image'/>
        Hello Vedant!
        <img src={Hand_Image} className='-ml-3' alt='image'/>
      </div>
    </div>
  );
};

export default Header;
