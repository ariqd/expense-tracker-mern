import NumberFormat from "react-number-format";

const Expenses = ({ amounts }) => {
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <h4>Expenses</h4>
      <p className="money minus">
        Rp <NumberFormat value={expense} displayType="text" thousandSeparator />
      </p>
    </div>
  );
};

export default Expenses;
