import Service from "./Services"


export const About = () => {
  return (
    <section className=' h-screen relative snap-start'>
         <div className='shape absolute w-full h-[60vh]  left-0 right-0 '></div>
         <div className="h-full w-full backdrop-blur-3xl flex flex-col  justify-center p-40">
            <h1 className="text-8xl  p-20">Services</h1>
            <div className="  b self-center  flex flex-col justify-center items-center w-full6  font-sans">
               <Service/>
            </div>
            <div className="px-10 py-20">
               <div className="flex items-center justify-around gap-40">
                  <h1 className="text-5xl">Brands</h1>
                  <ul className="space-y-2">
                     <p>Development</p>
                     <li className="opacity-60">Front-end</li>
                     <li className="opacity-60">Back-end</li>
                     <li className="opacity-60">Seo and serm optimization</li>
                  </ul>
                  <ul className="space-y-2">
                     <p>Design</p>
                     <li className="opacity-60">UI/UX</li>
                     <li className="opacity-60">Branding</li>
                     <li className="opacity-60">Motion Design</li>
                  </ul>
               </div>
            </div>
         

         </div>
    </section>
  )
}
