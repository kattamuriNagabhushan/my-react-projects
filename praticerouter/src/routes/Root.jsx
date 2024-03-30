import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Rootcontent from "./Rootcontent";


export default function Root() {
    return (
      <>
        <div>

            <div>

              <Navbar/>

            </div>

            <div>
              <h2 className='font-bold text-3xl'>content of the root page or Home page</h2>
              <Outlet/>

              
            </div>
            


        </div>
      </>
    );
  }