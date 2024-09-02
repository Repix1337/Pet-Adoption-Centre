import { useState } from "react";
import { Link } from "react-router-dom";

export function Petresultitem({ name, gender, specie, breed, imageSrc, desc, age }) {
  const petDetails = {name, gender, specie, breed, imageSrc, desc, age}
  return (
    <Link to="/adopt" state={{ petDetails }} className="block">
    <div className="bg-zinc-700 h-full text-center text-xl text-white font-bold rounded-2xl p-2 flex flex-col justify-between items-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full pb-[100%] relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        />
      </div>
      <p className="mt-2">{name}</p>
    </div>
  </Link>
  );
}
