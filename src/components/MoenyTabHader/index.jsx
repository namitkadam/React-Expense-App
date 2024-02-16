import React from "react";

function MoenyTabHader({ title, value, valueClass = "" }) {
  return (
    <div className="text-center w-full p-1 dark:text-slate-200">
      <p className="font-semibold text-lg">{title}</p>
      <p className={`text-base font-medium ${valueClass}`}>{value}</p>
    </div>
  );
}

export default MoenyTabHader;
