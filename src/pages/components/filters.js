export function Filters(){
    return (
        <div className="w-1/4 h-full bg-slate-600">
            <h1 className="flex justify-center text-7xl m-3">Filters</h1>
            <form className="ml-3">
                <div>
                    <h1 className="text-4xl">Gatunki:</h1>
                    <div><input type="checkbox" name="Dogs" value="Dogs"/> <label to="Dogs">Dogs</label></div>
                    <div><input type="checkbox" name="Cats" value="Cats"/> <label to="Cats">Cats</label></div>
                    <div><input type="checkbox" name="Rabbits" value="Rabbits"/> <label to="Rabbits">Rabbits</label></div>
                    <div><input type="checkbox" name="Other" value="Other"/> <label to="Other">Other</label></div>
                </div>
            </form>
        </div>
    )
}