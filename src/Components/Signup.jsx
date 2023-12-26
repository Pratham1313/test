import { useState } from "react";
import "./hero.css"
import { Link } from "react-router-dom";

export default function Signup()
{
  const[password,setpassword]=useState("")
  const[show,setshow]=useState(false)
    return(
        <>     
      <div className="backgroundd bg-cover overflow-hidden relative">
            <div className="bg-black/60 w-full h-screen flex items-center xs:px-0 xs:items-end xs:pb-[180px] ">
                <div className="w-[380px]  z-10 bg-black/70 mx-auto lg:w-[430px] rounded-md px-8 pt-16 pb-24 xs:pt-9 shadow-[B6C4B6] shadow-sm border-stone-900 text-white" >
                    <h1 className="text-white font-semibold text-3xl">Sign Up</h1>
                    <form className=" mt-[40px]">
                    <input className="w-full h-[8vh] xs:h-[6.5vh] rounded-sm  bg-[#333333] border-b-[3px] border-gray-300 focus:border-green-500 focus:outline-none p-2" placeholder="  Email" autoComplete="email" required/> 
                    <div className="relative">
                      <input type={show?"text":"password"} className="w-full h-[8vh] xs:h-[6.5vh] rounded-sm mt-[25px] bg-[#333333] border-b-[3px] border-t-0 border-l-0 border-r-0 outline-none focus:ring-0 border-gray-300  focus:border-green-500 ppp p-2 " placeholder="  Password" value={password} onChange={(e)=>setpassword(e.target.value)} autoComplete="email" required/>
                      <label onClick={()=>setshow(!show)} className="text-gray-400 absolute top-[39px] right-[15px] cursor-pointer select-none">{show?"Hide":"Show"}</label>
                      </div>
                      <button className=" w-full h-[7vh] bg-green-900 rounded-sm  text-xl font-medium mt-[25px]">Sign Up</button>
                      <div className="flex justify-between mt-2">
                      <div className="flex">
                      <Link to='/Login' className="flex">
                          <p className=" font-light">{"Already Have Account?"}</p>
                          <p className=" font-medium text-gray-300 cursor-pointer duration-150 hover:text-white">Sign In</p>
                          </Link>
                      </div>
                      
                      </div>
                    </form>
                </div>
            </div>
      </div>
        </>
    );
}