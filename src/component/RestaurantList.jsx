import { useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { RESTAURANT_LIST } from "../utils/constant"


const RestaurantList = () => {
    //const[listofRestuarant, SetlistofRestuarant]= useState([])
    const FetchRestaurant = async()=>{
        const data= await fetch(RESTAURANT_LIST);
        const json = await data.json()
        console.log(json);
       // SetlistofRestuarant(json)
        
    }
    useEffect(()=>{
        FetchRestaurant()
    },[])


    return (
        <div>
            <h1 className="text-3xl text-center font-bold underline">
                Resturant List</h1>
                <RestaurantCard/>
        </div>
    )
}
export default RestaurantList