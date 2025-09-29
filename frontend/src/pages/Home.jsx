import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Home = () => {
    return (
        <div>
            <div className="bg-[url(https://images.unsplash.com/photo-1751205174576-90979955c6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxhbmltaSUyMHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] bg-cover h-screen pt-5 w-full flex justify-between flex-col bg-red-400">
                <img className="h-12 w-20 ml-7 mt-2" src={assets.logo} alt="Ride" />

                <div className="bg-white py-4 pb-7 px-4">
                    <h2 className="text-3xl font-bold">Get Started With RideMate</h2>

                    <Link to={"/login"} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home