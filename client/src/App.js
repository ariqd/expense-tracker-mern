import Balance from "./components/Balance";
import Header from "./components/Header";
import Overview from "./components/Overview";
import TransactionsList from "./components/TransactionsList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./Context/GlobalState";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Overview />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
