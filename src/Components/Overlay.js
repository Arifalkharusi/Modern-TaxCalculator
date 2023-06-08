import React from "react";

const Overlay = (props) => {
  const closeHandler = (e) => {
    e.preventDefault();
    props.onClose(false);
  };

  const saveData = (e) => {
    e.preventDefault();
    props.calcKey(props.dataSelector, +e.target[0].value);
    props.onClose(false);
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 p-12 flex justify-center bg-slate-300/80">
      <div className="p-10 bg-white flex flex-col gap-3 shadow-md rounded-md h-52 w-[570px] relative">
        <i
          className="fa-regular fa-circle-xmark text-[30px] absolute top-[-15px] right-[-15px] bg-slate-300 rounded-[50%] cursor-pointer"
          onClick={closeHandler}
        ></i>
        <h1>{props.dataMain.heading}</h1>
        <form onSubmit={saveData} className="flex flex-col gap-3">
          <input
            className="py-3 px-5 border-0 bg-slate-200 focus:outline-0 "
            type="number"
            placeholder={props.dataMain.holder}
          />
          <button
            className="py-3 px-5 cursor-pointer font-bold border-black border-2 shadow-md"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
