import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
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
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
