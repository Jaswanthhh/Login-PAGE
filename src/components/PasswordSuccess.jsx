import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordSuccess = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
                {/* Success Icon */}
                <span className="text-4xl">🎉</span>

                {/* Success Message */}
                <h2 className="text-2xl font-bold text-gray-900 mt-4">
                    Password Update Successfully
                </h2>
                <p className="text-gray-600 mt-2">
                    Your password has been updated successfully.
                </p>

                {/* Back to Login Button */}
                <button
                    onClick={() => navigate("/")}
                    className="w-full bg-blue-500 text-white py-3 rounded-md mt-6 hover:bg-blue-600"
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default PasswordSuccess;
