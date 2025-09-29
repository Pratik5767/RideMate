import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
import { ArrowRight, ChevronLeft } from "lucide-react"
import { useState } from "react"

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({
        email: '',
        password: ''
    })

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        });
        setEmail('');
        setPassword('');
    }

    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-end">
                        <img className="h-12 w-20" src={assets.logo} alt="Ride" />

                        <ArrowRight size={25} strokeWidth={3} />
                    </div>

                    <Link className="hover:bg-gray-200 rounded-full p-2" to={"/login"}>
                        <ChevronLeft color="black" strokeWidth={3} size={30} />
                    </Link>
                </div>

                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className="text-base font-medium mb-2">What's your email</h3>

                    <input
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        required
                        placeholder="email@example.com"
                        className="bg-gray-100 mb-5 rounded px-4 py-2 border-none w-full text-base placeholder:text-sm"
                    />

                    <h3 className="text-base font-medium mb-2">Enter password</h3>

                    <input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        required
                        placeholder="**********"
                        className="bg-gray-100 mb-5 rounded px-4 py-2 border-none w-full text-base placeholder:text-sm"
                    />

                    <button className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                        Login
                    </button>
                </form>

                <p className="text-center">
                    Join a fleet? <Link to={"/captain-signup"} className="text-blue-600 hover:underline">Register as Caption</Link>
                </p>
            </div>

            <div>
                <Link to={"/login"} className="flex items-center justify-center bg-blue-200 text-blue-600 font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                    SignIn as User
                </Link>
            </div>
        </div>
    )
}

export default CaptainLogin;