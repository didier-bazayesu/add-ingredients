import React, { useEffect, useState } from "react";

export default function Modal({ children, onClose }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // trigger fade-in animation
        setVisible(true);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300); // wait for fade-out
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"
                }`}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(4px)",
                padding: "20px",
                boxSizing: "border-box",
            }}
        >
            <div
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-y-auto"
                style={{
                    maxHeight: "85vh",
                    padding: "30px",
                    animation: visible ? "scaleIn 0.3s ease-out" : "none",
                }}
            >
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow hover:bg-orange-600 transition cursor-pointer"
                >
                    ✕
                </button>

                {/* Modal content */}
                {children}
            </div>

            {/* Optional keyframe animation */}
            <style>
                {`
          @keyframes scaleIn {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
            </style>
        </div>
    );
}
