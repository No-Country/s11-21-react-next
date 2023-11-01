"use client"
import Map from "@/components/Map/Map";
import { SearchButtons } from "@/components/SearchButtons/SearchButtons";
import SearchInput from "@/components/Searcher/searchInput";
import SearchResultCard from "@/components/SearchResultCard/SearchResultCard";
import React, { useState, useEffect } from "react";

function SearchresultPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [mapLocations, setMapLocations] = useState([]);

  useEffect(() => {
    
    fetch("https://nearby-back.vercel.app/api/place/search?place=desestresante")
      .then((response) => response.json())
      .then((data) => {
        
        setSearchResults(data.results);  
       
        const locations = data.results.map((result) => ({
          lat: result.latitude,
          lng: result.longitude,
          name: result.name, 
        }));  
        
        setMapLocations(locations);
      })
      .catch((error) => {
        console.error("Error al obtener los resultados de búsqueda:", error);
      });
  }, []);
  
  return (
    <div className="flex flex-col h-auto justify-center items-center mt-12">
      <SearchButtons />
      <SearchInput />
      <Map locations={mapLocations} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-3">
  {searchResults.map((result, index) => (
    <SearchResultCard key={index} result={result} />
  ))}
</div>
    </div>
  );
}

export default SearchresultPage;
