import React from 'react';
import { GridItemLink } from './GridItemLink';
import { GridItemVideo } from './GridItemVideo';
import AcuarioBg from '../../assets/backgrounds/GAM.mp4'
import MazatunBg from '../../assets/backgrounds/MAZATUN.webp';
import lasGaviasBg from '../../assets/backgrounds/GAVIANA.webp';
import PalmaresBg from '../../assets/backgrounds/PALMARES.webp';
import GavianaBg from '../../assets/backgrounds/GAVIANA2.webp';
import TianguisBg from '../../assets/backgrounds/TIANGUIS.webp';
import VitoreBg from '../../assets/backgrounds/Vittore.mp4'


export const GridLayout = () => {
  return (
      <>
        <div className='w-[90%] pl-4 mx-auto'>
          <p className='text-red-500'>Proyectos</p>
          <p>Proyectos</p>
        </div>
        <div className=" grid grid-cols-2 grid-rows-8 gap-4 p-4 w-[90%] mx-auto">
          <GridItemVideo videoSrc={AcuarioBg} className="bg-red-500 text-white col-span-2 row-span-2 flex items-center justify-center "></GridItemVideo>
          <GridItemLink href={"/mazatun"} bgImage={MazatunBg} className="bg-blue-500 text-white col-span-1 row-span-2 flex items-center justify-center min-h-[350px]">Carta 2</GridItemLink>
          <GridItemLink href={"/gaviana"} bgImage={lasGaviasBg} className="bg-green-500 text-white col-span-1 row-span-1 flex items-center justify-center min-h-[350px]">Carta 3</GridItemLink>
          <GridItemLink href={"/palmres"} bgImage={PalmaresBg} className="bg-yellow-500 text-white col-span-1 row-span-1 flex items-center justify-center min-h-[350px]">Carta 4</GridItemLink>
          <GridItemLink bgImage={GavianaBg} className="bg-purple-500 text-white col-span-1 row-span-2 flex items-center justify-center min-h-[350px]">Carta 5</GridItemLink>
          <GridItemVideo videoSrc={VitoreBg} className="bg-orange-500 text-white col-span-1 row-span-2 flex items-center justify-center min-h-[350px]">Carta 6</GridItemVideo>
          <GridItemLink bgImage={TianguisBg} className="bg-teal-500 text-white col-span-2 row-span-2 flex items-center justify-center min-h-[350px]">Carta 7</GridItemLink>
      </div>
      </>
  );
};
