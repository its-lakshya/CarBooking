import React from "react";
import Phone_Image from "../assets/Phone_Image.svg";
import { DATA_URL } from "../Consants";
import { useEffect, useState } from "react";
import { MONTH_NAMES } from "../Consants";
import { Active, Completed, Cancelled } from "./Active";

const Booking = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [bookingOffline, setBookingOffline] = useState([]);
  const [bookingOnline, setBookingOnline] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [cancelled, setCancelled] = useState([]);
  const [value, setValue] = useState('active')
  const [activeStyle, setActiveStyle] =  useState('border-b-[6px] border-[#FC8F8F]')
  const [completedStyle, setCompletedStyle] =  useState()
  const [cancelledStyle, setCancelledStyle] =  useState()

  const dataFetch = async () => {
    const response = await fetch(DATA_URL);
    const data = await response.json();

    setBookingOffline(data.offline_bookings);
    setBookingOnline(data.online_bookings);

  };

  useEffect(() => {
    dataFetch();
  }, []);

  useEffect(() => {
   
    setCombinedData({ ...bookingOffline, ...bookingOnline });
  }, [bookingOnline, bookingOffline]);

  useEffect(() => {

    setActive(
      Object.values(combinedData).filter(
        (item) => item.bookingStatus === "SUCCESS"
      )
    );
    setCompleted(
      Object.values(combinedData).filter(
        (item) => item.bookingStatus === "COMPLETED"
      )
    );
    setCancelled(
      Object.values(combinedData).filter(
        (item) => item.bookingStatus === "CANCELLED"
      )
    );
  }, [combinedData]);

  const handleClick = (data) => {
    if(data==='active'){
      setValue(data)
      setActiveStyle('border-b-[6px] border-[#FC8F8F]')
      setCompletedStyle('')
      setCancelledStyle('')
    }
    else if(data==='completed') {
      setValue(data)
      setActiveStyle('')
      setCompletedStyle('border-b-[6px] border-[#FC8F8F]')
      setCancelledStyle('')
    }
    else if(data==='cancelled'){
      setValue(data)
      setActiveStyle('')
      setCompletedStyle('')
      setCancelledStyle('border-b-[6px] border-[#FC8F8F]')
    }
  }

  return (
    <div className="w-[33rem] m-10 flex flex-col gap-y-10">
      <h1 className="text-[1.7rem] font-semibold flex gap-x-4">
        View Bookings
        <img src={Phone_Image} alt="image" />
      </h1>

      <div className="flex flex-col gap-y-6 h-full">
        <div className="flex border-b-2 h-10 gap-x-24 font-medium text-black text-opacity-70 [&>*]:w-24 [&>*]:flex [&>*]:justify-center">
          <button onClick={() => handleClick('active')} className={` ${activeStyle}`}>Active</button>
          <button onClick={() => handleClick('completed')} className={` ${completedStyle}`}>Completed</button>
          <button onClick={() => handleClick('cancelled')} className={` ${cancelledStyle}`}>Cancelled</button>
        </div>
        <div className="h-full w-full rounded-xl flex flex-col border">
          <div
            className="flex  w-full justify-around text-sm text-black font-semibold 
        h-10 items-center bg-[#D9D9D9] bg-opacity-30 shadow-md"
          >
            <div>Name</div>
            <div>Date</div>
            <div>Package Details</div>
            <div>Payment Mode</div>
          </div>
          {value==='active' &&
          <Active active={active}/>
            }
          {value==='completed' &&
          <Completed completed={completed}/>
            }
          {value==='cancelled' &&
          <Cancelled cancelled={cancelled}/>
            }
        </div>
      </div>
    </div>
  );
};

export default Booking;
