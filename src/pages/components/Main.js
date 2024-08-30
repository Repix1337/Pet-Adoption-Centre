import { Link } from 'react-router-dom';
export function Main() {
    return (
      <div 
        className="relative h-[70vh] w-full bg-black bg-cover bg-center text-white flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(/images/main.png)` }}
      >
        <div className="absolute inset-0  bg-black bg-opacity-30" />
        <div className="relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-8xl text-white">Adopt a Pet</h1>
          
          <button className="bg-gray-100 bg-opacity-50 text-black w-2/3 border-black border-4 p-3 rounded-full text-6xl mt-3">
          <Link to='/search'>
            Here
            </Link>
          </button>
          
        </div>
      </div>
    );
  }