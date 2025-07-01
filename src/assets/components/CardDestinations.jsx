import { Link } from "react-router-dom";

function CardDestinations() {
    return (
        <Link className="w-full h-full relative group overflow-hidden rounded-md">
            <img src="/public/place/brokenbeach.jpg" alt="" className='transition-transform duration-500 
            group-hover:scale-105 w-full h-full object-cover' />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t 
            from-blue-400/100 to-transparent pointer-events-none"></div>
            <h2 className='text-white absolute bottom-4 text-2xl w-full flex justify-center font-medium'>Bali</h2>
        </Link>
    )
}

export default CardDestinations;