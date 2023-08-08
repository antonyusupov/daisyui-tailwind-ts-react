import {  useState } from "react";
const Navbar = () => {
  
  const [menuActive, setMenuActive] = useState(false);
  
  const menuLinks = document.querySelector('#menuLinks');
  
  const handleState = () => {
    setMenuActive((prevState) => !prevState);
    toggleMenu()
  }
  
  const  toggleMenu = () => {
    if ( !menuActive === true) {
      menuLinks?.classList.remove('hidden');
    } else {
      menuLinks?.classList.add('hidden');
    }
  }


  return (
    <>
      <div className="navbar bg-black text-neutral-content flex justify-between relative">
        <a className="btn btn-ghost text-white normal-case text-xl md:text-2xl">Designer</a>
        <label className="btn btn-circle swap swap-rotate bg-neutral" onClick={() => console.log('working')}>
    
          {/* this hidden checkbox controls the state */}
          <input type="checkbox"  onClick={handleState}/>
          
          {/* hamburger icon */}
          <svg  className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
          
          {/* close icon */}
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
        </label>

        <ul className="menu rounded-box bg-neutral absolute right-5 top-20 z-50 items-start hidden lg:w-64" id="menuLinks">
          <li><a className="md:text-lg">Home</a></li>
          <li><a className="md:text-lg">Works</a></li>
          <li><a className="md:text-lg">Associates</a></li>
          <li><a className="md:text-lg">Offers</a></li>
          <li><a className="md:text-lg">Contact</a></li>
        </ul>
      </div>
    </>

  )
}

export default Navbar;