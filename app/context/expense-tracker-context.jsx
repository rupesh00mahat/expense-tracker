"use client";

import React, { createContext, useReducer } from "react";

export const ACTIONTYPE = {
  ADDDATA: "ADD_DATA",
  DELETEINCOME: "DELETE_INCOME",
  DELETEEXPENSE: "DELETEEXPENSE",
  ADDAMOUNT: "ADD_AMOUNT",
  ADDEXPENSE: "ADD_EXPENSE"
};

export const ExpenseTrackerContext = createContext();

const expenseTrackerReducer = (state, action) => {
  if (action.type == ACTIONTYPE.ADDDATA) {
    if (action.payload.amountType === "income") {
      return { ...state, income: [...state.income, {amount: action.payload.amount, category: action.payload.category}] };
    }
    if (action.payload.amountType === "expense") {
      return { ...state, expense: [...state.expense, {amount: action.payload.amount, category: action.payload.category}] };
    }
    if(action.type == ACTIONTYPE.ADDAMOUNT){
      return {...state, totalIncome: action.payload.amount}
    }
    if(action.type == ACTIONTYPE.ADDEXPENSE){
      return {...state, totalExpense: action.payload.amount}
    }
  }
};

function ExpenseTrackerContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseTrackerReducer, {
    income: [],
    expense: [],
    totalIncome: 0,
    totalExpense: 0,
  });

  return (
    <ExpenseTrackerContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
}

export default ExpenseTrackerContextProvider;
