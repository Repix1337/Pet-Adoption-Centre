import { Link } from 'react-router-dom';
export function PetItem({name, imageSrc}){
    return (
        <Link to='/search'>
        <div className="appearAnimation bg-gray-100 text-center text-4xl text-black m-2 rounded-xl p-3 overflow-x-hidden">
            <img src={imageSrc} alt={name} className="w-64 h-52 object-cover"/>
            {name}
        </div>
        </Link>
    )
}