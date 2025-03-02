import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeVerification = () => {
    const [email, setEmail] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    // Handle OTP input
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Handle email submission
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address ⚠️");
            return;
        }
        alert(`OTP sent to ${email} ✅`);
        setEmailSubmitted(true);
    };

    // Handle OTP submission
    const handleOtpSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join("");
        if (otpValue.length === 6) {
            alert("OTP Verified ✅");
            navigate("/reset-password", { state: { email, verified: true } });
        } else {
            alert("Please enter a complete verification code");
        }
    };

    return (
        <div className="flex h-screen w-screen">
            {/* Left Side - Email/OTP Input */}
            <div className="w-1/2 bg-blue-100 flex flex-col justify-center px-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {emailSubmitted ? "Enter Verification Code" : "Enter Your Email"}
                </h2>

                <p className="text-gray-600 mb-6">
                    {emailSubmitted
                        ? `A 6-digit code has been sent to ${email}.`
                        : "Please enter your registered email to receive an OTP."}
                </p>

                <form onSubmit={emailSubmitted ? handleOtpSubmit : handleEmailSubmit}>
                    {!emailSubmitted ? (
                        // Email Input Field
                        <div className="mb-6">
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    ) : (
                        // OTP Input Fields
                        <div className="flex gap-2 mb-6 justify-center">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md bg-white text-black font-bold focus:outline-none focus:border-blue-500"
                                />
                            ))}
                        </div>
                    )}

                    {/* Button: Send OTP or Verify OTP */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600"
                    >
                        {emailSubmitted ? "Verify OTP" : "Send OTP"}
                    </button>
                </form>
            </div>

            {/* Right Side - Illustration */}
            <div className="w-1/2 bg-white flex justify-center items-center">
                <img src="/src/assets/employee-verification.png" alt="Employee Verification Illustration" className="w-3/4" />
            </div>
        </div>
    );
};

export default EmployeeVerification;
