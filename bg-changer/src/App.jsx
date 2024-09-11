import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-red-500");

  const colors = [
    { id: "1", colorName: "red", colorClass: "bg-red-500" },
    { id: "2", colorName: "blue", colorClass: "bg-blue-500" },
    { id: "3", colorName: "green", colorClass: "bg-green-500" },
    { id: "4", colorName: "yellow", colorClass: "bg-yellow-500" },
    { id: "5", colorName: "purple", colorClass: "bg-purple-500" },
    { id: "6", colorName: "orange", colorClass: "bg-orange-500" },
    { id: "6", colorName: "pink", colorClass: "bg-pink-500" },
  ];

  return (
    <div className={`w-full h-screen flex justify-center ${color}`}>
      <div className="fixed left-4 lg:left-auto bottom-0 lg:bottom-20 bg-slate-100 flex flex-col lg:flex-row flex-wrap justify-between lg:justify-center gap-4 lg:gap-8  xl:gap-16 px-4 py-6 rounded-3xl h-screen lg:h-fit">
        {colors.map((data) => (
          <button
            key={data.id}
            className={`${data.colorClass} py-2 px-4 lg:py-4 lg:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105`}
            onClick={() => setColor(data.colorClass)}
          >
            <p
              className={`font-medium capitalize  ${
                color === data.colorClass ? "text-black" : "text-white"
              }`}
            >
              {data.colorName}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
