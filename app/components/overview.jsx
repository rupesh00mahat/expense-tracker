"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import ContainerItem from "./container-item";
import ContainerCategoryItem from "./container-category-item";
import { ExpenseTrackerContext } from "../context/expense-tracker-context";
import { PieChart } from '@mui/x-charts/PieChart';

function Overview() {
  const { state, dispatch } = useContext(ExpenseTrackerContext);

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    useEffect(()=>{
      let incomeSum = 0;
      let expenseSum = 0;
      state.income.forEach((item)=>{
        incomeSum += parseInt(item.amount);
      })
      state.expense.forEach((item)=>{
        expenseSum += parseInt(item.amount);
      })
     
      setTotalIncome(incomeSum);
      setTotalExpense(expenseSum);
    },[state.income, state.expense])

  return (
    <div id="overview">
      <h2 className="text-center text-3xl mb-10">Overview</h2>
      <div className="info-container-list flex gap-20 justify-between text-center">
        <ContainerItem title="Income" value={state.income} />
        <ContainerItem title="Expense" value={state.expense} />
      </div>
      <div className="category-container-wrapper flex gap-20 justify-between">
        <ContainerCategoryItem value={state.income} type="Income" total={totalIncome}/>
        <ContainerCategoryItem value={state.expense} type="Expense" total={totalExpense}/>
      </div>
      <PieChart
  series={[
    {
      data: [
        { id: 0, value: totalIncome, label: 'Income', color: "blue" },
        { id: 1, value: totalExpense, label: 'Expense', color: "red" },
      ],
    },
  ]}
  width={400}
  height={200}
/>
    </div>
  );
}

export default Overview;
