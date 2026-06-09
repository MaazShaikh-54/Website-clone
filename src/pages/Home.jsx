import { useEffect, useRef, useState } from 'react'
import './home.css'
import Navbar from '../components/navbar/navbar.jsx'
import Footer from '../components/footer/footer.jsx'
import HomeVideo from '../assets/homevideo.mp4'
import AirplaneSky from '../assets/airplanesky.png'
import Lineseffect from '../assets/lineseffect.png'
import Blur from '../assets/blureffect.png'
import ComprehensiveIcon from '../assets/settingwheel.png'
import ExpertiseIcon from '../assets/badge.png'
import FacilityIcon from '../assets/truck.png'
import AwardImage1 from '../assets/awards/emirates.png'
import AwardImage2 from '../assets/awards/delta.png'
import AwardImage3 from '../assets/awards/maskargo.png'
import AwardImage4 from '../assets/awards/concor.png'
import AwardImage5 from '../assets/awards/airfrance.png'
import AwardImage6 from '../assets/awards/finnair.png'
import AwardImage7 from '../assets/awards/iag.png'
import AwardImage8 from '../assets/awards/thestat.png'
import AwardImage9 from '../assets/awards/turkey.png'
import AwardImage10 from '../assets/awards/singapore.png'
import AwardImage11 from '../assets/awards/lufthansa.png'
import AwardImage12 from '../assets/awards/british.png'
import AwardImage13 from '../assets/awards/qatar.png'
import AwardImage14 from '../assets/awards/swiss.png'
import Certification1 from '../assets/certification/acfi.png'
import Certification2 from '../assets/certification/aon.png'
import Certification3 from '../assets/certification/bchaa.png'
import Certification4 from '../assets/certification/aeo.png'
import Certification5 from '../assets/certification/ffai.png'
import Certification7 from '../assets/certification/fiata.png'
import Certification8 from '../assets/certification/iso.png'
import Certification9 from '../assets/certification/mto.png'
import Certification10 from '../assets/certification/pharma.png'
import Certification11 from '../assets/certification/indo-italian.png'
import Certification12 from '../assets/certification/wca.png'
import Certification13 from '../assets/certification/gdp.png'
import Certification14 from '../assets/certification/accai.png'
import Reviewer1 from '../assets/review/lufthansa.png'
import Reviewer2 from '../assets/review/lufthansa.png'
import Reviewer3 from '../assets/review/watson.png'
import Reviewer4 from '../assets/review/sun.png'
import ServiceBg1 from '../assets/service/Artboard1.png'
import ServiceBg2 from '../assets/service/Artboard2.png'
import ServiceBg3 from '../assets/service/Artboard3.png'
import ServiceBg4 from '../assets/service/Artboard4.png'
import ServiceBg5 from '../assets/service/Artboard4.png'
import ServiceBg6 from '../assets/service/Artboard6.png'


const awardsData = [
    {
        image: AwardImage1,
        description: [
            "Top Cargo Agents. 2016/17",
            "Top Cargo Agents. 2005/06",
        ],
    },
    {
        image: AwardImage2,
        description: [
            "Top Revenue Performance, 2002",
        ],
    },
    {
        image: AwardImage3,
        description: [
            "Mega Tonners. 2006/07",
        ],
    },
    {
        image: AwardImage4,
        description: [
            "Concor Exim Star, 2003/04",
        ],
    },
    {
        image: AwardImage5,
        description: [
            "Meritorious Performance, 1999/2000",
        ],
    },
    {
        image: AwardImage6,
        description: [
            "Top Performance, 2008",
            "Top Performance, 2007",
        ],
    },
    {
        image: AwardImage7,
        description: [
            "Significance Support and Contribution, 2007",
        ],
    },
    {
        image: AwardImage8,
        description: [
            "International Award for Excellence in Air Cargo, Region India - Winner, 2018",
        ],
    },
    {
        image: AwardImage9,
        description: [
            "Best Performance, 2017",
            "Excellence Revenue Performance, 2016",
            "Best Performance, 2014",
            "Cargo Agency, 2013",
            "Cargo Agency, 2011",
        ],
    },
    {
        image: AwardImage10,
        description: [
            "Top Cargo Agent, 2003/04",
            "Top Cargo Agent, 2002/03",
            "Top Cargo Agent, 2001/02",
            "Top Cargo Agent, 1999/2000",
        ],
    },
    {
        image: AwardImage11,
        description: [
            "Outstanding Performance, 2007",
            "Outstanding Quality, 2007",
            "Outstanding Performance Quality, 2007",
            "Outstanding Performance, 2006",
            "Premium Partner, 2017",
            "Asia Partner, 2014",
        ],
    },
    {
        image: AwardImage12,
        description: [
            "Best Business Mix, 2006/07",
            "Significant Contribution, 2000/01",
            "Significant Contribution, 1999/2000",
        ],
    },
    {
        image: AwardImage13,
        description: [
            "Top Performer, 2017",
            "Quality and Reliability, 2007",
        ],
    },
    {
        image: AwardImage14,
        description: [
            "Customer Recognition, 2013",
        ],
    },
];

