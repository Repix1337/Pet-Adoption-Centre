export function Filters({ onChange, genderChange, ageChange}) {
    
    return (
      <div className="w-1/4 h-full bg-slate-600">
        <h1 className="flex justify-center text-7xl m-3">Filters</h1>
        <form className="ml-3">
          <h1 className="text-4xl">Species:</h1>
          <div>
            <input type="checkbox" name="Dogs" value="Dogs" onChange={onChange} />{" "}
            <label htmlFor="Dogs">Dogs</label>
          </div>
          <div>
            <input type="checkbox" name="Cats" value="Cats" onChange={onChange} />{" "}
            <label htmlFor="Cats">Cats</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="Rabbits"
              value="Rabbits"
              onChange={onChange}
            />{" "}
            <label htmlFor="Rabbits">Rabbits</label>
          </div>
          <div>
            <input type="checkbox" name="Other" value="Other" onChange={onChange} />{" "}
            <label htmlFor="Other">Other</label>
          </div>
  
          <h1 className="text-4xl">Gender:</h1>
          <div>
            <input
              type="checkbox"
              name="Male"
              value="Boy"
              onChange={genderChange}
            />{" "}
            <label htmlFor="Male">Male</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="Female"
              value="Female"
              onChange={genderChange}
            />{" "}
            <label htmlFor="Female">Female</label>
          </div>
  
          <h1 className="text-4xl">Age:</h1>
<div>
  <input
    type="radio"
    name="Age"
    value={JSON.stringify([0, 4])}
    onChange={ageChange}
  />{" "}
  <label htmlFor="Age">0-4</label>
</div>
<div>
  <input
    type="radio"
    name="Age"
    value={JSON.stringify([5, 10])}
    onChange={ageChange}
  />{" "}
  <label htmlFor="Age">5-10</label>
</div>
<div>
  <input
    type="radio"
    name="Age"
    value={JSON.stringify([11, 20])}
    onChange={ageChange}
  />{" "}
  <label htmlFor="Age">11-20</label>
</div>
<div>
  <input
    type="radio"
    name="Age"
    value="0"
    onChange={ageChange}
  />{" "}
  <label htmlFor="Age">No Age filter</label>
</div>

        </form>
      </div>
    );
  }