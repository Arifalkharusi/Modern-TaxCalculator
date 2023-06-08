import React from "react";

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
    <div className="flex flex-col gap-4 max-w-2xl w-full p-5 bg-white shadow-md">
      <h1>Estimated driving income per year</h1>
      <div className="flex items-center gap-3" onClick={incomeHandler}>
        <h1 className="text-xl sm:text-lg">£{income}</h1>
        <h2 className="text-base font-normal text-blue-600 underline cursor-pointer">
          Edit
        </h2>
      </div>
      <div className="flex items-center justify-between border-b-2 border-black py-3">
        <h1 className="text-xl">Taxable income</h1>
        <h1 className="text-xl">£{taxableIncome}</h1>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-base font-normal">Tax deductions</h1>
        <h1 className="text-base font-normal">£{taxDeductions}</h1>
      </div>
      <div className="flex flex-col gap-5">
        <p
          className="flex justify-between items-center text-blue-600 text-sm cursor-pointer"
          onClick={millageHandler}
        >
          + Add millage <span>£{addMillilage}</span>
        </p>
        <p
          className="flex justify-between items-center text-blue-600 text-sm cursor-pointer"
          onClick={phoneCostHandler}
        >
          + Add phone & interent costs <span>£{addPhoneCost}</span>
        </p>
        <p
          className="flex justify-between items-center text-blue-600 text-sm cursor-pointer"
          onClick={otherExpensesHandler}
        >
          + Add other expenses <span>£{otherExpenses}</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-normal">Estimated taxes due</h1>
        <h1 className="text-xl font-normal">£{taxDue}</h1>
      </div>
    </div>
  );
};

export default MainTax;
