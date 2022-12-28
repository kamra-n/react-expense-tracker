import { createContext, useEffect, useState } from "react";

const AppContextData = createContext();
// transectionArray

export function AppContext({ children }) {
  const [transection, setTransection] = useState([]);
  const [expense, setExpense] = useState(null);
  const [income, setIncome] = useState(null);

  // add transection to existing array of object
  const addTransectionHandler = (obj) => {
    setTransection([...transection, obj]);
  };

  //delete transection from an existing array of object
  const deleteTransection = (id) => {
    const filterArray = transection.filter((transection) => id != transection.id)
    setTransection(filterArray)
  }

  // calculate total amount of expense and income
  const calculateAmount = () => {
    let exp = 0;
    let inp = 0;
    transection.reduce(function (a, transection) {
      return transection.type == "expense"
        ? (exp = exp + +transection.amount)
        : (inp = inp + +transection.amount);
    }, 0);
    setExpense(exp);
    setIncome(inp);
  };
  useEffect(() => calculateAmount(), [transection]);

  return (
    <AppContextData.Provider
      value={{
        name: "kamran created boiler plate",
        transection,
        addTransectionHandler,
        expense,
        income,
        deleteTransection
      }}
    >
      {children}
    </AppContextData.Provider>
  );
}

export default AppContextData;
