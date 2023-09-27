export default function Calendar() {
  const days = ["आइत", "सोम", "मंगल", "बुध", "बिहि", "शुक्र", "शनि "];
  const date = [
    "१",
    "२",
    "३",
    "४",
    "५",
    "६",
    "७",
    "८",
    "९",
    "१०",
    "११",
    "१२",
    "१३",
    "१४",
    "१५",
    "१६",
    "१७",
    "१८",
    "१९",
    "२०",
    "२१",
    "२२",
    "२३",
    "२४",
    "२५",
    "२६",
    "२७",
    "२८",
    "२९",
    "३०",
  ];

  return (
    <div className="flex justify-between  items-center min-h-screen m-5 ">
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
            const isEven = index % 2 === 0;
            return (
              <>
                {isEven ? (
                  <div
                    key={index}
                    className="bg-pink-300 p-6 text-center hover:bg-pink-500 transition ease-in-out duration-300"
                  >
                    {item}
                  </div>
                ) : (
                  <div
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
        <main>Events</main>
      </div>
    </div>
  );
}
