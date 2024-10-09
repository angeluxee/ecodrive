import doorIcon from '../assets/door.png'
import personIcon from '../assets/person.png'
import shiftIcon from '../assets/shift.png'
import travelbagIcon from '../assets/travelbag.png'

export function CarCard({car}){
    return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-6 py-6 font-roboto">
          <div className='shadow-md rounded-md border-2 border-gray-200 hover:border-blue-200'>
            <div className='bg-slate-50 flex justify-center'>
              <img className='w-48 h-32' src="https://pngimg.com/d/Mclaren_PNG76.png" alt="CAR" />
            </div>
            <div className='px-4 pb-3'>
              <h1 className='mt-3 text-lg font-semibold text-gray-900'>{car.brand} {car.model}</h1>
              <p className='mt-1 text-sm font-light text-gray-500'>Medium</p>
              <div className="flex justify-between h-6 gap-3 mt-2">
                <div className="flex">
                  <img src={doorIcon} alt="" className="" />
                  <span>{car.doors}</span>
                </div>
                <div className="flex">
                  <img src={personIcon} alt="" className="mr-1" />
                  <span>5</span>
                </div>
                <div className="flex">
                  <img src={travelbagIcon} alt="" className="mr-1" />
                  <span>3</span>
                </div>
                <div className="flex">
                  <img src={shiftIcon} alt="" className="mr-1" />
                  <span>{car.transmission_type === 'Automatic' ? 'A' : 'M'}</span>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className='font-semibold'>{car.price_per_day}$ <span className='text-gray-400 text-xs'>/ per day</span></span>
                <button className='p-1 px-2 bg-green-600 hover:bg-green-500 rounded-md text-white font-semibold border-2'>Rent now!</button>
              </div>
            </div>
          </div>

        </div>



      <h1>{car.brand} - {car.model}</h1>
      <p>{car.year}</p>
      <p>{car.description}</p>
      <p>{car.plate_number}</p>
      <p>{car.transmission_type}</p>
      <p>{car.price_per_day}</p>
      <p>{car.is_available}</p>
      <p>{car.location}</p>
      <p>{car.fuel_type}</p>
      <p>{car.mileage}</p>
      <p>{car.doors}</p>
  </div>
    )
}