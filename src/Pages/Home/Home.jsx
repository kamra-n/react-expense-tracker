import Addexpenses from "../../Components/Addexpensecomponent/Addexpenses";
import ShowIncome from "../../Components/ShowIncome/ShowIncome"
import ShowExpenses from "../../Components/ShowExpense/ShowExpenses";
import ShowItemsLIst from "../../Components/ShowITemsList/ShowItemList"
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-5 lg:flex lg:flex-row lg:py-0 lg:justify-center lg:items-center gap-4 lg:gap-6">
        <ShowExpenses />
        <Addexpenses />
        <ShowIncome />
      </div>

      <div className='flex justify-center items-center mt-2'>
        <ShowItemsLIst />
      </div>
    </>
  )
}
