const Footer = () => {
    const indiaOffices = [
        {
            city: "Mumbai",
            address: "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
            phone: "+91 22-6222-6222"
        },
        {
            city: "Ahmedabad",
            address: "D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009",
            phone: "+91 7940227900"
        },
        {
            city: "Bengaluru",
            address: "205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017",
            phone: "+91 80-4112-5590"
        },
        {
            city: "Chennai",
            address: "Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114",
            phone: "+91-44-22241462/ 1464"
        },
        {
            city: "Delhi",
            address: "Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037",
            phone: "+91 11-4078-2222"
        },
        {
            city: "Hyderabad",
            address: "G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India",
            phone: "+91 40-2400-4048"
        },
        {
            city: "Kolkata",
            address: "131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal",
            phone: "+91 33-2514-7089"
        },
    ];

    return (
        <footer className="bg-white px-6 py-8">
            <h2 className="text-2xl font-bold mb-2">Our <span className="text-[#f06c30]">India</span> Offices</h2>
            <p className="text-sm text-gray-600 mb-6">Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.</p>

            {indiaOffices.map((office) => (
                <div key={office.city} className="mb-6">
                    <h3 className="font-bold text-base mb-1">{office.city}</h3>
                    <p className="text-sm text-gray-700">{office.address}</p>
                    <p className="text-sm text-gray-700 mt-1">{office.phone}</p>
                </div>
            ))}

            <h2 className="text-2xl font-bold mb-2 mt-4">Our <span className="text-[#f06c30]">USA</span> Office</h2>
            <p className="text-sm text-gray-600 mb-6">Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.</p>

            <div className="mb-6">
                <h3 className="font-bold text-base mb-1">Chicago</h3>
                <p className="text-sm text-gray-700">Penta Freight Pvt.Ltd 5100 Newport Dr. Sute 4, Rolling Meadows, IL 60008 USA</p>
                <p className="text-sm text-gray-700 mt-1">+040 234 6559 / +224 434 2154</p>
            </div>

            <hr className="border-[#cccccc] mb-4" />

            <p className="text-sm text-gray-600 text-center mb-3">© 2026 Penta Freight. All Rights Reserved Developed by Nipralo</p>

            <div className="flex items-center justify-center gap-4">
                <a href="https://linkedin.com" target="_blank" className="border border-gray-400 rounded-full p-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.864-3.059-1.865 0-2.151 1.457-2.151 2.962v5.701h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/></svg>
                </a>
                <span className="text-gray-400 text-xs">●</span>
                <a href="/privacy-policy" className="text-sm text-gray-700">Privacy Policy</a>
                <span className="text-gray-400 text-xs">●</span>
                <a href="/terms" className="text-sm text-gray-700">Terms and Conditions</a>
            </div>
        </footer>
    );
};

export default Footer;