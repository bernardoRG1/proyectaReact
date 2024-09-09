import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa"
export const Contact = () => {
  return (
    <section className="  h-screen relative snap-start">
      <div className="backdrop-blur-2xl flex items-center justify-between px-60 py-20">
         <p className="text-4xl w-96">We are a marketing agency, motivated by the goals of our allied brands. Experts in marketing, public relations, advertising, digital and web strategies.</p>
         <button className="glass-btn size-48 rounded-full text-lg">Start a project</button>
         
      </div>
      <div className="text-xl px-60  flex-wrap flex items-center justify-between">
         <div className="space-y-2">
            <p className="opacity-60">Phone Number</p>
            <p>+669 xxx xxxx</p>
         </div>
         <div className="space-y-2 ">
            <p className="opacity-60">Email</p>
            <p>proyecta@gmail.com</p>
         </div>
         <div className="space-y-2 ">
            <p className="opacity-60">Social media</p>
            <div className="flex gap-8">
               <FaBehance className="hover:text-red-500 cursor-pointer"/>
               <FaFacebookF className="hover:text-red-500 cursor-pointer"/>
               <FaInstagram className="hover:text-red-500 cursor-pointer"/>
            </div>
         </div>
         <div className="w-full py-5">
            <div className="space-y-2">
               <p className="opacity-60">Direction</p>
               <p>Cerro de la Colorada 143, Fracc. Lomas de Mazatlán. <br />
               C.P. 82110.Mazatlán, Sinaloa, México.</p>
            </div>
         </div>
      </div>
      <footer className="mx-auto  opacity-50 flex justify-center  items-center">
         <p className="text-lg">&copy;2024 All right reserved </p>
      
      </footer>

   
    </section>
  )
}
