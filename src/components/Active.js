import { MONTH_NAMES } from "../Consants"

export const Active = ({active}) => {
    return (
        
            active.map((data) => (
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
                  <div className='w-1/6 h-6 flex justify-center items-center'>
                    {MONTH_NAMES[(new Date(data.bookingEpochTime).getMonth())]}
                    {" "}
                    {(new Date(data.bookingEpochTime).getDate())}{","}
                    {(new Date(data.bookingEpochTime).getFullYear())}
                    </div>
                  <div className='w-2/6 h-6  flex justify-center items-center text-center'>{data.packageTitle}</div>
                    {data.offlineBooking === true ? (
                  <div className='ml-8 w-1/5 h-6 bg-[#FFCA28] flex justify-center items-center rounded-full'>
                      Offline Payment
                    </div>
                    ) : (
                      <div className='ml-8 w-1/5 h-6 bg-[#35DBA2] flex justify-center items-center rounded-full'>
                      Online Payment
                    </div>
                    )}
                </div>
              ))
        
    )
}


export const Completed = ({completed}) => {
    return (
        
            completed.map((data) => (
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
                  <div className='w-1/6 h-6 flex justify-center items-center'>
                    {MONTH_NAMES[(new Date(data.bookingEpochTime).getMonth())]}
                    {" "}
                    {(new Date(data.bookingEpochTime).getDate())}{","}
                    {(new Date(data.bookingEpochTime).getFullYear())}
                    </div>
                  <div className='w-2/6 h-6  flex justify-center items-center text-center'>{data.packageTitle}</div>
                    {data.offlineBooking === true ? (
                  <div className='ml-8 w-1/5 h-6 bg-[#FFCA28] flex justify-center items-center rounded-full'>
                      Offline Payment
                    </div>
                    ) : (
                      <div className='ml-8 w-1/5 h-6 bg-[#35DBA2] flex justify-center items-center rounded-full'>
                      Online Payment
                    </div>
                    )}
                </div>
              ))
        
    )
}

export const Cancelled = ({cancelled}) => {
    return (
        
            cancelled.map((data) => (
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
                  <div className='w-1/6 h-6 flex justify-center items-center'>
                    {MONTH_NAMES[(new Date(data.bookingEpochTime).getMonth())]}
                    {" "}
                    {(new Date(data.bookingEpochTime).getDate())}{","}
                    {(new Date(data.bookingEpochTime).getFullYear())}
                    </div>
                  <div className='w-2/6 h-6  flex justify-center items-center text-center'>{data.packageTitle}</div>
                    {data.offlineBooking === true ? (
                  <div className='ml-8 w-1/5 h-6 bg-[#FFCA28] flex justify-center items-center rounded-full'>
                      Offline Payment
                    </div>
                    ) : (
                      <div className='ml-8 w-1/5 h-6 bg-[#35DBA2] flex justify-center items-center rounded-full'>
                      Online Payment
                    </div>
                    )}
                </div>
              ))
        
    )
}