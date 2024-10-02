"use client";
import React, { useContext, useEffect, useState } from "react";
import { ACTIONTYPE, ExpenseTrackerContext } from "../context/expense-tracker-context";

function ContainerItem({ title, value }) {

  const {state, dispatch} = useContext(ExpenseTrackerContext);

  const [amount, setAmount] = useState();
  useEffect(() => {
    let tempAmount = 0;
    if (value) {
      value.forEach((item) => {
        tempAmount += parseInt(item.amount);
      });
      setAmount(tempAmount);
      // if(title == "Income"){
      //     dispatch({type: ACTIONTYPE.ADDAMOUNT, payload: {amount: tempAmount}})
      // }
      // else{
      //   dispatch({type: ACTIONTYPE.ADDEXPENSE, payload: {amount: tempAmount}})

      // }
    }
  }, [value]);

  return (
    <div className="info-container-item container border-2 border-solid border-black-500 p-5 rounded-md">
      <span className="income-container text-3xl">{title}</span>
      <div className="amount text-xl font-bold">
        <span>$</span> {amount}
      </div>
    </div>
  );
}

export default ContainerItem;
