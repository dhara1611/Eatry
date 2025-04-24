import { useEffect, useState } from "react"
import { CUSINE_LIST } from "../utils/constant"
import Cusine from "./Cusine"

const Body = () => {
    const[Listofcusines, SetListofcusines]= useState([])
   
    useEffect(()=>{
        const Fetchdata = async () => {
            const data = await fetch(CUSINE_LIST);
            const json = await data.json();
            // console.log("Actual response 👇");
            // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards);
        
            
            SetListofcusines(json); // <- try this if above doesn't work
            
          };
        
          Fetchdata();
          
    },[])


    return (
        <div>
            <h1 className="text-3xl text-center font-bold underline">
                Resturant List</h1>
            
               <Cusine cusineList ={Listofcusines}/>
        </div>
    )
}
export default Body