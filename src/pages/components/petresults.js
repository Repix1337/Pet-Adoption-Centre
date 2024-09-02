import { Petresultitem } from "./petresultitem";
import { pets } from "./petsData";
export function Petresults({ inputValue, species, gender, age }) {
  console.log("species: " + species);
  console.log("gender: " + gender);
  console.log("age: " + age);
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
    <div className="w-3/4 h-full p-4 bg-slate-500 grid grid-cols-4 grid-rows-4 gap-2 ">
      {petItems}
    </div>
  );
}
