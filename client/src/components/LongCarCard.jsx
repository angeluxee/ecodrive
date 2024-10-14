import React, { useState, useContext } from "react";
import doorIcon from '../assets/door2.png'
import personIcon from '../assets/person2.png'
import shiftIcon from '../assets/shift2.png'
import travelbagIcon from '../assets/travelbag2.png'
import ecologicIcon from '../assets/ecologic.png'
import dropdown from '../assets/dropdown.png'
import checkIcon from '../assets/check.png'
import {CarCard} from './CarCard'
export function LongCarCard({car}){
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
      };
    return (
        <div className='p-8'>
            <div className='grid grid-cols-4 m-auto border rounded-lg shadow-lg max-w-screen-xl'>
                <div className='flex flex-col justify-center items-center'>
                <img className='w-auto h-auto p-8' src="https://carvo.ch/assets/images/models/md-297/original/tesla-model-s-plaid.png" alt="CAR" />
                </div>

                
                <div className='p-8 space-y-2 col-span-2'>
                    <h1 className='font-semibold text-2xl flex'>{car.brand} {car.model}</h1>
                    <div className='flex items-center space-x-2'>
                        <span className='border-2 p-1 pl-2 pr-2 rounded-full text-xs font-semibold'>SUV</span>
                        <span className='flex border-2 border-eco1 bg-eco1 p-1 pl-2 pr-2 rounded-full text-xs font-semibold text-white'>
                        ECO
                        <div className='relative group'>
                            <a href=''>
                            <img className='h-4 ml-1 w-auto' src={ecologicIcon} alt="Eco Friendly Icon" />
                            </a>
                            <div className='absolute hidden group-hover:flex group-hover:w-max  bg-eco text-black text-xs rounded-lg p-2 mt-2 -left-8'>
                                By renting this car, you are contributing to the planet by reducing CO2 emissions.
                            </div>
                        </div>
                        </span>

                    </div>
                    <div className='grid grid-cols-2 pt-4 gap-y-4'>
                        <div className='flex font-semibold text-gray-600 space-x-1'>
                            <img className='h-6' src={personIcon} alt="" />
                            <span>{car.seats} Seats</span>
                        </div>
                        <div className='flex font-semibold text-gray-600 space-x-1'>
                            <img className='h-6' src={travelbagIcon} alt="" />
                            <span>{car.storage} Small bags</span>
                        </div>
                        <div className='flex font-semibold  text-gray-600 space-x-1'>
                            <img className='h-6' src={shiftIcon} alt="" />
                            <span>{car.transmission_type === 'Automatic' ? 'Automatic' : 'Manual'}</span>
                        </div>
                        <div className='flex text-gray-600 font-semibold space-x-1'>
                            <img className='h-6' src={doorIcon} alt="" />
                            <span className=''>{car.doors} Doors</span>
                        </div>
                        <button className='flex text-gray-600 font-semibold items-center space-x-1' onClick={toggleMenu}>
                            <span className=''>{isMenuOpen ? 'Hide info' : 'See more info'}</span>
                            <img className='h-4' src={dropdown} alt="" />
                        </button>
                        <div class={`${isMenuOpen ? "block" : "hidden"} grid col-span-2 grid-rows-4 gap-1 `}>
                        <div className="flex items-center space-x-1">
                            <img className='h-6' src={checkIcon} alt="" />
                                <span class="text-sm text-gray-700">Charged at the time of pickup</span>
                            </div>
                            <div className="flex items-center space-x-1">
                            <img className='h-6' src={checkIcon} alt="" />
                                <span class="text-sm text-gray-700">Range up to: {car.mileage}km</span>
                            </div>
                            <div className="flex items-center space-x-1">
                            <img className='h-6' src={checkIcon} alt="" />
                                <span class="text-sm text-gray-700">Basic protection included</span>
                            </div>
                            <div className="flex items-center space-x-1">
                            <img className='h-6' src={checkIcon} alt="" />
                                <span class="text-sm text-gray-700">Free cancellation up to 48h before pickup</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-8 items-end'>
                    <div className='flex'>
                        <span className='text-gray-500 text-sm'>Price per day:</span>
                    </div>
                    <div className='flex'>
                        <span className='font-bold text-2xl'>€{car.price_per_day}</span>
                    </div>
                    <div className='flex'>
                        <span className='text-eco1 text-md'>Free cancellation</span>
                    </div>
                    <div className='flex'>
                        <span className='text-eco1 text-md'>Rent now</span>
                    </div>
                    
                    <div className='flex-grow'></div>
                    
                    <div className='flex'>
                        <button 
                        className='p-3 pl-10 pr-10 bg-gradient-to-r from-eco1 to-eco1 text-white font-semibold rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
                        type='submit'
                        >
                        View deal
                        </button>
                    </div>
                    </div>


                

        </div>
        {/* <CarCard car={car}/> */}
        </div>
    )
}