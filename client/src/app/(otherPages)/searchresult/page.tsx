"use client";
import Map from "@/components/Map/Map";
import { SearchButtons } from "@/components/SearchButtons/SearchButtons";
import { SearchInput } from "@/components/Searcher/searchInput";
import SearchResultCard from "@/components/SearchResultCard/SearchResultCard";
import { search } from "@/services/apiCall";
import React, { useState, useEffect } from "react";
import { Lugares } from "@/services/apiCall";

function SearchresultPage() {
  const [searchResults, setSearchResults] = useState<Lugares[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<Lugares>();
  const [mapLocations, setMapLocations] = useState([]);

  useEffect(() => {
    /* fetch("https://nearby-back.vercel.app/api/place/search?place=parque")
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
      }); */
    search(searchTerm).then((result) => {
      setSearchResults(result);
    });
  }, [searchTerm]);

  return (
    <div className="flex flex-col h-auto justify-center items-center mt-12">
      <SearchButtons searchTerm={setSearchTerm} />
      <SearchInput />
      <div className="w-[90%] mx-auto my-10">
        <Map lugar={selected} />
        {selected && (
          <div className="bg-[#FFF4E0] px-3 py-2 shadow-md rounded-b-lg">
            {selected?.placeName} - {selected?.zone}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-3">
        {searchResults &&
          searchResults.map((result, index) => (
            <SearchResultCard
              key={index}
              lugar={result}
              setSelected={setSelected}
            />
          ))}
      </div>
    </div>
  );
}

export default SearchresultPage;
