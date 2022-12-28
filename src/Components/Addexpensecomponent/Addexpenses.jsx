import { useContext, useRef } from "react";
import AppContext from "../../Context/AppContext";
function Addexpenses() {
  const { addTransectionHandler, expense, income} = useContext(AppContext);

  const reason = useRef(null);
  const amount = useRef(null);
  const type = useRef(null);
  const date = useRef(null);

  // addTransestionFormHandler

  const addTransestionFormHandler = (e) => {
    e.preventDefault();
    if (
      reason.current.value === "" ||
      amount.current.value === "" ||
      type.current.value === "" ||
      date.current.value === ""
    ) {
      return alert("please fill all data correctly");
    }

    let transectionObj = {
      id: Date.now(),
      reason: reason.current.value,
      amount: amount.current.value,
      type: type.current.value,
      date: date.current.value,
    };
    addTransectionHandler(transectionObj);
    e.target.reset()
  };

  return (
    <div className="bg-white max-w-[500px] min-w-[300px] p-4 flex-auto rounded-md lg:mt-24 max-h-[600px] order-1 lg:order-2">
      <h1 className="flex justify-start text-3xl">Expense Tracker</h1>
      <h2 className="text-center text-2xl semi-bold my-4">
        Total Balance Rs {income - expense}
      </h2>
      <h3 className="text-lg mt-2">Add your Statement</h3>
      <hr />
      <form className="mt-5" onSubmit={addTransestionFormHandler}>
        <div className="flex flex-col">
          <label htmlFor="type" className="text-xs my-2">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="w-full rounded-md drop-shadow-md"
            ref={type}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="mt-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="reason">Reason</label>
            <input
              type="text"
              id="reason"
              name="reason"
              className="w-full rounded-md drop-shadow-md"
              ref={reason}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="w-full rounded-md drop-shadow-md"
              ref={amount}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full"
              ref={date}
            />
          </div>
        </div>

        <button className="mt-5 border-2 border-[#3f51b580] text-[#3f51b5] w-full py-1 rounded-md text-lg cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
}

export default Addexpenses;
