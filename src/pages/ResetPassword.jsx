import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address ⚠️");
            return;
        }
        if (newPassword.length < 8) {
            alert("Password must be at least 8 characters long ⚠️");
            return;
        }
        alert("Password Reset Successful ✅");
        navigate("/"); // Redirect to Login Page
    };

    return (
        <div className="flex h-screen w-screen">
            {/* Left Side - Reset Form */}
            <div className="w-1/2 bg-blue-100 flex flex-col justify-center px-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h2>
                <p className="text-gray-600 mb-6">
                    Enter your new password below, <br />
                    and you're all set to go!
                </p>

                <form onSubmit={handleResetPassword}>
                    <div className="mb-4">
                        <label className="text-gray-700 text-sm">Email Address</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-blue-300 rounded-full bg-blue-200 text-gray-700 placeholder-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            className="w-full p-3 border border-blue-300 rounded-full bg-blue-200 text-gray-700 placeholder-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="Enter your new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Continue Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition-all duration-200"
                    >
                        Continue
                    </button>
                </form>
            </div>

            {/* Right Side - Illustration */}
            <div className="w-1/2 bg-white flex justify-center items-center">
                <img src="/src/assets/reset-password.png" alt="Reset Password Illustration" className="w-3/4" />
            </div>
        </div>
    );
};

export default ResetPassword;
