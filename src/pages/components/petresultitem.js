export function Petresultitem({name,gender,specie,breed,imageSrc}){
    
    return(
        <div className="bg-gray-100 w-[95%] h-[95%] text-center text-4xl text-black m-2 rounded-xl p-3 flex flex-col justify-center items-center overflow-hidden hover:scale-110 duration-500 ease-in-out">
        <div className="w-full h-[90%] overflow-hidden">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <p>{name}</p>
      </div>
    )
}