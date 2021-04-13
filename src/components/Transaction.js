import React from "react";
import NumberFormat from "react-number-format";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign} Rp
        <NumberFormat
          value={Math.abs(transaction.amount)}
          displayType="text"
          thousandSeparator
        />
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
