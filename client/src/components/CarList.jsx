import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Importar useLocation
import { getAllCars } from "../api/cars.api";
import { CarCard } from "./CarCard";

export function CarList() {
  const location = useLocation();
  const formData = location.state?.formData || []; 

  // const [cars, setCars] = useState([]); 
  
  return (
    <div>
      {formData.length > 0 ? (
        formData.map((car, index) => ( 
          <div key={index}>
            <CarCard car={car} />
          </div>
        ))
      ) : (
        <p>No cars available.</p>
      )}
    </div>
  );
}
