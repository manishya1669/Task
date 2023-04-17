import React, { useState } from "react";
import Stopwatch from "./stopwatch";
import Filter from "./filter";

function Counter() {
  const [Input, setInput] = useState("");
  // const [ans, setAns] = useState(null);

  function Displayinput(e) {
    setInput(Input.concat(e.target.name));
  }

  const reset = function () {
    setInput("");
  };
  const Delete = function () {
    setInput(Input.slice(0, -1));
  };
  const Total = function () {
    setInput(eval(Input).toString());
    setTimeout(function () {
      setInput("");
    }, 4000);
  };

  return (
    <div className="p-2 border-solid border-2 border-indigo-600">
      <div className="grid grid-cols-3 gap-3 p-10">
        <div>
         <Stopwatch/>




        </div>

        <div>
          <div className="px-10">
          <div className="pt-10 pb-10">Calculator</div>
          <div className="px-10  w-40 h-10 shadow-md"> {Input}</div>
        </div>

        
        <div className="grid grid-row-3 gap-2 ">
          <div className="gap-2 flex">
            <button id="reset" className="px-10 bg-gray-500" onClick={reset}>
              Reset
            </button>
            <button
              id="Delete"
              name="Del"
              className="px-8 bg-gray-500"
              onClick={Delete}
            >
              Del
            </button>

            <button
              name="-"
              className="px-8 bg-gray-500"
              onClick={Displayinput}
            >
              -
            </button>

            <button
              name="+"
              className="px-8 bg-gray-500"
              onClick={Displayinput}
            >
              +
            </button>
          </div>
          <div className="gap-2 flex">
            <button
              name="1"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              1
            </button>
            <button
              name="2"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              2
            </button>
            <button
              name="3"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              3
            </button>
            <button
              name="/"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              /
            </button>
          </div>
          <div className="gap-2 flex">
            <button
              name="4"
              className="px-10  bg-gray-500"
              onClick={Displayinput}
            >
              4
            </button>
            <button
              name="5"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              5
            </button>
            <button
              name="6"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              6
            </button>
            <button
              name="*"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              x
            </button>
          </div>
          <div className="gap-2 flex">
            <button
              name="7"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              7
            </button>
            <button
              name="8"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              8
            </button>
            <button
              name="9"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              9
            </button>
            <button
              name="0"
              className="px-10 bg-gray-500"
              onClick={Displayinput}
            >
              0
            </button>
          </div>
          <div className="gap-2 flex">
            <button id="result" className="px-10 bg-gray-500" onClick={Total}>
              =
            </button>
          </div>
        </div>
        </div>
        
        <div>


        <Filter/>

        </div>
      </div>
    </div>
  );
}

export default Counter;
