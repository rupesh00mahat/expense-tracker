import React from "react";

function ContainerCategoryItem({value,type, total}) {
  return (
    <div className="category-container-item container border-2 border-solid border-black-500 p-5 rounded-md my-10">
      <span className="category-item-income text-3xl">{type} by Category</span>
      {value && value.map(({category, amount}, index)=>{
          const progressValue = parseInt(parseInt(amount)/parseInt(total)*100);

        return <div key={`${index}`} className="category-items text-xl flex justify-between">
        <div className="category-item-right w-full">
          <div className="info flex items-center justify-between">
            <span className="category-name">{category} </span>
            <span className="percentage-amount">{amount}</span>
          </div>
          <div style={{"--progress-width": `${progressValue}%`}} className={`progress-loader w-full h-2 border border-red-400 rounded-md relative after:absolute after:h-full after:w-[${progressValue}%] after:bg-blue-500`}></div>
        </div>
      </div>
      })}
    </div>
  );
}

export default ContainerCategoryItem;

