import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";
import { Search } from "./components/search.js";
import { Filters } from "./components/filters.js";
import { Petresults } from "./components/petresults.js";
import { useState } from "react";
function Searchsite(){
    const [input,setInput] = useState('');
    const [species,setSpecies] = useState([])
    const [gender,setGender] = useState([])
    const [age,setAge] = useState(0)
    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const handleSpecieChange = (e) => {
        const newSpecies = e.target.value.toLowerCase();
        
        setSpecies(prevSpecies => {
          // Check if the species already exists
          if (prevSpecies.includes(newSpecies)) {
            // Remove all occurrences of the species
            return prevSpecies.filter(specie => specie !== newSpecies);
          } else {
            // Add the new species
            return [...prevSpecies, newSpecies.toLowerCase()];
          }
        });
      };
      const handleGenderChange = (e) => {
        const newGender = e.target.value.toLowerCase();
        
        setGender(prevGender => {
          // Check if the species already exists
          if (prevGender.includes(newGender)) {
            // Remove all occurrences of the species
            return prevGender.filter(gender => gender !== newGender);
          } else {
            // Add the new species
            return [...prevGender, newGender.toLowerCase()];
          }
        });
      };
      const handleAgeChange = (e) => {
        setAge(JSON.parse(e.target.value));
      }
    return (
        <div className="mx-0 lg:mx-40 text-white flex flex-col">
            <Navbar/>
            <div className="w-full flex items-center justify-center">
                <Search onChange={handleInput}/>
            </div>
                <div className="flex flex-grow w-full">
                    <Filters  onChange={handleSpecieChange} genderChange={handleGenderChange} ageChange={handleAgeChange}/>
                    <Petresults inputValue={input} species={species} gender={gender} age={age}/>
                </div>
            <Footer/>
        </div>
    )
}
export default Searchsite