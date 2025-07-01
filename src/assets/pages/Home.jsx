import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBus, faChevronLeft, faChevronRight, faCompass, faGripLinesVertical, faHotel, faMagnifyingGlass, faMapLocationDot, faPlaneDeparture, faTrain, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CardDestinations from '../components/CardDestinations';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const sectionRef = useRef();
    const containerRef = useRef();
    const [ navSide, setNavSide ] = useState(false);
    const boxRef = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const progressRef = useRef()

    const openNavSide = () => {
        setNavSide(prev => !prev);
    }

    useEffect(() => {
    const sections = gsap.utils.toArray(".panel");const tl = gsap.timeline({
        scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${window.innerWidth * (sections.length - 1)}`,
        onUpdate: (self) => {
          if (progressRef.current) {
                    progressRef.current.style.width = `${self.progress * 100}%`;
                }
            }
        }
    });

    tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none"
    }, 0);

    if (boxRef.current) {
        tl.to(boxRef.current, {
        x: 600
        }, 0);
    }

    if (boxRef2.current) {
        tl.to(boxRef2.current, {
        x: 1170
        }, 0);
    }

    if (boxRef3.current) {
        tl.to(boxRef3.current, {
        x: -200
        }, 0);
    }

    return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
        }, []);

    return (
        <div ref={sectionRef} className="relative w-screen h-screen 
        overflow-hidden text-md bg-white text-gray-800">
            <div class={`fixed ${navSide ? `opacity-100` : `opacity-0`} inset-0 bg-black/20 z-20 pointer-events-none transition-all duration-300`} />
            <nav>
                <div className="fixed top-0 right-0 left-0 z-10 h-10 sm:h-12 bg-white
                pl-12 items-center border-b border-gray-300">
                    <div className="w-full h-full px-4 sm:px-6 flex-row flex items-center justify-between">
                        <Link to="/" className='font-medium'>Trivi</Link>
                        <div className="text-sm sm:text-md w-fit h-full flex flex-row items-center gap-3">
                            <button 
                            onClick=""
                            className="rounded-full hover:bg-gray-50 py-1 px-3
                            cursor-pointer transition-all duration-300 text-gray-600">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <div className="w-fit h-fit flex flex-row gap-2 items-center">
                                <Link className='border rounded-md border-gray-400 px-4 py-1 cursor-pointer flex items-center font-medium hover:bg-gray-50'>Login</Link>
                                <Link className='hidden border rounded-md border-zinc-500 text-white px-4 py-1 cursor-pointer sm:flex items-center font-medium bg-zinc-600 hover:bg-zinc-700'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`fixed ${navSide ? `w-full sm:w-1/3` : `w-10 sm:w-12`} top-0 left-0 z-50 h-screen bg-white
                flex flex-col items-center border-r border-gray-300 transition-all duration-300`}>
                    <div className={`w-full h-11 sm:h-13 border-b border-gray-300 flex items-center justify-center`}>
                        <Link to="/" className={`${navSide ? `opacity-100` : `opacity-0`} 
                        transition-all duration-300 font-medium`}>Trivi</Link>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <button 
                        onClick={openNavSide}
                        className={`rounded-full ${navSide ? `hidden` : `block`} hover:bg-zinc-100 py-2 px-4
                        cursor-pointer transition-all duration-300`}>
                            <FontAwesomeIcon icon={faGripLinesVertical} />
                        </button>
                        {navSide && (
                            <div className="w-full h-full">
                                <div
                                    className="fixed inset-0 z-40 bg-black/0"
                                    onClick={() => setNavSide(false)}
                                    style={{ left: '33.3333%' }}
                                />
                                <div className={`absolute top-2 right-2`}>
                                    <button 
                                    onClick={openNavSide}
                                    className='text-lg cursor-pointer py-1 px-3 rounded-full hover:bg-zinc-100'>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                                <div className={`w-full h-full ${navSide ? `opacity-100` : `opacity-0`} flex flex-col 
                                items-center justify-center gap-y-4 transition-all duration-700 text-lg`}>
                                    <Link to="/">Home</Link>
                                    <Link>Kategori</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="fixed bottom-6 right-12 w-44 h-1 bg-zinc-300 z-50">
                    <div ref={progressRef} className="h-full bg-zinc-500 transition-all ease-linear"></div>
                </div>
            </nav>
            <div
                ref={containerRef}
                className="flex w-max h-full"
            >
                <div className="panel w-screen h-full pt-10 sm:pt-12 pl-10 sm:pl-12">
                    <div className="w-full h-full flex flex-col p-4 gap-y-2">
                        <img src="/public/place/brokenbeach.jpg" alt="" 
                        className='rounded-md object-cover bg-gray-200 w-full h-[50vh]' />
                        <div className="w-full h-[12vh] flex flex-col px-4 justify-center">
                            <p className='text-sm sm:text-lg text-zinc-500 font-medium'>Trivi, your travel companion</p>
                            <h2 className='text-lg sm:text-2xl font-bold'>Discover the Wonders of Indonesia</h2>
                        </div>
                        <div className="w-full h-[18vh]">
                            <div className="w-full h-full flex flex-row items-center justify-between">
                                <div className="w-full md:w-fit h-full bg-white rounded-xl border-2 
                                border-gray-300 p-3 flex flex-col gap-2">
                                    <div className="w-fit h-full flex flex-row items-center gap-3 sm:px-2">
                                        <h2 className='text-sm sm:text-lg font-medium'>Explore Your Way of Traveling</h2>
                                        <Link className='py-1 px-4 rounded-md hover:bg-slate-100 border border-slate-600
                                        text-black font-medium transition-all duration-300 flex flex-row items-center text-xs sm:text-md'>
                                            <FontAwesomeIcon icon={faCompass} className='mr-2 text-sm' />Guide
                                        </Link>
                                    </div>
                                    <div className="w-auto h-full flex flex-row items-center gap-2 text-xs sm:text-md overflow-x-auto">
                                        <Link className='flex-shrink-0 w-fit h-8 px-4 justify-center rounded-lg bg-zinc-600 hover:bg-zinc-700
                                        text-white font-medium transition-all duration-300 flex flex-row items-center'>
                                            <FontAwesomeIcon icon={faMapLocationDot} className='mr-2 text-sm' />Tourist Destinations
                                        </Link>
                                        <Link className='flex-shrink-0 w-fit h-8 px-4 rounded-lg bg-zinc-600 hover:bg-zinc-700
                                        text-white font-medium transition-all duration-300 flex flex-row items-center'>
                                            <FontAwesomeIcon icon={faHotel} className='mr-2 text-sm' />Hotel
                                        </Link>
                                        <Link className='flex-shrink-0 w-fit h-8 px-4 rounded-lg bg-zinc-600 hover:bg-zinc-700
                                        text-white font-medium transition-all duration-300 flex flex-row items-center'>
                                            <FontAwesomeIcon icon={faPlaneDeparture} className='mr-2 text-sm' />Flights
                                        </Link>
                                        <Link className='flex-shrink-0 w-fit h-8 px-4 rounded-lg bg-zinc-600 hover:bg-zinc-700
                                        text-white font-medium transition-all duration-300 flex flex-row items-center'>
                                            <FontAwesomeIcon icon={faTrain} className='mr-2 text-sm' />Train
                                        </Link>
                                        <Link className='flex-shrink-0 w-fit h-8 px-4 rounded-lg bg-zinc-600 hover:bg-zinc-700
                                        text-white font-medium transition-all duration-300 flex flex-row items-center'>
                                            <FontAwesomeIcon icon={faBus} className='mr-2 text-sm' />Bus & Shuttle
                                        </Link>
                                        <Link className='flex-shrink-0 w-fit h-8 px-4 rounded-lg bg-zinc-600 hover:bg-zinc-700
                                        text-white font-medium transition-all duration-300 flex flex-row items-center'>
                                            Others
                                        </Link>
                                    </div>
                                </div>
                                <div className="hidden w-fit h-full justify-end lg:flex flex-col mr-12 text-sm md:text-md text-zinc-400">
                                    <h2>Swipe left to scroll<FontAwesomeIcon icon={faArrowRight} className='ml-2 text-sm' /></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel w-screen h-full pt-12 pb-10 pr-8 pl-6">
                    <div className="w-full h-full flex flex-col p-4 gap-y-2 justify-end">
                        <div className="w-full h-[60vh] flex flex-col gap-y-2">
                            <div className="flex-1 flex flex-col px-10">
                                <h2 className='text-2xl font-bold'>Trending Travel Spots</h2>
                                <p className='text-lg'>Plan your trip to the destinations everyone is visiting</p>
                            </div>
                            <div className="w-full h-[40vh] flex flex-row items-center">
                                <button className='w-8 h-full bg-zinc-50 flex items-center justify-center rounded-tl-xl 
                                rounded-bl-xl hover:bg-zinc-100 cursor-pointer'>
                                    <FontAwesomeIcon icon={faChevronLeft} className='text-sm' />
                                </button>
                                <div className="w-full h-full flex flex-row gap-2 justify-center">
                                    <Card />
                                    <Card />
                                </div>
                                <button className='w-8 h-full bg-zinc-50 flex items-center justify-center rounded-tr-xl 
                                rounded-br-xl hover:bg-zinc-100 cursor-pointer'>
                                    <FontAwesomeIcon icon={faChevronRight} className='text-sm' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel w-screen h-full py-12 pr-14 pl-0">
                    <div className="w-full h-full flex flex-col justify-end">
                        <div className="w-full h-[70vh] px-4 flex flex-col gap-y-2">
                            <div className="w-full flex-1 flex items-center px-2">
                                <div className="w-full h-fit flex flex-col">
                                    <h2 className='text-2xl font-bold'>Top Travel Destinations</h2>
                                    <p className='text-lg'>Wander through the beauty of Indonesia, one destination at a time</p>
                                </div>
                            </div>
                            <div className="w-full h-[55vh] grid grid-cols-2 sm:grid-cols-4 gap-2">
                                <CardDestinations />
                                <CardDestinations />
                                <CardDestinations />
                                <CardDestinations />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel w-screen h-full flex flex-row gap-4 py-12 pr-24">
                    <div className="w-full h-full flex flex-row gap-4">
                        <div className="flex-1 flex items-center">
                            <div className="w-full h-[55vh] flex flex-col gap-1">
                                <h2 className='text-2xl font-bold'>Top Travel Destinations</h2>
                                <p className='text-lg'>Wander through the beauty of Indonesia, one destination at a time</p>
                            </div>
                        </div>
                        <div className="w-fit h-3xs flex flex-col gap-2 py-4">
                            <Card />
                            <Card />
                        </div>
                        <div className="w-fit h-3xs flex flex-col gap-2 py-4">
                            <Card />
                            <Card />
                        </div>
                        <div className="w-fit h-3xs flex flex-col gap-2 py-4">
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="panel w-screen h-full pl-12">
                    <div className="w-full h-full bg-zinc-50"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;