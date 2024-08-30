
import { Petresultitem } from "./petresultitem"
export function Petresults({inputValue}){
    const pets = [
        {
            id: 1,
            name: "Susie",
            gender: "female",
            specie: "cat",
            breed: "British",
            imageSrc: "./images/cat.png"
        },
        {
            id: 2,
            name: "Max",
            gender: "male",
            specie: "dog",
            breed: "Golden Retriever",
            imageSrc: "./images/dog.png"
            
        },
        {
            id: 3,
            name: "Bella",
            gender: "female",
            specie: "dog",
            breed: "Bulldog",
            imageSrc: "./images/dog.png"
        },
        {
            id: 4,
            name: "Oscar",
            gender: "male",
            specie: "cat",
            breed: "Siamese",
            imageSrc: "./images/cat.png"
        },
        {
            id: 5,
            name: "Luna",
            gender: "female",
            specie: "dog",
            breed: "Poodle",
            imageSrc: "./images/dog.png"
        },
        {
            id: 6,
            name: "Charlie",
            gender: "male",
            specie: "dog",
            breed: "Labrador",
            imageSrc: "./images/dog.png"
        },
        {
            id: 7,
            name: "Milo",
            gender: "male",
            specie: "cat",
            breed: "Persian",
            imageSrc: "./images/dog.png"
        },
        {
            id: 8,
            name: "Daisy",
            gender: "female",
            specie: "dog",
            breed: "Beagle",
            imageSrc: "./images/dog.png"
        },
        {
            id: 9,
            name: "Lucy",
            gender: "female",
            specie: "cat",
            breed: "Maine Coon",
            imageSrc: "./images/cat.png"
        },
        {
            id: 10,
            name: "Rocky",
            gender: "male",
            specie: "dog",
            breed: "Rottweiler",
            imageSrc: "./images/dog.png"
        }
    ];
    const petItems = pets
    .filter(pet => pet.name.toLowerCase() === inputValue.toLowerCase() || inputValue === '' )
    .map(pet => ( <Petresultitem key={pet.id} {...pet}/> ))
    
    return(
        <div className="w-3/4 h-full bg-slate-500 grid grid-cols-4 grid-rows-3 gap-2 ">
            {petItems}
        </div>
    );

}