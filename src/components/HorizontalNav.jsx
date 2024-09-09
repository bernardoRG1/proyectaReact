import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
export const HorizontalNav = () => {
  return (
   <div className="fixed h-[40vh] bg0 bottom-0 w-24 flex  flex-col justify-between items-center p-10 ">
   <div className="flex items-center gap-8 -rotate-90">
     <p className="rotate-90 text-red-500 hover:text-white">Eng</p>
    
     <p className="rotate-90 hover:text-red-500">Esp</p>
   </div>
   <div className="space-y-8">
     <FaBehance className="hover:text-red-500 cursor-pointer" />
     <FaFacebookF className="hover:text-red-500 cursor-pointer" />
     <FaInstagram className="hover:text-red-500 cursor-pointer" />
   </div>
 </div>
  )
}
