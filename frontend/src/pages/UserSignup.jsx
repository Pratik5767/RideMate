import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const UserSignup = () => {
    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <div className="flex items-center justify-between mb-5">
                    <img className="h-12 w-20" src={assets.logo} alt="Ride" />

                    <Link className="hover:bg-gray-200 rounded-full p-2" to={"/"}>
                        <ChevronLeft color="black" strokeWidth={3} size={30} />
                    </Link>
                </div>

                <form>
                    <h3 className="text-base font-medium mb-2">What's your name</h3>

                    <div className='flex gap-2 mb-5'>
                        <input
                            type="text"
                            required
                            placeholder="firstname"
                            className="bg-gray-100 w-1/2 rounded px-4 py-2 border-none text-base placeholder:text-sm"
                        />

                        <input
                            type="text"
                            required
                            placeholder="lastname"
                            className="bg-gray-100 w-1/2 rounded px-4 py-2 border-none text-base placeholder:text-sm"
                        />
                    </div>

                    <h3 className="text-base font-medium mb-2">What's your email</h3>

                    <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        className="bg-gray-100 mb-5 rounded px-4 py-2 border-none w-full text-base placeholder:text-sm"
                    />

                    <h3 className="text-base font-medium mb-2">Enter password</h3>

                    <input
                        type="password"
                        required
                        placeholder="**********"
                        className="bg-gray-100 mb-5 rounded px-4 py-2 border-none w-full text-base placeholder:text-sm"
                    />

                    <button className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                        Register
                    </button>
                </form>

                <p className="text-center">
                    Already have an account? <Link to={"/login"} className="text-blue-600">Login here</Link>
                </p>
            </div>

            <div>
                <p className='text-[10px] leading-tight'>
                    By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from RideMate and its affiliates to the number provided.
                </p>
            </div>
        </div>
    )
}

export default UserSignup