"use client";
import React, { useContext, useRef } from "react";
import ContainerItem from "./container-item";
import ContainerCategoryItem from "./container-category-item";
import { ExpenseTrackerContext } from "../context/expense-tracker-context";

function Overview() {
  const { state, dispatch } = useContext(ExpenseTrackerContext);
  console.log(state);
  return (
    <div id="overview">
      <h2 className="text-center text-3xl mb-10">Overview</h2>
      <div className="info-container-list flex gap-20 justify-between text-center">
        <ContainerItem title="Income" value={state.income} />
        <ContainerItem title="Expense" value={state.expense} />
      </div>
      <div className="category-container-wrapper flex gap-20 justify-between">
        <ContainerCategoryItem value={state.income} type="Income"/>
        <ContainerCategoryItem value={state.expense} type="Expense"/>
      </div>
    </div>
  );
}

export default Overview;
