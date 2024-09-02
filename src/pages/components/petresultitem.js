import { useState } from "react";
import { Link } from "react-router-dom";

export function Petresultitem({ name, gender, specie, breed, imageSrc, desc, age }) {
  const petDetails = {name, gender, specie, breed, imageSrc, desc, age}
  return (
    <Link
  to={"/adopt"}
  state={{petDetails}}>
    
      <div className="bg-gray-100 w-[95%] h-[95%] text-center text-2xl text-black m-2 rounded-xl p-1 flex flex-col justify-center items-center overflow-hidden hover:scale-110 duration-500 ease-in-out">
        <div className="w-full h-[90%] overflow-hidden">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
}
