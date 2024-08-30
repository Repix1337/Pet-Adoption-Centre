import { Link } from 'react-router-dom';
import { Bar } from "./bar";
import { Button } from "./button";
export function Navbar({handleClick}){
    return (
        <Bar>
            <div className="buttons flex justify-end text-right">
                <Link to='/'><Button content="Home"/> 
                <Button content="Contact" handleClick={handleClick}/>
                <Button content="About-us" handleClick={handleClick}/>
                <Button content="Find-us" handleClick={handleClick}/></Link>
                <Button content="Pets" handleClick={handleClick}/>
            </div>
        </Bar>
    )
}