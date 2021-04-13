import NumberFormat from "react-number-format";

const Incomes = ({ amounts }) => {
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <h4>Income</h4>
      <p className="money plus">
        Rp <NumberFormat value={income} displayType="text" thousandSeparator />
      </p>
    </div>
  );
};

export default Incomes;
