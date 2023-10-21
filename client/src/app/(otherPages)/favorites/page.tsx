"use client";
import React from 'react';
import CardFavorite from '../../../components/CardFavorite/page';
import Formulario from '@/components/AlFormulario/AlFormulario';

export default function Page() {
  const numColumnsMobile = 1; 
  const numColumnsTablet = 1;

  const renderCardFavorites = (numColumns:number) => {
    const cardFavorites = [];
    for (let i = 0; i < numColumns; i++) {
      cardFavorites.push(
        <div key={`card-${i}`} className={`mb-2 sm:mb-0 mx-4`}>
          <CardFavorite />
        </div>
      );
    }
    return cardFavorites;
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <h3 className="text-black font-semibold text-center w-full">
          Favoritos
        </h3>
      </div>

      <div className="flex justify-center">
        {renderCardFavorites(numColumnsMobile)}
        <div className="w-full text-center mt-2 sm:hidden">
          {renderCardFavorites(numColumnsTablet)} 
        </div>
      </div>
      
      <Formulario />
    </div>
  );
}
