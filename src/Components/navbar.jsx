import { Link } from "react-router-dom";
import "./hero.css";

export default function Navbar()
{
    const logo ="https://play-lh.googleusercontent.com/_IA1p-kzpnDyoutaCf9gxWME1fc76UpoLhtvm-5K3Aainu-U0ClZYS8ug-4stKjZu_s=w240-h480-rw"
    return(
        <>
        <div className="z-10 fixed w-full h-[11vh] flex items-center text-white justify-between px-10 xs:px-5    select-none	 ">
        <Link to="/">
            <div className="flex gap-2 items-center cursor-pointer  ">
                
                <img src={logo} alt="Expense Trcker" className="h-[3rem]"/>
                <p className="text-[1.2rem] ">Expense Tracker</p>
                               
            </div>
        </Link>
            <div className="flex mr-4 xs:mr-0 gap-[2rem]  relative p-2 ">
                <Link to='/'><p className="cursor-pointer text-xl relative aftter xs:mt-[6px]">App</p></Link>
                <Link to="/Login"><button className=" h-[4.8vh] w-[4.3rem] bg-green-900 rounded-md  text-xl font-medium duration-300 hover:bg-green-700">Login</button></Link>
                
            </div>
      </div>
        </>
    )
}