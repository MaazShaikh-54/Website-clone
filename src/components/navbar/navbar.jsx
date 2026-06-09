import { useState, useEffect } from 'react';
import './navbar.css';
import PentaKUHL from '../../assets/pentaKuhl.png';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [pentaOpen, setPentaOpen] = useState(false);
    const pathname = window.location.pathname;

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }, [isMenuOpen]);

    return (
        <>
            <nav className="block">
                <div className="flex md:hidden items-center justify-between px-6 py-3">
                    <button className="pt-2 px-3 pb-1.5 cursor-pointer text-white bg-[#F06C30] border-0 rounded-xl font-bold">Contact</button>
                    <div className="flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center gap-8 px-6 py-4 text-sm font-medium">
                    <a className={pathname === '/' ? 'text-[#f06c30] font-bold' : 'text-black'} href="/">HOME</a>
                    <a className={pathname === '/about-us' ? 'text-[#f06c30] font-bold' : 'text-black'} href="/about-us">ABOUT US</a>
                    <div className="relative group cursor-pointer">
                        <span className="flex items-center gap-1 text-black">SERVICES <ChevronDown size={14} /></span>
                        <div className="absolute top-6 left-0 bg-white shadow-md hidden group-hover:block w-48 z-50">
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/services/air-freight">Air Freight</a>
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/services/sea-freight">Sea Freight</a>
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/services/multi-modal">Multi Modal Transport</a>
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/services/project-cargo">Project Cargo</a>
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/services/custom-broking">Custom Broking</a>
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/services/transit-warehouse">Transit Warehouse And Fleet</a>
                        </div>
                    </div>
                    <div className="relative group cursor-pointer">
                        <span className="flex items-center gap-1"><img src={PentaKUHL} alt="PentaKUHL" className="h-4 w-auto" /><ChevronDown size={14} /></span>
                        <div className="absolute top-6 left-0 bg-white shadow-md hidden group-hover:block w-40 z-50">
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/penta/parcel">Parcel Shippers</a>
                            <a className="block px-4 py-2 text-sm hover:text-[#f06c30]" href="/penta/pallet">Pallet Shippers</a>
                        </div>
                    </div>
                    <a className={pathname === '/industries' ? 'text-[#f06c30] font-bold' : 'text-black'} href="/industries">INDUSTRIES</a>
                    <a className={pathname === '/careers' ? 'text-[#f06c30] font-bold' : 'text-black'} href="/careers">CAREERS</a>
                    <a className={pathname === '/contact' ? 'text-[#f06c30] font-bold' : 'text-black'} href="/contact">CONTACT</a>
                </div>

                <hr className="text-[#cccccc] w-full h-0.5" />

                <div className={`md:hidden fixed top-15 left-0 h-screen w-screen bg-white z-50 overflow-y-auto transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col justify-between min-h-[calc(100vh-60px)] navbar-links text-sm font-medium">
                        <ul className="flex flex-col items-left w-full">
                            <li className="pl-4.5 py-2.5"><a className={`font-medium ${pathname === '/' ? 'text-[#f06c30] font-black' : 'text-black'}`} href="/">HOME</a></li>
                            <hr className="border-0 border-t border-[#cccccc]" />
                            <li className="pl-4.5 py-2.5"><a className={`font-medium ${pathname === '/about-us' ? 'text-[#f06c30] font-black' : 'text-black'}`} href="/about-us">ABOUT US</a></li>
                            <hr className="border-0 border-t border-[#cccccc]" />
                            <div className="flex justify-between items-center pr-4 cursor-pointer" onClick={() => setServicesOpen(!servicesOpen)}>
                                <li className="pl-4.5 py-2.5"><a className={`font-medium ${pathname === '/services' ? 'text-[#f06c30] font-black' : 'text-black'}`}>SERVICES</a></li>
                                {servicesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </div>
                            {servicesOpen && (
                                <ul className="flex flex-col pl-6 pb-4">
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/services/air-freight">Air Freight</a></li>
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/services/sea-freight">Sea Freight</a></li>
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/services/multi-modal">Multi Modal Transport</a></li>
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/services/project-cargo">Project Cargo</a></li>
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/services/custom-broking">Custom Broking</a></li>
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/services/transit-warehouse">Transit Warehouse And Fleet</a></li>
                                </ul>
                            )}
                            <hr className="border-0 border-t border-[#cccccc]" />
                            <div className="flex justify-between items-center pr-4 cursor-pointer" onClick={() => setPentaOpen(!pentaOpen)}>
                                <li className="pl-4.5 py-2.5"><a href="#"><img src={PentaKUHL} alt="PentaKUHL" className="w-20 h-auto" /></a></li>
                                {pentaOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </div>
                            {pentaOpen && (
                                <ul className="flex flex-col pl-6 pb-4">
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/penta/parcel">Parcel Shippers</a></li>
                                    <li className="py-1.5"><a className="text-md font-[450]" href="/penta/pallet">Pallet Shippers</a></li>
                                </ul>
                            )}
                            <hr className="border-0 border-t border-[#cccccc]" />
                            <li className="pl-4.5 py-2.5"><a className={`font-medium ${pathname === '/industries' ? 'text-[#f06c30] font-black' : 'text-black'}`} href="/industries">INDUSTRIES</a></li>
                            <hr className="border-0 border-t border-[#cccccc]" />
                            <li className="pl-4.5 py-2.5"><a className={`font-medium ${pathname === '/careers' ? 'text-[#f06c30] font-black' : 'text-black'}`} href="/careers">CAREERS</a></li>
                            <hr className="border-0 border-t border-[#cccccc]" />
                            <li className="pl-4.5 py-2.5"><a className={`font-medium ${pathname === '/contact' ? 'text-[#f06c30] font-black' : 'text-black'}`} href="/contact">CONTACT</a></li>
                        </ul>
                        <div className="mt-auto pb-4 px-4">
                            <h2 className="text-lg font-medium mb-1.5">Contact Info</h2>
                            <a href="tel:+912262226222" className="font-normal text-[15px] underline leading-loose">+91 22-6222-6222</a><br />
                            <a href="https://www.google.com/maps/place/Penta+Freight+Private+Limited/@19.1078797,72.8812238,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c847fc260b55:0xa5fda13ffcdcf69!8m2!3d19.1078797!4d72.8837987!16s%2Fg%2F1tftcsx0?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD" target="_blank" className="font-normal text-[15px] underline leading-loose">902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar