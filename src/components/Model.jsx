"use clinet";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
export default function Model({closeHandler}) {
  const [eventInput, setEventInput] = useState([]);
  const [details ,setDetails] = useState({
    event:'',
    remark: '',
  })
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      event: details.event,
      date: details.eventDate,
    };
  };
  const addFieldHandler = ()=>{
    setEventInput([...eventInput,eventInput])
  }

  return (
    <main className=" absolute z-50 ">
      <div className=" bg-white w-[600px] py-10 relative rounded-md shadow-lg border-[1px] broder-gray-300 ">
        <RxCross1 className="text-3xl ml-[90%] cursor-pointer " onClick={closeHandler}/>
        <button className="px-3 py-2 bg-rose-600 text-white rounded-md" onClick={addFieldHandler} >Event</button>
        <div>
          <h1 className="p-4 text-3xl font-bold">Add Event</h1>
          <form
            className="mx-10 flex flex-col gap-5 "
            onSubmit={onSubmitHandler}
          >
             <div className="flex flex-col gap-3" >
                  <h1 className="text-2xl">Event</h1>
                  <input
                    type="text"
                    value={details.event}
                    onChange={(e) => {
                      setDetails({...details ,event: e.target.value});
                    }}
                    className="border-2 border-gray-300 rounded-md px-4 py-2 placeholder:text-xl"
                    placeholder="event..."
                    required
                  />
                </div>
           
            {eventInput.map((data,i) => {
              return (
                <div className="flex flex-col gap-3" key={i}>
                  <h1 className="text-2xl">Event {' '}  </h1>
                  <input
                    type="text"
                    value={details.event}
                    onChange={(e) => {
                      setDetails({...details ,event: e.target.value});
                    }}
                    className="border-2 border-gray-300 rounded-md px-4 py-2 placeholder:text-xl"
                    placeholder="event..."
                    required
                  />
                </div>
              );
            })}

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl">Remark</h1>
              <textarea
                type="text"
                value={details.remark}
                onChange={(e) => {
                  setDetails({...details ,remark: e.target.value});
                }}
                className="border-2 border-gray-300 rounded-md px-4 py-2 placeholder:text-xl"
                placeholder="add remarks..."
              />

              <button className="bg-rose-600 rounded-lg py-3 text-2xl text-white mt-10">
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
