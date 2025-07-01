import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Card() {
    return (
        <Link className="w-2xs h-fit rounded-lg flex flex-col border border-zinc-400 hover:border-b-3 transition-all duration-100">
                                    <div className="w-full h-[20vh] relative">
                                        <img src="/public/place/brokenbeach.jpg" className='w-full h-full border-b border-zinc-400 
                                        rounded-tl-lg rounded-tr-lg object-cover' alt="" />
                                        <h2 className='absolute bottom-0 right-0 text-md bg-zinc-600 px-3 text-zinc-200 rounded-tl-lg'><FontAwesomeIcon icon={faStar} className='mr-1 text-sm' />5/5</h2>
                                    </div>
                                    <div className="w-full h-fit p-2 flex flex-col gap-[2px]">
                                        <h2 className='text-md font-medium truncate w-full'>Pantai Broken</h2>
                                        <p className='text-sm w-full truncate'>Lokasi</p>
                                        <div className="w-full h-fit mt-3 flex flex-col justify-end">
                                            <p className='text-sm'>Rp. 45,000</p>
                                            <h3 className='text-md font-medium'>Rp. 30,000</h3>
                                        </div>
                                    </div>
                                </Link>
    )
}

export default Card;