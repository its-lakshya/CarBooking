import { MONTH_NAMES } from "../Consants";
import { useState } from "react";
import BackButton_Image from "../assets/BackButton_Image.png";
import NextButton_Image from "../assets/NextButton_Image.png";
const pageSize = 8;

export const Pagination = ({ data, type }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / pageSize);
    const currentData = data.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    const nextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

  return (
    <div>
      {type === "active" && <Active active={currentData} />}
      {type === "completed" && <Completed completed={currentData} />}
      {type === "cancelled" && <Cancelled cancelled={currentData} />}
      <div className="flex items-center justify-center gap-x-4 text-xs text-black text-opacity-70 mt-4">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <img className="w-6" src={BackButton_Image} alt="image" />
        </button>
        <span className>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          <img className="w-6" src={NextButton_Image} alt="image" />
        </button>
      </div>
    </div>
  );
};

export const Active = ({ active }) => {
  return active.map((data) => (
    <div
      className="px-4 flex w-full justify-start text-xs  text-black text-opacity-70
                h-14 items-center bg-[#D9D9D9] bg-opacity-30 shadow-md overflow-hidden hover:scale-105"
      key={data.bookingEpochTime}
    >
      <div className="flex w-1/5 overflow-hidden h-6 items-center gap-x-1">
        <img
          src={data.workshopImage}
          alt="image"
          className="w-6 h-6 rounded-[50%]"
        />
        <span className="w-[4.8rem] overflow-hidden">{data.userName}</span>
      </div>
      <div className="w-1/6 h-6 flex justify-center items-center">
        {MONTH_NAMES[new Date(data.bookingEpochTime).getMonth()]}{" "}
        {new Date(data.bookingEpochTime).getDate()}
        {","}
        {new Date(data.bookingEpochTime).getFullYear()}
      </div>
      <div className="w-2/6 h-6  flex justify-center items-center text-center">
        {data.packageTitle}
      </div>
      {data.offlineBooking === true ? (
        <div className="ml-8 w-1/5 h-6 bg-[#FFCA28] flex justify-center items-center rounded-full">
          Offline Payment
        </div>
      ) : (
        <div className="ml-8 w-1/5 h-6 bg-[#35DBA2] flex justify-center items-center rounded-full">
          Online Payment
        </div>
      )}
    </div>
  ));
};

export const Completed = ({ completed }) => {
  return completed.map((data) => (
    <div
      className="px-4 flex w-full justify-start text-xs  text-black text-opacity-70
                        h-14 items-center bg-[#D9D9D9] bg-opacity-30 shadow-md overflow-hidden"
      key={data.bookingEpochTime}
    >
      <div className="flex w-1/5 overflow-hidden h-6 items-center gap-x-1">
        <img
          src={data.workshopImage}
          alt="image"
          className="w-6 h-6 rounded-[50%]"
        />
        <span className="w-[4.25rem] overflow-hidden">{data.userName}</span>
      </div>
      <div className="w-1/6 h-6 flex justify-center items-center">
        {MONTH_NAMES[new Date(data.bookingEpochTime).getMonth()]}{" "}
        {new Date(data.bookingEpochTime).getDate()}
        {","}
        {new Date(data.bookingEpochTime).getFullYear()}
      </div>
      <div className="w-2/6 h-6  flex justify-center items-center text-center">
        {data.packageTitle}
      </div>
      {data.offlineBooking === true ? (
        <div className="ml-8 w-1/5 h-6 bg-[#FFCA28] flex justify-center items-center rounded-full">
          Offline Payment
        </div>
      ) : (
        <div className="ml-8 w-1/5 h-6 bg-[#35DBA2] flex justify-center items-center rounded-full">
          Online Payment
        </div>
      )}
    </div>
  ));
};

export const Cancelled = ({ cancelled }) => {
  return cancelled.map((data) => (
    <div
      className="px-4 flex w-full justify-start text-xs  text-black text-opacity-70
                        h-14 items-center bg-[#D9D9D9] bg-opacity-30 shadow-md overflow-hidden"
      key={data.bookingEpochTime}
    >
      <div className="flex w-1/5 overflow-hidden h-6 items-center gap-x-1">
        <img
          src={data.workshopImage}
          alt="image"
          className="w-6 h-6 rounded-[50%]"
        />
        <span className="w-[4.25rem] overflow-hidden">{data.userName}</span>
      </div>
      <div className="w-1/6 h-6 flex justify-center items-center">
        {MONTH_NAMES[new Date(data.bookingEpochTime).getMonth()]}{" "}
        {new Date(data.bookingEpochTime).getDate()}
        {","}
        {new Date(data.bookingEpochTime).getFullYear()}
      </div>
      <div className="w-2/6 h-6  flex justify-center items-center text-center">
        {data.packageTitle}
      </div>
      {data.offlineBooking === true ? (
        <div className="ml-8 w-1/5 h-6 bg-[#FFCA28] flex justify-center items-center rounded-full">
          Offline Payment
        </div>
      ) : (
        <div className="ml-8 w-1/5 h-6 bg-[#35DBA2] flex justify-center items-center rounded-full">
          Online Payment
        </div>
      )}
    </div>
  ));
};
