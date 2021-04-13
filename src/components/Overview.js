import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

import Expenses from "./Expenses";
import Incomes from "./Incomes";

const Overview = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transactions) => transactions.amount);

  return (
    <div className="inc-exp-container">
      <Incomes amounts={amounts} />
      <Expenses amounts={amounts} />
    </div>
  );
};

export default Overview;
