import { useState } from "react";
import { Chart } from "react-google-charts";

export default function Home({
  income,
  setincome,
  income_submit,
  setincome_submit,
  expenses,
  setexpense,
}) {
  return (
    <>
      {income_submit ? (
        <AddExpense
          income={income}
          expenses={expenses}
          setexpense={setexpense}
        />
      ) : (
        <AddIncome
          income={income}
          setincome={setincome}
          income_submit={income_submit}
          setincome_submit={setincome_submit}
        />
      )}
    </>
  );
}

function AddIncome({ income, setincome, income_submit, setincome_submit }) {
  function submit_income(e) {
    e.preventDefault();

    if (!income) return;
    setincome_submit(true);
  }
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className="w-full h-[11vh] bg-black"></div>
        <div className="flex justify-center">
          <div className="w-[380px] h-[300px] bg-black px-8 pt-16 pb-24 xs:pt-9 shadow-[B6C4B6] border-[.1rem] border-gree shadow-sm border-stone-900 text-white mt-[6rem] xs:mt-[16rem]">
            <form>
              <h1 className="text-white font-semibold text-3xl">
                Enter Your Income
              </h1>
              <input
                value={income}
                onChange={(e) => setincome(e.target.value)}
                type="number"
                className="w-full h-[8vh] xs:h-[6.5vh] rounded-sm mt-[25px] bg-[#333333] border-b-[3px] border-t-0 border-l-0 border-r-0 outline-none focus:ring-0 border-gray-300  focus:border-green-500 ppp p-2 "
                required
              />
              <button
                onClick={submit_income}
                className="w-full h-[8vh] bg-green-900 rounded-sm  text-xl font-medium mt-[30px] hover:bg-green-600 duration-500"
              >
                Enter Income
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function AddExpense({ income, expenses, setexpense }) {
  const [exp_name, setexp_name] = useState("");
  const [exp_amount, setexp_amount] = useState("");
  const [datee, setdatee] = useState("");
  const [type, set_type] = useState("Food");

  var Foodd=1;
  var Housing=1;
  var Travel=1;
  var Health=1;
  var Other=1;

  let initial=0;
  expenses.map((item)=>
  {
      initial=initial+item.exp_amount
      if(item.type=="Food") 
      return(Foodd+=item.exp_amount);
      if(item.type=="Housing") 
      return(Housing+=item.exp_amount);
      if(item.type=="Travel") 
      return(Travel+=item.exp_amount);
      if(item.type=="Health") 
      return(Health+=item.exp_amount);
      if(item.type=="Other") 
      return(Other+=item.exp_amount)
  })

  let Remaining= income-initial;

  const options = {
    title: "My Expense's",
    backgroundColor: {
      fill: "#ffff",
      fillOpacity: 0.8,
    },
  };


  expenses.map((item)=>{
    
  })

  const data = [
    ["Task", "Expense"],
    ["Food", Foodd],
    ["Housing", Housing],
    ["Travel", Travel],
    ["Health", Health],
    ["Other's", Other],
  ];

  function add_expense(e) {
    e.preventDefault();
    const list = { exp_name, exp_amount, datee, type };
    if (!exp_amount) return;
    if (!exp_name) return;
    if (!datee) return;
    if (!type) return;

    setexpense(() => [...expenses, list]);
    console.log(expenses);
    set_type("Food");
    setdatee("");
    setexp_amount("");
    setexp_name("");
  }

  return (
    <>
      <div className="w-full h-fit bg-black">
        <div className="w-full h-[11vh] bg-black/50 border-b-0.1rem border-white "></div>
        <div className="flex-col">
          <div className="flex flex-wrap">
            <div className="w-[30rem] h-[89vh] xs:h-[65vh]  bg-slate-900">
              <div className="w-[380px]  z-10 bg-black/70 mx-auto lg:w-[430px] rounded-md px-8 pt-16 pb-24 xs:pt-9 shadow-[B6C4B6] shadow-sm border-stone-900 text-white mt-10 xs:mt-10">
                <h1 className="text-white font-semibold text-3xl">
                  Enter Expenses
                </h1>
                <form className=" mt-[40px]" onSubmit={add_expense}>
                  <input
                    className="w-full h-[8vh] xs:h-[6.5vh] rounded-sm  bg-[#333333] border-b-[3px] border-gray-300 focus:border-green-500 focus:outline-none p-2"
                    placeholder="  Expense Name"
                    value={exp_name}
                    onChange={(e) => setexp_name(e.target.value)}
                    required
                  />
                  <input
                    type="date"
                    value={datee}
                    onChange={(e) => setdatee(e.target.value)}
                    className="w-full h-[8vh] xs:h-[6.5vh] rounded-sm bg-[#333333] mt-[25px] focus:outline-none border-b-[3px] border-gray-300 border-r-0 focus:border-green-500  border-t-0 border-l-0 focus:ring-0"
                    required
                  />
                  <div className="flex justify-between">
                    <>
                      <input
                        value={exp_amount}
                        onChange={(e) => setexp_amount(e.target.value)}
                        className=" w-[60%] h-[8vh] xs:h-[6.5vh] rounded-sm mt-[25px] bg-[#333333] border-b-[3px] border-t-0 border-r-0 border-l-0 border-gray-300   focus:border-green-500 focus:outline-none p-2 focus:ring-0"
                        type="number"
                        placeholder="  Amount"
                        required
                      />
                    </>
                    <>
                      <select
                        className=" outline-none bg-[#333333] mt-[25px] border-b-[3px] border-gray-300 border-r-0  border-t-0 border-l-0 focus:outline-none focus:ring-0 focus:border-green-500"
                        value={type}
                        onChange={(e) => set_type(e.target.value)}
                      >
                        <option value="Food">Food</option>
                        <option value="Housing">Housing</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                        <option value="Other">Other</option>
                      </select>
                    </>
                  </div>
                  <button
                    onClick={add_expense}
                    className=" w-full h-[8vh] bg-green-900 rounded-sm  text-xl font-medium mt-[25px] xs:h-[6.5vh]"
                  >
                    Enter
                  </button>
                </form>
              </div>
            </div>

            <div className=" flex-col w-[67vw]">
            <div className="flex justify-between flex-wrap gap-11">
              <div className="w-[380px] h-[5rem] xs:h-[10rem] mt-[3rem] xs:mt-0 text-white flex mx-center justify-center items-center">
                <div className=" flex-col text-xl">
                  <div className="flex gap-5 ">
                    <p className=" ">Spent </p>
                    <p>₹{initial}/-</p>
                  </div>
                  <div className="flex gap-3">
                    <p>Remaining </p>
                    <p>₹{Remaining}/-</p>
                  </div>
                </div>
              </div>
              <div className="w-[330px] h-[200px] bg-black xs:w-full mx-auto xs:mt-2 mt-5 ">
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"100%"}
                  height={"200px"}
                />
              </div>
            </div>
            <div className="flex-col relative">
                
                <div className="w-[90%] h-11 bg-green-800 mx-auto mt-10 rounded-t-xl flex  items-center px-12 text-white gap-24">
                    <p className="w-[1%] ">No</p>
                    <p>Expense Name</p>
                    <p className="ml-6">Type</p>
                    <p>Amount</p>
                    <p>Date</p>
                </div>
                <div className=" w-[90%] h-[18rem] overflow-scroll ml-10 mt-6">
                

                {expenses.map((item,i)=>{
                    return(
                    <div className="w-[90%] h-11 bg-gray-400 mx-auto  flex  items-center px-8 text-white gap-24 ">
                        <p>{i+1}</p>
                        <p>{item.exp_name}</p>
                        <p className="ml-[8rem]">{item.type}</p>
                        <p className="ml-[10px]">{item.exp_amount}</p>
                        <p>{datee}</p>
                    </div>
                    )
                })}
                <div className="w-full h-10"></div>
                </div>
                
                
            
            
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
