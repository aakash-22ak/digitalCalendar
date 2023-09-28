"use client";
import Model from "./Model";
import { useState , useEffect } from "react";

export default function Calendar({ onAddItems }) {


export default function Calendar() {

    const [eventData , setEventData] = useState(localStorage.getItem('Events'));

    console.log(localStorage.getItem('Events'))
    console.log(eventData)
   

  const days = ["आइत", "सोम", "मंगल", "बुध", "बिहि", "शुक्र", "शनि "];
  const date = [
    { date: "१", id: 1 },
    { date: "२", id: 2 },
    { date: "३", id: 3 },
    { date: "४", id: 4 },
    { date: "५", id: 5 },
    { date: "६", id: 6 },
    { date: "७", id: 7 },
    { date: "८", id: 8 },
    { date: "९", id: 9 },
    { date: "१०", id: 10 },
    { date: "११", id: 11 },
    { date: "१२", id: 12 },
    { date: "१३", id: 13 },
    { date: "१४", id: 14 },
    { date: "१५", id: 15 },
    { date: "१६", id: 16 },
    { date: "१७", id: 17 },
    { date: "१८", id: 18 },
    { date: "१९", id: 19 },
    { date: "२०", id: 20 },
    { date: "२१", id: 21 },
    { date: "२२", id: 22 },
    { date: "२३", id: 23 },
    { date: "२४", id: 24 },
    { date: "२५", id: 25 },
    { date: "२६", id: 26 },
    { date: "२७", id: 27 },
    { date: "२८", id: 28 },
    { date: "२९", id: 29 },
    { date: "३०", id: 30 },
  ];
  const [addEvent, setAddEvent] = useState(false);

  const modelOpenHandler = (id) => {
    console.log(id,"hello")
    setAddEvent(true);
  };
  const modelCloseHandler = () => {
    setAddEvent(false);
  };

  return (
    <>
      {addEvent && (
       
          <Model closeHandler = {modelCloseHandler} />
        
      )}
      <div className="flex justify-center  items-center gap-6   ">
        {/*header divisioasn */}
        <div className="w-[800px] h-[500px]  relative shadow-lg overflow-hidden">
          <div className="flex justify-between bg-red-600 text-center px-5 py-5">
            <h1 className="text-2xl text-white">२०८०</h1>
            <h1 className="text-2xl text-white">असोज </h1>
          </div>
          <div className="grid grid-cols-7 bg-slate-100 gap-4 pt-5 ">
            {days.map((day, index) => {
              return (
                <div key={index} className=" p-2 text-center text-xl">
                  {day}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 ">
            {date.map((item, index) => {
                console.log(item?.id===8 , 'test');
              const isEven = index % 2 === 0;
              const isWeekend = item.length === 8;
              
              
              return (
                  <>
                  {isEven === true ? (

                    <div
                      key={item.id}
                      className="bg-pink-300 p-6 text-center hover:bg-pink-500 transition ease-in-out duration-300"
                      onClick={modelOpenHandler}
                    >
                      {item.date}
                    </div>
                    
                  ) : isWeekend === true ? (
                    
                    <div
                      key={item.id}
                      className="bg-red-600 p-6 text-center hover:bg-pink-500 transition ease-in-out duration-300"
                      onClick={modelOpenHandler}
                    >
                      {item.date}
                    </div>
                    
                  ) : (
                    

                    <div
                      key={item.id}
                      className="bg-pink-400 p-6 text-center hover:bg-pink-500 transition ease-in-out duration-300"
                      onClick={modelOpenHandler}
                    >
                      {item.date}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>

        <div className="w-[550px] rounded-lg">
          <div className="bg-red-600 py-10 rounded-t-lg">
            <h1 className="text-3xl font-bold text-white px-8">Events </h1>
          </div>
          <div className="h-[400px] rounded-b-lg bg-slate-200">
                {/* {eventData?.map((item,index)=>{
                    <p>{item.event}</p>
                })} */}
          </div>
        </div>
      </div>
    </>

        <div className="grid grid-cols-7 ">
          {date.map((item, index) => {
            const newIndex = index + 1;
            const isEven = newIndex % 2 === 0;
            const isSpecialDate = newIndex % 7 === 0;

            return (
              <>
                {isSpecialDate ? (
                  <div
                    key={index}
                    className="bg-red-600 p-6 text-center hover:bg-slate-100 transition ease-in-out duration-300"
                  >
                    {item}
                  </div>
                ) : isEven ? (
                  <div
                    key={index}
                    className="bg-pink-300 p-6 text-center hover:bg-pink-500 transition ease-in-out duration-300"
                  >
                    {item}
                  </div>
                ) : (
                  <div
                    onClick={(prev) => setIsOpen((prev) => !prev)}
                    key={index}
                    className="bg-pink-400 p-6 text-center hover:bg-pink-500 transition ease-in-out duration-300"
                  >
                    {item}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div>
        <main></main>
      </div>
    </div>
  );
}
