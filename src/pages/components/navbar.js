import { Link } from 'react-router-dom';
import { Bar } from "./bar";
import { Button } from "./button";
export function Navbar({handleClick}){
    return (
        <Bar>
            <div className="flex w-full items-center justify-evenly text-center">
            <Link to='/'><Button content="Home" handleClick={handleClick} /></Link>
                <Link to='/'><Button content="Contact" handleClick={handleClick} /></Link>
                <Link to='/'><Button content="About-us" handleClick={handleClick} /></Link>
                <Link to='/'><Button content="Find-us" handleClick={handleClick} /></Link>
                <Link to='/search'><Button content="Pets" handleClick={handleClick} /></Link>
            </div>
        </Bar>
    )
}