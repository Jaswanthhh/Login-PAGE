import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [userType, setUserType] = useState("superadmin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Please enter valid credentials ⚠️");
            return;
        }
        alert(`${userType} Login Successful ✅`);
        navigate(`/${userType}-dashboard`); // Redirect based on user type
    };

    return (
        <div className="flex h-screen w-screen">
            {/* Left Side - Company Info */}
            <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-white p-10">
                <h1 className="text-xl font-bold text-gray-900 mb-2">Company Name</h1>
                <p className="text-gray-500 text-sm mb-2">Logo Here</p>
                <p className="text-gray-600 text-center mt-4 max-w-md">
                    Welcome to the HRM System. Log in to manage your personal information, 
                    time and attendance, and performance reviews securely.
                </p>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-blue-100 p-10">
                {/* User Type Selection */}
                <div className="flex space-x-4 mb-6">
                    {["superadmin", "adminHR", "senior", "intern"].map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-2 rounded-full text-sm ${
                                userType === type ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                            }`}
                            onClick={() => setUserType(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
                <h3 className="text-xl font-bold text-blue-900 mt-2">
                    {userType.charAt(0).toUpperCase() + userType.slice(1)} Login
                </h3>
                <p className="text-gray-600 mb-6">Log in to your account to continue</p>

                <form onSubmit={handleLogin} className="w-full max-w-md">
                    {/* Email Input */}
                    <div className="mb-4">
                        <input
                            type="email"
                            className="w-full p-3 border border-blue-300 rounded-full bg-blue-200 text-gray-700 placeholder-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <input
                            type="password"
                            className="w-full p-3 border border-blue-300 rounded-full bg-blue-200 text-gray-700 placeholder-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between mb-4 w-full">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <span className="text-gray-600 text-sm">Remember me</span>
                        </label>
                        <button
                            type="button"
                            onClick={() => navigate(`/employee-verification?user=${userType}`)}
                            className="text-blue-600 text-sm hover:underline"
                        >
                            Forgot your password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition-all duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
