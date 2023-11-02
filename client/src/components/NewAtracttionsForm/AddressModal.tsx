import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AddressModal = ({ isOpen, onClose }) => {
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState({ lat: -27.451053, lng: -58.986198 });
  const mapRef = useRef(null);

  useEffect(() => {
    if (isOpen && mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, [isOpen]);

  const searchAddress = async () => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${address}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      setPosition({ lat, lng: lon });
      if (mapRef.current) {
        mapRef.current.setView([lat, lon], 13);
      }
    } else {
      alert('Dirección no encontrada');
    }
  };


  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center h-screen">
      <div className="w-290px bg-secondary rounded-lg shadow-md">
      <div className="p-5 flex flex-col items-center mb-6">
      <div className="flex flex-col w-64 mb-4">
      <label htmlFor="siteAddress" className="text-primary mb-2 block">
              Dirección del sitio
            </label>
            <input
              type="text"
              id="siteAddress"
              placeholder="Ingresa una dirección"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              onKeyDown={e => e.key === 'Enter' && searchAddress()}
            />
            <button
              className="bg-primary p-2 text-white rounded-md w-full mb-4"
              onClick={searchAddress}
            >
              Buscar
            </button>
          </div>
          </div>

          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "300px", width: "100%" }}
            whenCreated={mapInstance => { mapRef.current = mapInstance; }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
          </MapContainer>
          <button
            className="mt-4 bg-primary p-2 text-white rounded-md w-full"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
