import React, { useEffect, useState } from "react";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (!show) return null;

    return (
        <button
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="!fixed bottom-8 pizza-cheese right-8 size-[50px] text-2xl z-[9] bg-prime text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-linear hover:scale-110">
            ↑
        </button>
    );
};

export default BackToTop;