const certifications = [
    { image: Certification1 },
    { image: Certification2 },
    { image: Certification3 },
    { image: Certification4 },
    { image: Certification5 },
    { image: Certification7 },
    { image: Certification8 },
    { image: Certification9 },
    { image: Certification10 },
    { image: Certification11 },
    { image: Certification12 },
    { image: Certification13 },
    { image: Certification14 },
];

const reviewsData = [
    {
        image: Reviewer1,
        name: "Frank Naeve",
        designation: "Vice President Asia Pacific",
        review:
            "“Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”",
    },
    {
        image: Reviewer2,
        name: "Frank Naeve",
        designation: "Vice President Asia Pacific",
        review:
            "“Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”",
    },
    {
        image: Reviewer3,
        name: "Ryan Veigas",
        designation: "Vice President - Supply Chain & Procurement",
        review:
            "“Penta Freight has been one of our export LSP’s for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success. ”",
    },
    {
        image: Reviewer4,
        name: "Makarand Sane",
        designation: "General Manager Head - Export Logistics",
        review:
            "“We highly regard Penta Freight's professionalism and knowledge in the freight field.  Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making thing possible. They have continued to innovate and change with the freight industry.... ”",
    },
];

const servicesData = [
    {
        title: "Air Freight",
        image: ServiceBg1,
        points: [
            "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
            "Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
        ],
        chips: ["Speed", "Efficiency", "Reliability", "Affordability"],
    },
    {
        title: "Sea Freight",
        image: ServiceBg2,
        points: [
            "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.",
            "With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.",
            "We provide flexible FCL scheduling and cost-efficient LCL options. On-demand pickup, drop-off, and warehousing help cut costs and transit time.",
        ],
        chips: ["Flexibility", "Cost-Effective", "Scalability", "Expertise"],
    },
    {
        title: "Multi Modal Transport",
        image: ServiceBg3,
        points: [
            "Every shipment is unique, so we offer multiple affordable transport options.",
            "Along with air and sea freight, we provide multimodal transport via our global network.",
            "Our tailored solutions enable real-time cargo tracking. We streamline your supply chain as your single point of contact.",
        ],
        chips: ["Integration", "Efficiency", "Visibility", "Convenience"],
    },
    {
        title: "Project Cargo",
        image: ServiceBg4,
        points: [
            "We understand the precise needs of customers and shipping lines, ensuring cargo is stuffed, lashed, and choked to specifications.",
            "We handle logistics, clearance, and oversized or breakbulk cargo with expertise.",
            "We transport over-dimensional cargo using open tops, flat racks, and flatbeds.",
        ],
        chips: ["Precision", "Expertise", "Oversized", "Security"],
    },
    {
        title: "Custom Broking",
        image: ServiceBg5,
        points: [
            "Our licensed customs agents know domestic and international regulations.",
            "With 30+ years of experience, we have strong ties with authorities and handle all clearance challenges.",
            "We ensure smooth, timely, and transparent cargo clearance. Our experts get your documentation right the first time.",
        ],
        chips: ["Accuracy", "Compliance", "Speed", "Expertise"],
    },
    {
        title: "Transit Warehouse and Fleet",
        image: ServiceBg6,
        points: [
            "Our transit warehouse is near the International Air Cargo Complex and Ocean Ports.",
            "We offer storage for all cargo types, including temperature-controlled (15–25°C, 2–8°C), DGR, and general cargo zones.",
            "We provide specialized packaging, palletizing, and shrink wrapping.",
            "Our reefer and general trucks ensure smooth nationwide transportation.",
        ],
        chips: ["Specialized", "Accessible", "Versatile", "Nationwide"],
    },
];

