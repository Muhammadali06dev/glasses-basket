
import { useSelector } from "react-redux"

function Header() {
   const { basket } = useSelector(state => state.basket)
   return (
      <header className=" py-2.5 relative bg-[#DAC0A3] shadow-3x">
         <div className="container flex items-center justify-between">
            <h2 className="text-3xl font-bold">Glasses</h2>
            <nav>
               <ul className="flex items-center gap-10">
                  <li className="text-2xl font-semibold"><a href="./">Home</a></li>
                  <li className="text-2xl relative">
                     <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
                     </a>
                     <span className="absolute flex items-center justify-center h-4 w-4 bg-red-500 text-white rounded-full text-center text-[12px]  top-[-8px] right-[-14px]">{basket}</span>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Header