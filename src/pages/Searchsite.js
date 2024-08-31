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
    return (
        <div className="mx-60 h-screen text-white">
            <Navbar/>
            <div className="w-full  flex items-center justify-center">
                <Search onChange={handleInput}/>
            </div>
                <div className="flex w-full h-full items-center justify-center">
                    <Filters  onChange={handleSpecieChange} genderChange={handleGenderChange}/>
                    <Petresults inputValue={input} species={species} gender={gender}/>
                </div>
            
            <Footer/>
        </div>
    )
}
export default Searchsite