import React from "react";
import style from "./Overlay.module.css";

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
    <div className={style.overlay}>
      <div className={style.main}>
        <i
          className={`fa-regular fa-circle-xmark ${style.close}`}
          onClick={closeHandler}
        ></i>
        <h1>{props.dataMain.heading}</h1>
        <form onSubmit={saveData}>
          <input type="number" placeholder={props.dataMain.holder} />
          <button type="submit" className={style.submit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
