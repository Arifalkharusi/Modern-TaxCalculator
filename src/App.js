import React, { useState } from "react";
import MainTax from "./Components/MainTax";
import Overlay from "./Components/Overlay";

const App = () => {
  const [overlayText, setOverlayText] = useState({});
  const [openOverlay, setOpenOverlay] = useState(false);
  const [mainData, setMainData] = useState({
    income: 0,
    millage: 0,
    phone: 0,
    other: 0,
  });
  const [mainDataSelector, setMainDataSelector] = useState(``);
  const [finalMain, setFinalMain] = useState({
    mainIncome: 0,
    taxableIncome: 0,
    taxDeduxtions: 0,
    taxDue: 0,
    millage: 0,
    phone: 0,
    other: 0,
  });

  const overMain = (object) => {
    setOverlayText(object);
  };
  const openHandler = (boolean) => {
    setOpenOverlay(boolean);
  };
  const calcObj = (key) => {
    setMainDataSelector(key);
  };

  const mainCalcFunc = () => {
    const taxableIncome = mainData.income - 12570;

    const mill = () => {
      const firstTen = 10000 * 0.45;
      if (mainData.millage > 10000) {
        const final = mainData.millage - 10000;
        return final * 0.25 + firstTen;
      }
      return mainData.millage * 0.45;
    };
    const millageExpense = mill();
    const fullExpense = millageExpense + mainData.phone + mainData.other;

    const taxdue = (taxableIncome - fullExpense) * 0.2;

    setFinalMain({
      mainIncome: mainData.income,
      taxableIncome: taxableIncome,
      taxDeduxtions: fullExpense,
      taxDue: taxdue,
      millage: millageExpense,
      phone: mainData.phone,
      other: mainData.other,
    });
  };

  const calcKey = (key, val) => {
    if (val > 0) mainData[key] = val;
    setMainData((prev) => prev);
    mainCalcFunc();
  };

  return (
    <div className="flex gap-3">
      <MainTax
        onOpen={openHandler}
        overObj={overMain}
        objCalc={calcObj}
        finalData={finalMain}
      />
      {openOverlay && (
        <Overlay
          dataMain={overlayText}
          onClose={openHandler}
          calcKey={calcKey}
          dataSelector={mainDataSelector}
        />
      )}
    </div>
  );
};

export default App;
