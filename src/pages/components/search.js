export function Search({onChange}){
    return (
        <input type="text" placeholder="Search..." onChange={onChange} className="rounded-full h-12 w-1/2 p-2 text-3xl m-2 text-white bg-sky-950"></input>
    )
}