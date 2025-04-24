import logo from "../assets/logo.png"

const RestaurantCard = () => {
    
    return (
        <div className="w-64 m-2 p-2">
            <div className="relative ">
                <img src={logo} className="rounded-xl" />
                <div className="absolute top-0 mt-40 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-600 rounded-xl">
                    <span className="text-white font-semibold text-left px-4">Offers</span>
                </div>
            </div>
            <div className="px-4 mt-3">
                <p>Name : </p>
                <p>Rating : </p>
                <p>Des : </p>
                <p>area : </p>
            </div>
        </div>
    )

}
export default RestaurantCard