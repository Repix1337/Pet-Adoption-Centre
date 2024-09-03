import { Link } from 'react-router-dom';
export function PetItem({name, imageSrc}){
    return (
        <Link to='/search'>
        <div className="appearAnimation bg-gray-800 text-center text-4xl text-white m-2 rounded-xl p-3 overflow-x-hidden hover:scale-105 hover:bg-sky-950 duration-500">
            <img src={imageSrc} alt={name} className="w-64 h-52 object-cover"/>
            {name}
        </div>
        </Link>
    )
}