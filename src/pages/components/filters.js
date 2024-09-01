export function Filters({onChange, genderChange}){
    
    return (
        <div className="w-1/4 h-full bg-slate-600">
            <h1 className="flex justify-center text-7xl m-3">Filters</h1>
            <form className="ml-3">
                
                    <h1 className="text-4xl">Species:</h1>
                    <div><input type="checkbox" name="Dogs" value="Dogs" onChange={onChange}/> <label to="Dogs">Dogs</label></div>
                    <div><input type="checkbox" name="Cats" value="Cats" onChange={onChange}/> <label to="Cats">Cats</label></div>
                    <div><input type="checkbox" name="Rabbits" value="Rabbits" onChange={onChange}/> <label to="Rabbits">Rabbits</label></div>
                    <div><input type="checkbox" name="Other" value="Other" onChange={onChange}/> <label to="Other">Other</label></div>
                    <h1 className="text-4xl">Gender:</h1>
                    <div><input type="checkbox" name="Male" value="Boy" onChange={genderChange}/> <label to="Male">Male</label></div>
                    <div><input type="checkbox" name="Female" value="Female" onChange={genderChange}/> <label to="Female">Female</label></div>
                    <h1 className="text-4xl">Age:</h1>
                    <div><input type="radio" name="Age" value="" onChange={genderChange}/> <label to="Age">0-4</label></div>
                    <div><input type="radio" name="Age" value="" onChange={genderChange}/> <label to="Age">5-10</label></div>
                    <div><input type="radio" name="Age" value="" onChange={genderChange}/> <label to="Age">11-20</label></div>
                    
                
            </form>
        </div>
    )
}