const Home = () => {
    const [startCount, setStartCount] = useState(false);
    const [offices, setOffices] = useState(0);
    const [experts, setExperts] = useState(0);
    const [awards, setAwards] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= reviewsData.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev <= 0 ? reviewsData.length - 1 : prev - 1
        );
    };

    const achievementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (achievementRef.current) {
            observer.observe(achievementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!startCount) return;

        const animateValue = (setter, target, duration = 2000) => {
            let current = 0;

            const increment = target / (duration / 16);

            const timer = setInterval(() => {
                current += increment;

                if (current >= target) {
                    setter(target);
                    clearInterval(timer);
                } else {
                    setter(Math.floor(current));
                }
            }, 16);
        };

        animateValue(setOffices, 7, 1000);
        animateValue(setExperts, 200, 2000);
        animateValue(setAwards, 50, 1500);
    }, [startCount]);

    return (
        <div>
            <Navbar />
            <div className="m-0 p-0 flex flex-col h-screen">
                <video src={HomeVideo} autoPlay loop muted></video>
                <div className="relative w-full h-full flex items-center justify-center">
                    <img src={AirplaneSky} alt="Image" className="w-[500px] h-[400px] object-cover" />
                    <img src={Blur} alt="Image" className="absolute top-0 left-0 w-full h-[700px] object-cover z-10" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
                        <h3 className="text-lg font-bold z-20 text-[#F06C30] mb-3">ABOUT US</h3>
                        <hr className='w-[140px] h-1 bg-[#F06C30] border-0 mb-2.5' />
                        <h3 className="text-lg font-bold z-20 text-[#F06C30] mb-3.5">PENTA FRIEGHT</h3>
                        <p className="w-[90%] text-lg text-center z-20 text-[#425462] mb-3.5">Penta Freight provides reliable <span className="font-[700]">logistics solutions</span>, specializing in temperature-sensitive shipments. We ensure safe, <span className="font-[700]">on-time delivery</span> worldwide. Trust us for seemless supply chain management.</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-[#425462]">
                <img src={Lineseffect} alt="Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                <h3 className="text-3xl font-medium text-[#F06C30] mb-6">Our Philosophy</h3>
                <p className="w-[90%] text-md text-center text-white pb-4">Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and excellence.</p>
                <button className="pt-2 px-8 pb-1.5 cursor-pointer text-white bg-[#F06C30] border-0 rounded-xl font-bold" >Read More</button>
            </div>

            <div className="relative px-4 lg:px-10">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="sticky mb-10"
                        style={{
                            top: `${20 + index * 18}px`,
                            zIndex: index + 1,
                        }}
                    >
                        <div
                            className="relative h-[750px] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500"
                            style={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",

                                // subtle stack scaling
                                transform: `scale(${1 - index * 0.012})`,
                                transformOrigin: "top center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/50" />

                            <div className="relative z-10 h-full flex flex-col p-8 lg:p-14">

                                <div>
                                    <h3 className="text-2xl lg:text-5xl font-semibold text-white mb-6">
                                        {service.title}
                                    </h3>

                                    <div className="space-y-2 max-w-3xl mb-4">
                                        {service.points.map((point, i) => (
                                            <p
                                                key={i}
                                                className="text-white/90 text-md"
                                            >
                                                {point}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.chips.map((chip, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-2 rounded-xl bg-transparent border border-white text-white"
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="px-8 py-3 bg-[#F06C30] rounded-xl text-white font-medium">
                                        Read More
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

                <div className="h-[300px]" />
            </div>

            <div className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-14">
                        <div className="flex items-center gap-0">
                            <span className="w-1.5 h-1.5 bg-[#000000] rounded-full mr-2"></span>
                            <button className="px-6 py-2 border border-gray-300 rounded-full text-sm bg-white">
                                Why us
                            </button>
                        </div>

                        <h2 className="mt-6 text-2xl lg:text-5xl font-medium leading-tight">
                            Why choose <span className="text-[#808080]">Penta Freight.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                        <div>
                            <img
                                src={ComprehensiveIcon}
                                alt="Comprehensive Solutions"
                                className="w-15 h-15 mb-6"
                            />

                            <h3 className="text-xl font-normal mb-2">
                                Comprehensive Solutions
                            </h3>

                            <p className="text-[#808080] text-md leading-relaxed">
                                Full-spectrum logistics services including air, sea, and multimodal
                                transport for seamless handling of your cargo.
                            </p>
                        </div>

                        <div>
                            <img
                                src={ExpertiseIcon}
                                alt="Expertise and Experience"
                                className="w-15 h-15 mb-6"
                            />

                            <h3 className="text-xl font-normal mb-2">
                                Expertise and Experience
                            </h3>

                            <p className="text-[#808080] text-md leading-relaxed">
                                Over 30+ years of experience with skilled customs agents ensuring
                                accurate clearance and secure delivery.
                            </p>
                        </div>

                        <div>
                            <img
                                src={FacilityIcon}
                                alt="State-of-the-Art Facilities"
                                className="w-15 h-15 mb-6"
                            />

                            <h3 className="text-xl font-normal mb-2">
                                State-of-the-Art Facilities
                            </h3>

                            <p className="text-[#808080] text-md leading-relaxed">
                                Advanced transit warehouse with specialized storage and a fleet of
                                reefer and general trucks for efficient nationwide transport.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div
                ref={achievementRef}
                className="relative w-full bg-[#425462] py-12 lg:py-20 px-6 lg:px-16 overflow-hidden"
            >
                <img
                    src={Lineseffect}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-2">

                    <div className="w-full lg:w-[40%] text-center lg:text-left mb-14 lg:mb-0">
                        <h3 className="text-3xl lg:text-5xl font-bold text-[#F06C30] mb-4 lg:mb-6">
                            Our Achievements
                        </h3>

                        <p className="text-white text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                            Over 31+ years of excellence, trusted globally, delivering reliable
                            logistics solutions with precision.
                        </p>
                    </div>

                    <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-y-12 lg:gap-y-16 gap-x-10 text-white">

                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <span className="text-4xl lg:text-6xl font-medium">
                                    {offices}
                                </span>
                                <span className="text-3xl lg:text-4xl font-bold">+</span>
                            </div>
                            <h4 className="text-xl lg:text-2xl mt-2">
                                Strategic Domestic Offices
                            </h4>
                        </div>


                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <span className="text-4xl lg:text-6xl font-medium">
                                    {experts}
                                </span>
                                <span className="text-3xl lg:text-4xl font-bold">+</span>
                            </div>
                            <h4 className="text-xl lg:text-2xl mt-2">
                                Logistics Experts
                            </h4>
                        </div>

                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <span className="text-4xl lg:text-6xl font-medium">USA</span>
                            </div>
                            <h4 className="text-xl lg:text-2xl mt-2">
                                Global Presence
                            </h4>
                        </div>

                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <span className="text-4xl lg:text-6xl font-bold">
                                    {awards}
                                </span>
                                <span className="text-3xl lg:text-4xl font-medium">+</span>
                            </div>
                            <h4 className="text-xl lg:text-2xl mt-2">
                                Awards & Accolades
                            </h4>
                        </div>

                    </div>
                    <button className="mt-8 px-12 py-2 text-white bg-[#F06C30] rounded-xl font-bold">
                        Read More
                    </button>
                </div>
            </div>

            <div className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-14">
                        <div className="flex items-center gap-0">
                            <span className="w-1.5 h-1.5 bg-[#000000] rounded-full mr-2"></span>
                            <button className="px-6 py-2 border border-gray-300 rounded-full text-sm bg-white">
                                Reviews
                            </button>
                        </div>

                        <h2 className="mt-6 text-2xl lg:text-5xl font-normal leading-tight mb-3">
                            Hear From Our Satisfied <span className="text-[#808080]">Clients Worldwide.</span>
                        </h2>

                        <p>
                            Explore what industry leaders and long-term partners say about our
                            commitment to excellence and innovation.
                        </p>
                    </div>

                    <div className="relative w-full">
                        <button
                            onClick={prevSlide}
                            className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-10 text-[#F06C30]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {reviewsData.map((review, index) => (
                                    <div
                                        key={index}
                                        className="min-w-full px-3"
                                    >
                                        <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center max-w-4xl mx-auto">
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-auto h-30 object-contain mb-1"
                                            />

                                            <h3 className="text-lg font-semibold text-[#425462]">
                                                {review.name}
                                            </h3>

                                            <p className="text-sm text-[#666666] mb-4">
                                                {review.designation}
                                            </p>

                                            <p className="text-sm text-[#808080] leading-relaxed">
                                                {review.review}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-10 text-[#F06C30]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-full flex flex-col items-center justify-center px-0 py-6 bg-[#425462]">
                <img src={Lineseffect} alt="Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                <h3 className="text-3xl font-medium text-[#F06C30] mb-6">Certifications</h3>
                <p className="w-[90%] text-md text-center text-white pb-4">Certified excellence, ensuring compliance, quality, and global logistics reliability.</p>
                <div className="w-full overflow-hidden mt-4">
                    <div className="flex marquee-track">
                        {[...certifications, ...certifications].map((cert, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 bg-white rounded-xl p-3 shadow-md mx-2"
                            >
                                <img
                                    src={cert.image}
                                    alt={`certification-${index}`}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-14">
                        <div className="flex items-center gap-0">
                            <span className="w-1.5 h-1.5 bg-[#000000] rounded-full mr-2"></span>
                            <button className="px-6 py-2 border border-gray-300 rounded-full text-sm bg-white">
                                Awards
                            </button>
                        </div>

                        <h2 className="mt-6 text-2xl lg:text-5xl font-normal leading-tight">
                            Proudly Recognised with Prestigious <span className="text-[#808080]">Awards and Accolades.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {awardsData.map((award, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center"
                            >
                                <img
                                    src={award.image}
                                    alt={`award-${index}`}
                                    className="w-28 h-28 object-contain mb-4"
                                />

                                <div className="text-center space-y-1">
                                    {award.description.map((line, i) => (
                                        <p
                                            key={i}
                                            className="text-sm text-[#425462]"
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-[#425462]">
                <img src={Lineseffect} alt="Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                <h3 className="text-2xl font-medium text-[#F06C30] mb-6">Our Global Footprint</h3>
            </div>
            <Footer />
        </div>
    )
}

export default Home