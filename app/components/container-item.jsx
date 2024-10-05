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
    
    }
  }, [value]);

  return (
    <div className="info-container-item container border-2 border-solid border-black-500 p-5 rounded-md">
      <span className="income-container text-3xl font-semibold">{title}</span>
      <div className="amount text-xl font-light">
        <span>$</span> {amount}
      </div>
    </div>
  );
}

export default ContainerItem;
