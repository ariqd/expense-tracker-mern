import { useContext } from "react";
import NumberFormat from "react-number-format";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your balance is</h4>
      <h1>
        Rp <NumberFormat value={total} displayType="text" thousandSeparator />
      </h1>
    </>
  );
};

export default Balance;
