import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";
import { Search } from "./components/search.js";
import { Filters } from "./components/filters.js";
import { Petresults } from "./components/petresults.js";
import { useState } from "react";
function Searchsite(){
    const [input,setInput] = useState('');
    const handleInput = (e) => {
        setInput(e.target.value);
    }
    return (
        <div className="mx-60 h-screen text-white">
            <Navbar/>
            <div className="w-full  flex items-center justify-center">
                <Search onChange={handleInput}/>
            </div>
                <div className="flex w-full h-full items-center justify-center">
                    <Filters/>
                    <Petresults inputValue={input}/>
                </div>
            
            <Footer/>
        </div>
    )
}
export default Searchsite