"use client";
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { Lugares } from "@/services/apiCall";

interface MapProps {
  lugar: Lugares | undefined;
}
interface UpdateMapCentreProps {
  mapCentre: { lat: number; lng: number };
}

const Map: React.FC<MapProps> = ({ lugar }) => {
  let ubicacion = { lat: -27.451053, lng: -58.986198 };
  if (lugar) {
    ubicacion = {
      lat: parseFloat(lugar?.latitude),
      lng: parseFloat(lugar?.longitude),
    };
  }

  const UpdateMapCentre: React.FC<UpdateMapCentreProps> = ({ mapCentre }) => {
    const map = useMap(); // Obtén una referencia al mapa

    useEffect(() => {
      if (map) {
        map.panTo(mapCentre); // Actualiza la posición del mapa al montar este componente
      }
    }, [map, mapCentre]);

    return null; // No se renderiza nada
  };

  return (
    <MapContainer
      center={ubicacion}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={ubicacion} />
      <UpdateMapCentre mapCentre={ubicacion} />
      {/* Componente que actualiza la posición */}
    </MapContainer>
  );
};

export default Map;
