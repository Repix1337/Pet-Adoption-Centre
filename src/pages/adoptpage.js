import { useLocation } from 'react-router-dom';
import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";

function AdoptPage() {
    const location = useLocation();
    const petDetails  = location.state.petDetails;

    console.log(petDetails); // Add this line for debugging
    if (petDetails.gender === 'boy'){
        petDetails.gender = 'male';
    }
    return (
        <div className='mx-40 max-h-screen font-bold text-white'>
            <Navbar/>
            <div className='h-[50vh] text-center flex bg-gray-800 rounded-t-3xl'>
            <img src={petDetails.imageSrc} className='w-2/4 p-8 rounded-[5rem]' alt={petDetails.name}/>
            <div className='w-full bg-gray-800 p-2 rounded-t-3xl'>
                <h1 className='text-6xl'>{petDetails.name}</h1>
                <h1 className='text-5xl text-left mb-3'>Info:</h1>
                <div className='flex text-3xl'>
                <div className='border-r'>
                    <p>Gender</p>
                    <p>Specie</p>
                    <p>Breed</p>
                    <p>Age</p>
                </div>
                <div className='ml-1'>
                <p>{petDetails.gender.charAt(0).toUpperCase() + petDetails.gender.slice(1).toLowerCase()}</p>
                <p>{petDetails.specie.charAt(0).toUpperCase() + petDetails.specie.slice(1).toLowerCase()}</p>
                <p>{petDetails.breed.charAt(0).toUpperCase() + petDetails.breed.slice(1).toLowerCase()}</p>
                <p>{petDetails.age} Years old</p>
                </div>
                </div>
            </div>
            </div>
            <div className='flex'>
            <div className='w-1/2 h-[30vh]  bg-gray-800'>{petDetails.desc}</div>
            <div className='w-1/2 h-[30vh]  bg-gray-800 text-center'>
            <button className='bg-gray-900 p-8 text-6xl  rounded-3xl'>Adopt</button>
            </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default AdoptPage