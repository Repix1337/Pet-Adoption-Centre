import { Navbar } from "./components/navbar.js";
import { Main } from "./components/Main.js";
import { PetPanel } from "./components/petPanel.js";
import { FindUsPanel } from "./components/findUsPanel.js";
import { About } from "./components/about.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";
import { useEffect, useState } from "react";

function MainSite() {
  const [isVisible, setIsVisible] = useState(false);
  const handleNavButtonClick = (event) => {
    let targetElement = document.querySelector("."+event.target.id)
    setIsVisible(true);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      
    }
  }
  const goTop = () => {
    setIsVisible(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    setInterval(() => {
      if (window.scrollY === 0){
        setIsVisible(false);
        return
      }
      else {
        setIsVisible(true);
        return
      }
    }, 1000)
  }, [])
  return (
    <div className="mainSite w-[100vw] min-h-screen bg-slate-800 overflow-y-auto overflow-x-hidden ">
      <Navbar handleClick={handleNavButtonClick}/>
      <Main />
      <PetPanel/>
      <FindUsPanel/>
      <About/>
      <Contact/>
      <Footer />
      <button onClick={goTop} className={`goTopButton bg-slate-600 p-10 border-black border-[3px] text-white rounded-full 
      z-10 fixed bottom-4 right-4  transition-opacity duration-300 ease-in-out text-3xl 
        ${isVisible ? 'opacity-100 ' : 'opacity-0 '}`}>Go Top</button>
    </div>
  );
}

export default MainSite;
