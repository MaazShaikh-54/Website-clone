import { useState } from 'react';

const CookieBanner = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#f06c30] text-white flex items-center justify-between m-3 px-6 py-4 z-50 rounded-xl">
            <p className="text-xs">We use cookies to enhance your experience. Please accept to enjoy the full features of our site.</p>
            <button
                onClick={() => setVisible(false)}
                className="ml-4 border-2 border-white bg-white/40 text-white px-2 py-1 text-sm whitespace-nowrap rounded-md hover:bg-white hover:text-[#f06c30] transition-colors duration-300"
            >
                I Accept
            </button>
        </div>
    );
};

export default CookieBanner;