import React from 'react';
import { GridItemLink } from './GridItemLink';

export const GridLayout = () => {
  return (
    <div className=" grid grid-cols-2 grid-rows-4 gap-4 p-4 w-[90%] mx-auto">
      <GridItemLink href={"d"} className="bg-red-500 text-white col-span-2 row-span-2 flex items-center justify-center "></GridItemLink>
      <div className="bg-blue-500 text-white col-span-1 row-span-2 flex items-center justify-center min-h-[250px]">Carta 2</div>
      <div className="bg-green-500 text-white col-span-1 row-span-1 flex items-center justify-center min-h-[250px]">Carta 3</div>
      <div className="bg-yellow-500 text-white col-span-1 row-span-1 flex items-center justify-center min-h-[250px]">Carta 4</div>
      <div className="bg-purple-500 text-white col-span-1 row-span-2 flex items-center justify-center min-h-[250px]">Carta 5</div>
      <div className="bg-orange-500 text-white col-span-1 row-span-2 flex items-center justify-center min-h-[250px]">Carta 6</div>
      <div className="bg-teal-500 text-white col-span-2 row-span-2 flex items-center justify-center min-h-[500px]">Carta 7</div>
    </div>
  );
};
