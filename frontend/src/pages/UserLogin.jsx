import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
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
                    <img className="h-12 w-20" src={assets.logo} alt="Ride" />

                    <Link className="hover:bg-gray-200 rounded-full p-2" to={"/"}>
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
                    New here? <Link to={"/signup"} className="text-blue-600 hover:underline">Create new account</Link>
                </p>
            </div>

            <div>
                <Link to={"/captain-login"} className="flex items-center justify-center bg-green-200 text-green-600 font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                    SignIn as Caption
                </Link>
            </div>
        </div>
    )
}

export default UserLogin;