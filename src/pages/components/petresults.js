import { Petresultitem } from "./petresultitem";
import { pets } from "./petsData";
export function Petresults({ inputValue, species, gender, age }) {
  console.log("species: " + species);
  console.log("gender: " + gender);
  console.log("age: " + age);
  let rowsAmount = "grid-rows-"+Math.floor(pets.length / 4);
  let petItems = pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        inputValue === ""
    )
    .filter(
      (pet) =>
        species.length === 0 ||
        pet.specie.toLowerCase() === species[0] ||
        pet.specie.toLowerCase() === species[1] ||
        pet.specie.toLowerCase() === species[2] ||
        pet.specie.toLowerCase() === species[3]   
    )
    .filter(
      (pet) =>
        pet.gender.toLowerCase() === gender[0] ||
        pet.gender.toLowerCase() === gender[1] ||
        gender.length === 0
    )
    .filter(
      (pet) => age === 0 || (pet.age >= age[0] && pet.age <= age[1])
    )
    .map((pet) => <Petresultitem key={pet.id} {...pet} />);

  return (
    <div className="w-full h-full p-4 bg-gray-800 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {petItems}
      </div>
    </div>
  );
}
