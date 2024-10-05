"use client";
import React, { useContext, useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ExpenseTrackerContext } from "../context/expense-tracker-context";

function Navbar() {
  const amountRef = useRef();
  const [amountType, setAmountType] = useState("income");
  const categoryRef = useRef();

  let incomeOptions = ["salary", "freelance", "stocks"];
  let expenseOptions = [
    "rent",
    "education",
    "food",
    "clothes",
    "travel",
    "entertainment",
  ];

  const { dispatch, state } = useContext(ExpenseTrackerContext);

  const addData = () => {
    dispatch({
      type: "ADD_DATA",
      payload: {
        amount: amountRef.current?.value,
        amountType: amountType,
        category: categoryRef.current?.value,
      },
    });
  };

  return (
    <div className="navbar flex justify-end">
      <Popover>
        <PopoverTrigger className="border-2 border-solid border-white px-5 py-3 my-3 rounded-md hover:bg-black hover:text-white hover:shadow-lg hover:border-blue-500 transition-colors duration-300">
          Add Income / Expense
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-black p-5 text-gray-600">
          <div className="grid gap-4">
            <div className="space-y-2">
              <p className="text-base text-muted-foreground ">
                Add Income or expense
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Amount</Label>
                <Input
                  id="width"
                  defaultValue="0"
                  className="col-span-2 h-8"
                  ref={amountRef}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="amount-type">Amount Type</Label>
                <select
                  id="amount-type"
                  value={amountType}
                  onChange={(e) => {
                    setAmountType(e.target.value);
                  }}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="category">Category</Label>

                <select
                  ref={categoryRef}
                  id="amount-type"
                  class="w-[180px] bg-black p-1 text-gray-600 border"
                >
                  {amountType == "income" && (
                    <>
                      <option value="" disabled selected>
                        Select Amount Type
                      </option>
                      {incomeOptions &&
                        incomeOptions.map((incomeItem, index) => (
                          <option
                            value={incomeItem}
                            class="py-3 border-b border-b-gray-600 border-b-solid"
                          >
                            {incomeItem.toUpperCase()}
                          </option>
                        ))}
                    </>
                  )}
                  {amountType == "expense" && (
                    <>
                      <option value="" disabled selected>
                        Select Amount Type
                      </option>
                      {expenseOptions &&
                        expenseOptions.map((expenseItem, index) => {
                          return (
                            <option
                              key={`${expenseItem}-${index}`}
                              value={expenseItem}
                              class="py-3 border-b border-b-gray-600 border-b-solid"
                            >
                              {expenseItem.toUpperCase()}
                            </option>
                          );
                        })}
                    </>
                  )}
                </select>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <button
                  className="border p-1 bg-white text-black"
                  onClick={() => {
                    addData();
                  }}
                >
                  Add Data
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Navbar;
