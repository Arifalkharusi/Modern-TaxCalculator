import React from "react";
import style from "./MainTax.module.css";

const MainTax = (props) => {
  const displayOverlay = (data) => {
    props.onOpen(true);
    props.overObj(data);
  };

  const incomeHandler = () => {
    let obj = {
      heading: "How much do you earn",
      holder: "£",
    };
    displayOverlay(obj);
    props.objCalc("income");
  };

  const millageHandler = (e) => {
    e.preventDefault();
    let obj = {
      heading: "Mileage",
      holder: "",
    };
    displayOverlay(obj);
    props.objCalc("millage");
  };

  const phoneCostHandler = (e) => {
    e.preventDefault();
    let obj = {
      heading: "Phone & internet costs",
      holder: "£",
    };
    displayOverlay(obj);
    props.objCalc("phone");
  };

  const otherExpensesHandler = (e) => {
    e.preventDefault();
    let obj = {
      heading: "Other expenses",
      holder: "£",
    };
    displayOverlay(obj);
    props.objCalc("other");
  };

  const { finalData } = props;

  const income = finalData.mainIncome.toLocaleString("en-GB");
  const taxableIncome =
    finalData.taxableIncome > 0
      ? finalData.taxableIncome.toLocaleString("en-GB")
      : 0;
  const taxDeductions = finalData.taxDeduxtions.toLocaleString("en-GB");
  const addMillilage = finalData.millage.toLocaleString("en-GB");
  const addPhoneCost = finalData.phone.toLocaleString("en-GB");
  const otherExpenses = finalData.other.toLocaleString("en-GB");
  const taxDue =
    finalData.taxDue > 0 ? finalData.taxDue.toLocaleString("en-GB") : 0;

  return (
    <div className={style.container}>
      <h1>Estimated driving income per year</h1>
      <div className={style.income} onClick={incomeHandler}>
        <h1>£{income}</h1>
        <h2>Edit</h2>
      </div>
      <div className={style.taxable}>
        <h1>Taxable income</h1>
        <h1>£{taxableIncome}</h1>
      </div>
      <div className={style.deductions}>
        <h1>Tax deductions</h1>
        <h1>£{taxDeductions}</h1>
      </div>
      <div className={style.add}>
        <p onClick={millageHandler}>
          + Add millage <span>£{addMillilage}</span>
        </p>
        <p onClick={phoneCostHandler}>
          + Add phone & interent costs <span>£{addPhoneCost}</span>
        </p>
        <p onClick={otherExpensesHandler}>
          + Add other expenses <span>£{otherExpenses}</span>
        </p>
      </div>
      <div className={style.taxdue}>
        <h1>Estimated taxes due</h1>
        <h1>£{taxDue}</h1>
      </div>
    </div>
  );
};

export default MainTax;
