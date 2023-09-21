import Upride_Logo from "../assets/Upride_Logo.svg";
import Home_Icon from "../assets/Home_Icon.svg";
import Earning_Icon from "../assets/Earning_Icon.svg";
import Service_Icon from "../assets/Service_Icon.svg";
import Assets_Icon from "../assets/Assets_Icon.svg";
import Slider_Item from "../assets/Slider_Item.svg";

const SideBar = () => {
  return (
    <div className="bg-gradient-to-b from-[#EB6B9D] via-[#EB6B9D] to-[#FF5757] h-screen w-96 flex justify-center">
      <div className="h-screen w-full flex flex-col py-5">
        <div className="w-full flex flex-col items-center gap-y-8">
          <span className="flex justify-star w-4/5 mb-5">
            {" "}
            <img src={Upride_Logo} alt="logo" className="h-10 w-36 flex " />
          </span>
          <img src={Slider_Item} className='w-64' alt='image'/>
          <div
            className="w-full flex flex-col [&>*]:w-full [&>*]:flex  [&>*]:justify-start [&>*]:px-8 
          [&>*]:h-12 text-white text-lg"
          >
            <div className="hover:bg-[#D9D9D9] hover:bg-opacity-20 cursor-pointer">
              <div className="w-48 flex gap-x-4 items-center ">
                <img src={Home_Icon} className="w-8" alt="logo" />
                Home
              </div>
            </div>
            <div className="hover:bg-[#D9D9D9] hover:bg-opacity-20 cursor-pointer">
              <div className="w-48 flex gap-x-4 items-center">
                <img src={Earning_Icon} className="w-8" alt="logo" />
                My Earnings
              </div>
            </div>
            <div className="hover:bg-[#D9D9D9] hover:bg-opacity-20 cursor-pointer">
              <div className="w-48 flex gap-x-4 items-center">
                <img src={Service_Icon} className="w-8" alt="logo" />
                My Services
              </div>
            </div>
            <div className="hover:bg-[#D9D9D9] hover:bg-opacity-20 cursor-pointer">
              <div className="w-48 flex gap-x-4 items-center">
                <img src={Assets_Icon} className="w-8" alt="logo" />
                My Assets
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
