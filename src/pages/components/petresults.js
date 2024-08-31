
import { Petresultitem } from "./petresultitem"
export function Petresults({inputValue,species,gender}){
    const pets = [
        {
            id: 1,
            name: "Susie",
            gender: "female",
            specie: "cats",
            breed: "British",
            imageSrc: "./images/cat.png"
        },
        {
            id: 2,
            name: "Max",
            gender: "boy",
            specie: "dogs",
            breed: "Golden Retriever",
            imageSrc: "./images/dog.png"
            
        },
        {
            id: 3,
            name: "Bella",
            gender: "female",
            specie: "dogs",
            breed: "Bulldog",
            imageSrc: "./images/dog.png"
        },
        {
            id: 4,
            name: "Oscar",
            gender: "boy",
            specie: "cats",
            breed: "Siamese",
            imageSrc: "./images/cat.png"
        },
        {
            id: 5,
            name: "Luna",
            gender: "female",
            specie: "dogs",
            breed: "Poodle",
            imageSrc: "./images/dog.png"
        },
        {
            id: 6,
            name: "Charlie",
            gender: "boy",
            specie: "dogs",
            breed: "Labrador",
            imageSrc: "./images/dog.png"
        },
        {
            id: 7,
            name: "Milo",
            gender: "boy",
            specie: "cats",
            breed: "Persian",
            imageSrc: "./images/cat.png"
        },
        {
            id: 8,
            name: "Daisy",
            gender: "female",
            specie: "dogs",
            breed: "Beagle",
            imageSrc: "./images/dog.png"
        },
        {
            id: 9,
            name: "Lucy",
            gender: "female",
            specie: "cats",
            breed: "Maine Coon",
            imageSrc: "./images/cat.png"
        },
        {
            id: 10,
            name: "Rocky",
            gender: "boy",
            specie: "dogs",
            breed: "Rottweiler",
            imageSrc: "./images/dog.png"
        },
        {
            id: 11,
            name: "Tofinek",
            gender: "boy",
            specie: "dogs",
            breed: "Buldog",
            imageSrc: "./images/dog2.png"
        }
    ];
    console.log("species: " + species)
    console.log("gender: " + gender)
    let petItems = pets
    .filter(pet => pet.name.toLowerCase().includes(inputValue.toLowerCase() )
      || inputValue === '' )
    .filter(pet => species.length === 0 
    || pet.specie.toLowerCase() === species[0] 
    || pet.specie.toLowerCase() === species[1] 
    || pet.specie.toLowerCase() === species[2] 
    || pet.specie.toLowerCase() === species[3])
    .filter(pet => pet.gender.toLowerCase() === gender[0] 
    || pet.gender.toLowerCase() === gender[1] 
    || gender.length === 0)
    .map(pet => ( <Petresultitem key={pet.id} {...pet}/> ))
    
    
    
    return(
        <div className="w-3/4 h-full bg-slate-500 grid grid-cols-4 grid-rows-3 gap-2 ">
            {petItems}
        </div>
    );

}