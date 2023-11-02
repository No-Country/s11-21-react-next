"use client";
import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import AddressModal from "./AddressModal";
import { APICreatePlace, CreatePlaceData } from "@/services/apiCall";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FormEventTarget extends EventTarget {
  email: { value: string };
  category: { value: string };
  description: { value: string };
  latitude: { value: string };
  longitude: { value: string };
  placeName: { value: string };
  socialNetworks: { value: [] };
  zone: { value: string };
}

interface FileUploaderProps {
  setImagesUrl: (imageUrl: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ setImagesUrl }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const reader = new FileReader();

      reader.onload = (event) => {
        if (
          typeof event?.target?.result === "string" &&
          event.target !== null
        ) {
          setImagesUrl(event.target.result);
        }
      };

      reader.readAsDataURL(file);
    },
    [setImagesUrl]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop files here, or click to select files</p>
      </div>
    </div>
  );
};

const AttractionsForm = () => {
  const [imagesUrl, setImagesUrl] = useState("");
  const [formData, setFormData] = useState<CreatePlaceData>({
    placeName: "",
    latitude: "",
    longitude: "",
    description: "",
    category: "",
    website: "",
    socialNetworks: [],
    zone: "",
    createdBy: "",
    imagesUrl: "",
  });

  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const navigation = useRouter();
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {

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

  const handleCreatePlace = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const target = e.target as FormEventTarget;
    const {
      email,
      category,
      description,
      latitude,
      longitude,
      placeName,
      socialNetworks,
      zone,
    } = target;

    const newPlace = {
      createdBy: email.value,
      category: category.value,
      description: description.value,
      latitude: "-34.6079801",
      longitude: "-58.3677361",
      placeName: placeName.value,
      socialNetworks: socialNetworks.value,
      zone: "Capital Federal, Argentina",
      imagesUrl: imagesUrl,
      website: "",
    };
    await APICreatePlace(newPlace);
    toast("Lugar creado con Exito");
    navigation.push("/home");
  };

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <form
        onSubmit={handleCreatePlace}
        className="w-290px md:w-full p-4 rounded-md"
      >
        {/* Datos personales */}
        <div className="flex flex-col md:flex-row md:justify-center items-center mb-6 bg-secondary w-full md:p-0 p-5 rounded-lg md:py-4">
          <div className="flex flex-col md:flex w-full mb-4 md:w-[90%]">
            <h3 className="text-lg font-medium text-primary mb-2">
              Datos personales
            </h3>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full flex flex-col">
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
              <div className="w-full flex flex-col">
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
          </div>
        </div>

        {/* Datos de la atracción */}
        <div className="flex flex-col mb-6 bg-secondary w-full p-5 rounded-lg ">
          <h3 className="text-lg font-medium text-primary mb-2 ">
            Datos de la atracción
          </h3>
          <div className="md:flex md:flex-row md:justify-center md:gap-2 md:w-full">
            <div className="flex flex-col mb-4 w-full">
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
                name="placeName"
                className="w-full p-2 border border-FD7B03 rounded-lg mb-4"
              />
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label
                className="block text-primary mb-2 text-sm"
                htmlFor="hours"
              >
                Dirección del sitio
              </label>
              <button
                type="button"
                className="p-2 border border-primary rounded-lg mb-4  bg-secondary text-primary text-left text-sm"
                onClick={toggleAddressPopup}
              >
                Ingresa una dirección
              </button>
            </div>
          </div>


          {/* TODO: Implementar lógica para el popup de dirección del sitio y mapa */}

          <div className="flex flex-col w-full mb-4 md:flex-row md:justify-center  md:gap-2">
            {/* Descripción */}
            <div className="hidden md:block md:w-full">
              <label
                className="block text-primary mb-2 text-sm"
                htmlFor="website"
              >
                Página web (opcional)
              </label>
              <input
                type="url" // Para validar que sea una URL
                id="website"
                name="website"
                className="md:w-full p-2 rounded-lg mb-4"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="md:hidden w-full">
              <label
                className="block text-primary mb-2 text-sm"
                htmlFor="description"
              >
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full p-2 border border-FD7B03 rounded-lg mb-4 h-24"
              ></textarea>
            </div>
            <div className="w-full">
              <label
                className="block text-primary mb-2 text-sm"
                htmlFor="category"
              >
                Categoría (opcional)
              </label>
              <select
                id="category"
                name="category"
                className="w-full p-2 border border-primary text-primary bg-secondary rounded-lg text-sm mb-4"
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
            </div>
          </div>

          <div className="md:hidden w-full">

            <label
              className="block text-primary mb-2 text-sm"
              htmlFor="website"
            >
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
          </div>
          <div className="hidden md:block">
            <label
              className="block text-primary mb-2 text-sm"
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="w-64 md:w-full p-2 border border-FD7B03 rounded-lg mb-4 h-24"
            ></textarea>
          </div>
          <div>
            <div className="flex flex-col items-center lg:justify-center">
              <div className="relative border border-primary rounded-lg border-dashed w-full mb-4 p-4 text-primary text-center lg:h-[140px] lg:my-auto">
                <FileUploader setImagesUrl={setImagesUrl} />
                {/* <input
                  type="file"
                  id="photos"
                  name="photos"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleChange}
                  accept="image/*"
                  multiple
                /> */}
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
        {/* Redes sociales de la atracción */}
        <div className="flex flex-col items-center mb-6 bg-secondary w-full p-5 rounded-lg">
          <h3 className="text-lg font-medium text-primary mb-2 md:text-left md:w-full">
            Redes sociales de la atracción
          </h3>
          <div className="flex flex-col w-64 mb-4 md:flex-row md:flex-wrap md:w-full">
            {/* Facebook */}
            <div className="md:w-1/2">
              <label
                className="block text-primary mb-2 text-sm"
                htmlFor="facebook"
              >
                Facebook (opcional)
              </label>
              <input
                type="text"
                id="facebook"
                name="socialNetworks"
                className="w-64 md:w-full p-2 border border-FD7B03 rounded-lg mb-4"
              />
            </div>

            {/* Instagram */}
            <div className="md:w-1/2">
              <label
                className="block text-primary mb-2 text-sm"
                htmlFor="instagram"
              >
                Instagram (opcional)
              </label>
              <input
                type="text"
                id="instagram"
                name="socialNetworks"
                className="w-64 p-2 md:w-full border border-FD7B03 rounded-lg mb-4"
              />
            </div>

            {/* Otra red social */}
            <div className="md:w-1/2">
              <label
                className="block text-primary mb-2 text-sm"
                htmlFor="otherSocial"
              >
                Agrega otra red social (opcional)
              </label>
              <input
                type="text"
                id="otherSocial"
                name="socialNetworks"
                className="w-64 p-2 border md:w-full border-FD7B03 rounded-lg mb-4"
              />
            </div>
          </div>
        </div>

        {/* Información sobre evaluación */}
        <p className="text-black mb-6 text-justify text-sm lg:text-base lg:font-semibold md:w-[746px] lg:text-center lg:mx-auto">
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
