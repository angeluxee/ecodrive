import {LabelUI, ButtonUI, InputUI} from './ui';
import React, { useState, useContext } from 'react';
import CarImage from '../assets/car.png';
import CarImageReversed from '../assets/car_reversed.png';
import VanImage from '../assets/van.png';
import VanImageReversed from '../assets/van_reversed.png';
import ScooterImage from '../assets/scooter.png';
import ScooterImageReversed from '../assets/scooter_reversed.png';
import Banner2 from '../assets/banner2.jpg' 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { getFilteredCars } from '../api/cars.api';

export function RentCarForm() {
    const [location, setlocation] = useState('');
    const [age, setAge] = useState('');
    const [pick_up_date, setPick_up_date] = useState('');
    const [pick_up_hour, setPick_up_hour] = useState('');
    const [return_date, setReturn_date] = useState('');
    const [return_hour, setReturn_hour] = useState('');
    const [car_type, setCar_type] = useState('');
    const [selectedCarType, setSelectedCarType] = useState('');
    const [selectedCountry, setSelectedCountry] = useState("Spain");
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            location,
            age,
            pick_up_date,
            pick_up_hour,
            return_date,
            return_hour,
            car_type,
            selectedCarType,
            selectedCountry
        };
        try{
            const response = await getFilteredCars(formData);
            console.log(response)
            response ? navigate('/rent', { state: { formData: response.data } }) : toast.error('Error sending form');
        } catch (error) {
                toast.error('Error fetching cars');
        }

    }
    const carTypes = [
      { value: 'car', label: 'Cars', image: selectedCarType === 'car' ? CarImageReversed : CarImage },
      { value: 'van', label: 'Vans', image: selectedCarType === 'van' ? VanImageReversed : VanImage },
      { value: 'scooter', label: 'Scooters', image: selectedCarType === 'scooter' ? ScooterImageReversed : ScooterImage },
    ];

    const handleCarTypeClick = (value) => {
      setSelectedCarType(value);
    };
    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];
    const ageList = [
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26+'
    ];
    return (
        <div className="pt-32 pb-64 border-b-2 border-t-2 border-eco2" style={{
                                        backgroundImage: `url(${Banner2})`,
                                        backgroundRepeat: 'no-repeat', 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center', 
                                    }}>
            <form onSubmit={handleSubmit} className='shadow-lg space-y-8 grid grid-cols-6 p-6 bg-white border-2 border-eco2 rounded-lg sm:mx-auto md:max-w-4xl lg:max-w-4xl'>
                <div className="col-span-6 flex">
                    {carTypes.map((carType) => (
                    <button
                        type='button'
                        required
                        key={carType.value}
                        className={`p-2 px-3 mr-2 flex items-center bg-gray-100 hover:bg-gray-200 rounded-full font-semibold ${
                        selectedCarType === carType.value ? 'bg-gray-950 hover:bg-gray-950 text-white' : ''
                        }`}
                        onClick={() => handleCarTypeClick(carType.value)}
                    >
                        <img src={carType.image} className='h-6 w-6 mr-2' alt="" />
                        {carType.label}
                    </button>
                    ))}
                </div>
                
                <div className='col-span-6 md:col-span-2 mr-2'>
                    <LabelUI htmlFor='location'>Pick-up & Return Location</LabelUI>
                    <InputUI
                        id='location'
                        name='location'
                        type='text'
                        autoComplete="off"
                        placeholder='Airport, location or address'
                        onChange={(e) => setlocation(e.target.value)}
                        required                
                        className='border-2 border-eco2 rounded-lg w-full p-3'
                    />
                </div>
                
                <div className='col-span-6 md:col-span-2 flex justify-center'>
                    <div className='mr-2'>
                        <LabelUI htmlFor='pick_up_date'>Pick-up date</LabelUI>
                        <InputUI
                            id='pick_up_date'
                            name='pick_up_date'
                            type='date'
                            autoComplete="off"
                            onChange={(e) => setPick_up_date(e.target.value)}
                            required                
                            className='border-2 border-eco2 rounded-lg w-full p-3'
                        />
                    </div>
                    <div>
                        <LabelUI htmlFor='pick_up_hour'>Hour</LabelUI>
                        <InputUI
                            id='pick_up_hour'
                            name='pick_up_hour'
                            type='time'
                            autoComplete="off"
                            onChange={(e) => setPick_up_hour(e.target.value)}
                            required                
                            className='border-2 border-eco2 rounded-lg w-full p-3'
                        />
                    </div>
                </div>
                <div className='col-span-6 md:col-span-2 flex justify-center'>
                    <div className='mr-2'>
                        <LabelUI htmlFor='return_date'>Return date</LabelUI>
                        <InputUI
                            id='return_date'
                            name='return_date'
                            type='date'
                            autoComplete="off"
                            onChange={(e) => setReturn_date(e.target.value)}
                            required                
                            className='border-2 border-eco2 rounded-lg w-full p-3'
                        />
                    </div>
                    <div>
                        <LabelUI htmlFor='return_hour'>Hour</LabelUI>
                        <InputUI
                            id='return_hour'
                            name='return_hour'
                            type='time'
                            autoComplete="off"
                            onChange={(e) => setReturn_hour(e.target.value)}
                            required                
                            className='border-2 border-eco2 rounded-lg w-full p-3'
                        />
                    </div>
                </div>
                <div className='col-span-2 mr-2 flex pt-5'>
                    <div className='w-full'>
                    <select 
                        required
                        className='w-full border rounded-md mr-1 p-3' 
                        name="age" 
                        id="age" 
                        value={age || ""}  // Si 'age' está vacío, la opción por defecto será seleccionada
                        onChange={(e) => setAge(e.target.value)}
                    >
                        <option value="" disabled>Select your age</option> 
                        {ageList.map((ageOption) => (
                            <option key={ageOption} value={ageOption}>
                                {ageOption}
                            </option>
                        ))}
                    </select>

                    </div>
                </div>
                <div className='col-span-2 flex justify-center w-full pt-5 '>
                    <div className='mr-1 ml-1 w-full'>
                        <select 
                            required
                            className='w-full border border-gray-200 rounded-md mr-1 p-3' 
                            name="country" 
                            id="country" 
                            value={selectedCountry} 
                            onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                            {countryList.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center pl-0 pr-0 pt-5'>
                <button 
                    className='p-3 bg-gradient-to-r from-eco2 to-eco2.1 text-white font-semibold  w-full ml-5 mr-5 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
                    type='submit'
                >
                    Search
                </button>
                </div>
            </form>

        </div>
        
    );
}
