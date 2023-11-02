"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import AddressModal from "./AddressModal";

const AttractionsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attractionName: "",
    address: "",
    schedule: "",
    description: "",
    category: "",
    website: "",
    facebook: "",
    instagram: "",
    otherSocial: "",
    photos: []
  });

  const [showAddressPopup, setShowAddressPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "photos") {
      const files = Array.from(e.target.files);
      const photosPromises = files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });
      Promise.all(photosPromises).then((photosBase64) => {
        setFormData((prevState) => ({ ...prevState, photos: photosBase64 }));
      });
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  
  const postData = {
    ...formData,
    category: "p",
    createdBy: "camilo@gmail.com",
    description: "En el museo del oro encontraras piezas e increible historia de nuestros antepasados de Colombia",
    imagesUrl: formData.photos,
    latitude: "4.6020241",
    longitude: "-74.0733601",
    placeName: formData.attractionName,
    socialNetworks: [formData.facebook, formData.instagram, formData.otherSocial].filter(Boolean), // Filtramos las entradas vacías
    zone: "Bogotá, Colombia",
    website: formData.website
  };

  try {
    const response = await fetch('https://nearby-back.vercel.app/api/place/createPlace', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    const responseData = await response.json();

    if (response.ok) {
      
      console.log('Place created successfully:', responseData);
      
    } else {
      
      console.error('Server responded with an error:', responseData);
      
    }
  } catch (error) {
    
    console.error('Failed to connect to the API:', error);
    
  }
};


  const toggleAddressPopup = () => {
    setShowAddressPopup(!showAddressPopup);
  };

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <form onSubmit={handleSubmit} className="w-290px p-4 rounded-md">
        {/* Datos personales */}
        <div className="flex flex-col items-center mb-6 bg-secondary w-full p-5 rounded-lg">
          <div className="flex flex-col w-64 mb-4">
            <h3 className="text-lg font-medium text-primary mb-2">
              Datos personales
            </h3>
            <label className="text-primary mb-2 text-sm" htmlFor="name">
              Nombre y apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 border rounded-lg"
            />
          </div>

          <div className="flex flex-col w-64">
            <label className="text-primary mb-2 text-sm" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border border-FD7B03 rounded-lg"
            />
          </div>
        </div>

        {/* Datos de la atracción */}
        <div className="flex flex-col items-center mb-6 bg-secondary w-full p-5 rounded-lg">
          <div className="flex flex-col w-64 mb-4">
            <h3 className="text-lg font-medium text-primary mb-2">
              Datos de la atracción
            </h3>

            {/* Título/Nombre */}
            <label
              className="block text-primary mb-2 text-sm"
              htmlFor="attractionName"
            >
              Título/Nombre
            </label>
            <input
              type="text"
              id="attractionName"
              name="attractionName"
              className="w-64 p-2 border border-FD7B03 rounded-lg mb-4"
            />
          </div>
          <div className="flex flex-col w-64 mb-4">
          <label className="block text-primary mb-2 text-sm" htmlFor="hours">
            Dirección del sitio
          </label>
          <button
            type="button"
            className="w-64 p-2 border border-primary rounded-lg mb-4  bg-secondary text-primary text-left text-sm"
            onClick={toggleAddressPopup}
          >
            Ingresa una dirección
          </button>

          {/* Descripción */}
          <label
            className="block text-primary mb-2 text-sm"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            className="w-64 p-2 border border-FD7B03 rounded-lg mb-4 h-24"
          ></textarea>

          <label className="block text-primary mb-2 text-sm" htmlFor="category">
            Categoría (opcional)
          </label>
          <select
            id="category"
            name="category"
            className="w-64 p-2 border border-primary text-primary bg-secondary rounded-lg text-sm mb-4"
            onChange={handleChange}
            value={formData.category}
            style={{
              backgroundColor: "secondary",
            }}
          >
            <option value="" className="bg-secondary">
              Seleccionar una categoría
            </option>
            <option value="Música" className="bg-secondary">
              Música
            </option>
            <option value="Parques" className="bg-secondary">
              Parques
            </option>
            <option value="Museos" className="bg-secondary">
              Museos
            </option>
            <option value="Teatro" className="bg-secondary">
              Teatro
            </option>
            <option value="Cine" className="bg-secondary">
              Cine
            </option>
            <option value="Centro Histórico" className="bg-secondary">
              Centro Histórico
            </option>
            <option value="Iglesias" className="bg-secondary">
              Iglesias
            </option>
            <option value="Deportes" className="bg-secondary">
              Deportes
            </option>
          </select>

          <label className="block text-primary mb-2 text-sm" htmlFor="website">
            Página web (opcional)
          </label>
          <input
            type="url" // Para validar que sea una URL
            id="website"
            name="website"
            className="w-full p-2 border border-primary rounded-lg mb-4"
            value={formData.website}
            onChange={handleChange}
          />
          <p></p>

          <div className="flex flex-col items-center">
            <div className="relative border border-primary rounded-lg border-dashed w-64 mb-4 p-4 text-primary text-center">
              <input
                type="file"
                id="photos"
                name="photos"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleChange}
                accept="image/*"
                multiple
              />
              <FontAwesomeIcon
                icon={faImage}
                className="mt-2 text-primary text-2xl"
              />
              <p className="mt-2 text-sm">Agrega las fotos de la atracción</p>
            </div>
          </div>

          {/* TODO: Implementar los demás campos según tus especificaciones */}
        </div>
        </div>
        {/* TODO: Implementar lógica para el popup de dirección del sitio y mapa */}

        {/* Horario */}
        

        {/* Redes sociales de la atracción */}
        <div className="flex flex-col items-center mb-6 bg-secondary w-full p-5 rounded-lg">
          <div className="flex flex-col w-64 mb-4">
            <h3 className="text-lg font-medium text-primary mb-2">
              Redes sociales de la atracción
            </h3>

            {/* Facebook */}
            <label
              className="block text-primary mb-2 text-sm"
              htmlFor="facebook"
            >
              Facebook (opcional)
            </label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              className="w-64 p-2 border border-FD7B03 rounded-lg mb-4"
            />

            {/* Instagram */}
            <label
              className="block text-primary mb-2 text-sm"
              htmlFor="instagram"
            >
              Instagram (opcional)
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              className="w-64 p-2 border border-FD7B03 rounded-lg mb-4"
            />

            {/* Otra red social */}
            <label
              className="block text-primary mb-2 text-sm"
              htmlFor="otherSocial"
            >
              Agrega otra red social (opcional)
            </label>
            <input
              type="text"
              id="otherSocial"
              name="otherSocial"
              className="w-64 p-2 border border-FD7B03 rounded-lg mb-4"
            />
          </div>
        </div>

        {/* Información sobre evaluación */}
        <p className="text-black mb-6 text-justify text-sm">
          Te informaremos cuando tu solicitud ha sido evaluada y cumpla con los
          requisitos de la comunidad viajera.
        </p>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-primary text-white w-44 h-8 rounded-md"
          >
            Continuar
          </button>
          <AddressModal
            isOpen={showAddressPopup}
            onClose={toggleAddressPopup}
          />
        </div>
      </form>
    </div>
  );
};

export default AttractionsForm;
