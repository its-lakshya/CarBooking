import SideBar from "./SideBar";
import Header from "./Header";
import Booking from "./Bookings";

const Home = () => {
  return (
    <div className='flex w-full '>
      <SideBar />
      <div className='flex flex-col w-full'>
      <Header/>
      <Booking/>
      </div>
    </div>
  );
};

export default Home;
