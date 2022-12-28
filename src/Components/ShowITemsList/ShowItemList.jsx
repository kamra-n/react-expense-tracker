import { useContext } from "react";
import AppContext from "../../Context/AppContext";

export default function ShowItemList() {
  const { transection,deleteTransection } = useContext(AppContext);
  return (
    <>
      {
        transection.length == 0 ? <></> :

          <div className="bg-white  p-4 rounded-md w-4/5  mt-2  border-b-[10px] border-[blue-50] overflow-y-scroll overflow-x-hidden">

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Reason
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Type
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Amount
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transection.map((data) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={data.id}>
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data.reason}
                        </th>
                        <td className="py-4 px-6">
                          {data.type}
                        </td>
                        <td className="py-4 px-6">
                          {data.amount}
                        </td>
                        <td className="py-4 px-6">
                          {data.date}
                        </td>
                        <td className="py-4 px-6">
                          <button className="flex-1 bg-[#ff000080] border-none my-2 flex justify-center items-center text-white rounded-md p-1 cursor-pointer" onClick={()=>deleteTransection(data.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>
      }
    </>
  );
}
