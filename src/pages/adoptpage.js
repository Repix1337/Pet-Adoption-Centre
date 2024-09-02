import { useLocation } from 'react-router-dom';
import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";

function AdoptPage() {
    const location = useLocation();
    const petDetails  = location.state.petDetails;

    console.log(petDetails); // Add this line for debugging

    return (
        <div className='mx-40 max-h-screen  text-white'>
            <Navbar/>
            <div className='h-[50vh] text-center flex bg-gray-800 rounded-t-3xl'>
            <img src={petDetails.imageSrc} className='w-2/4 p-8 rounded-[5rem]' alt={petDetails.name}/>
            <div className='w-full bg-gray-800 p-2 rounded-t-3xl'>
                <h1 className='text-6xl'>{petDetails.name}</h1>
            </div>
            </div>
            <div className='w-full h-[30vh]  bg-slate-500'>sigma</div>
            <Footer/>
        </div>
    )
}

export default AdoptPage