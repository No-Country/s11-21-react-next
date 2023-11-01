/* "use client"
import Link from "next/link";
import { BiCake } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { AiOutlinePushpin } from "react-icons/ai";  
import VectorMayor from '../../../../public/Vector-mayor.png';
import UrsulaPhoto from '../../../../public/ursula.png';
import Image from "next/image";
import SelectUserProfile from "./../../../components/UserProfile/SelectUserProfile";
import ButtonUserProfile from "./../../../components/UserProfile/ButtonUserProfile";
import { AiOutlineEdit } from "react-icons/ai";
import { Context } from '../../../context/Context';
import { useContext } from "react";


const UserProfile = () => {
    const { showIconEdit, setShowIconEdit, showInformation, setShowInformation, textButton, setTextButton} = useContext(Context);
    
    const handleButtonCancelOnClick = () => {
        setShowIconEdit("hidden");
        setShowInformation("block");
        setTextButton("Editar Perfil");
    }
    
  return (
    <div className="w-full my-5" >
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid justify-start">
                <div className="w-screen flex items-center gap-8 px-8">
                    <div className="relative">
                        <Image src={UrsulaPhoto} alt="Imagen Vector mayor" className='w-[71px] h-[71px] rounded-full' width={71} height={71} />

                        <div className={`${showIconEdit} absolute ml-12 -mt-5 w-[30px] h-[30px] rounded-full bg-[#FFCF91] grid items-center justify-center`}>
                            <span className={`${showIconEdit} text-[#FD7B03]`}>
                                <AiOutlineEdit />
                            </span>
                        </div>
                    </div>

                    <div className="text-left ">
                        <div className="w-[207px] flex items-center justify-between">
                            <div className="">
                                <p className={`${showInformation} font-bold`}>Ursula Vial</p>

                                <input  
                                    className={`${showIconEdit} w-[190px] border-[#FD7B03] font-bold text-sm`}  
                                    type="text"
                                    placeholder="Ursula Vial"
                                />
                            </div>
                            <span className={`${showIconEdit} text-[#FD7B03]`}>
                                <AiOutlineEdit />
                            </span>
                        </div>

                        <div className="w-full mb-2"><div className={`${showIconEdit} w-full bg-[#FFCF91] h-[1px]`}></div></div>
                        
                        <div className="w-[207px] flex items-center justify-between">
                            <div className="">
                                <p className={`${showInformation} text-xs`}>ursulavial@gmail.com </p>

                                <input
                                    className={`${showIconEdit} w-[190px] border-[#FD7B03] font-bold text-sm`}
                                    type="email"
                                    placeholder="ursulavial@gmail.com"
                                />
                            </div>
                            <span className={`${showIconEdit} text-[#FD7B03]`}>
                                <AiOutlineEdit />
                            </span>
                        </div>

                        <div className="w-full mb-2"><div className={`${showIconEdit} w-full bg-[#FFCF91] h-[1px]`}></div></div>
                    </div>
                </div>

                <div className={`${showIconEdit} w-screen text-left mt-3 px-8`}>
                    <div className="w-full flex items-center justify-between mb-2">  
                        <input
                            className="text-xs"
                            type="file"
                        />

                        <span className={`${showIconEdit} text-[#FD7B03] mb-[-18px]`}>
                            <AiOutlineEdit />
                        </span>
                    </div>
                    <div className="mb-2"><div className={`${showIconEdit}  bg-[#FFCF91] h-[1px]`}></div></div>
                </div>


                <div className="w-screen text-left mt-1 px-8">
                    <div className="flex items-center gap-2">     
                        <span className="text-[#FD7B03] text-xl">
                            <FiMapPin />
                        </span>
                        
                        <div className="w-full flex items-center justify-between">
                            <p className={`${showInformation} text-xs`}>Santiago de Chile </p>
                            
                            <input  
                                className={`${showIconEdit} w-[260px] border-[#FD7B03] font-bold text-sm`}  
                                type="text"
                                placeholder="Santiago de Chile"
                            />

                            <span className={`${showIconEdit} text-[#FD7B03]`}>
                                <AiOutlineEdit />
                            </span>
                        </div>     
                    </div>

                    <div className="mb-2"><div className={`${showIconEdit} ml-[28px] bg-[#FFCF91] h-[1px]`}></div></div> 

                    <div className="flex items-center gap-2">
                        <span className="text-[#FD7B03] text-xl">
                            <AiOutlinePushpin />
                        </span>

                        <div className="w-full flex items-center justify-between">
                            <p className={`${showInformation} text-xs`}>Me encanta conocer nuevos lugares</p>
                                
                            <textarea  
                                className={`${showIconEdit} w-[260px] border-[#FD7B03] font-bold text-sm`}  
                                placeholder="Me encanta conocer nuevos lugares"
                            />

                            <span className={`${showIconEdit} text-[#FD7B03] mb-[-22px]`}>
                                <AiOutlineEdit />
                            </span>
                        </div>
                    </div>

                    <div className="mb-2"><div className={`${showIconEdit} ml-[28px] bg-[#FFCF91] h-[1px]`}></div></div>
                </div>

                    <ButtonUserProfile />

                    <div className={`${showIconEdit} w-screen px-8 mb-5`}>
                        <button onClick={handleButtonCancelOnClick} className="w-full h-[40px] border-[1px] border-[#FD7B03] bg-[#FFF4E0] text-[#FD7B03] font-medium rounded-md text-sm">
                            Cancelar
                        </button>
                    </div>
                
                <div className="w-screen px-8 mb-5">
                    <div className="w-full h-[50px] bg-[#FFF4E0] rounded-lg flex items-center justify-evenly">
                        <span className="text-[#FD7B03] text-xl">
                            <BiCake />
                        </span>

                        <p className="text-xs">Te uniste el 03 de octubre, 2023</p>
                    </div>
                </div>

                <div className="w-screen mb-5 px-8"><div className="w-full bg-[#FFCF91] h-[1px]"></div></div>

                <div className="w-screen px-8">
                    <div className="h-[20px] flex justify-between items-center mb-5">
                        <p className="text-xs">Tus favoritos (4)</p>
                        <Image src={VectorMayor} alt="Imagen Vector mayor" className='w-[8px] h-[15px]' width={8} height={15} />
                    </div>
                </div>

                <div className="w-screen mb-5 px-8"><div className="w-full bg-[#FFCF91] h-[1px]"></div></div>

                <SelectUserProfile />          
            </div>
        </form>
    </div>
  )
}

export default UserProfile;  */


/* "use client";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { BiCake } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlinePushpin, AiOutlineEdit } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import SelectUserProfile from "./../../../components/UserProfile/SelectUserProfile";
//import ButtonUserProfile from "./../../../components/UserProfile/ButtonUserProfile";
import { Context } from "./../../../context/Context";
import { useContext } from "react";
import axios from "axios";
import UrsulaPhoto from "../../../../public/ursula.png";
import VectorMayor from "../../../../public/Vector-mayor.png";
import { text } from "stream/consumers";

interface UserData {
  userData: {
    updateData: {};
    name: string;
    lastname: string;
    email: string;
    //password: string;
    phone: string;
  };
}

const UserProfile = (): JSX.Element => {
  const {
    showIconEdit,
    setShowIconEdit,
    showInformation,
    setShowInformation,
    textButton,
    setTextButton,
    showErrorMessage,
    setShowErrorMessage,
  } = useContext(Context);

  const [userId, setUserId] = useState<string>("");
  const [name, setName] = useState<string>(""); 
  const [lastname, setLastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  //const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setUserId("Mk83k6Egl91dIWzkSRe6");
  }, [userId]);


  const handleButtonOnClick = async () => {
    try {
      const values = {
        name: userData.userData.name,
        lastname: userData.userData.lastname,
        phone: userData.userData.phone,
      };

      await updateUserProfile();
      setTextButton("Guardar");
      setShowIconEdit("block");
      setShowInformation("hidden");
      //setShowErrorMessage("");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  console.log(textButton);

  const handleButtonCancelOnClick = () => {
    setShowIconEdit("hidden");
    setShowInformation("block");
    setTextButton("Editar Perfil");
    //setShowErrorMessage("hidden");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    lastname: Yup.string().required("El apellido es obligatorio"),
    //email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es obligatorio"),
    //password: Yup.string().required("La contraseña es obligatoria"),
    phone: Yup.string().required("El número de teléfono es obligatorio"),
  });

  const [userData, setUserData] = useState<UserData>({
    userData: {
      updateData: {},
      name: "",
      lastname: "",
      email: "",
      //password: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (userId && textButton === "Editar perfil") {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `https://nearby-back.vercel.app/api/user/${userId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };

      fetchUserData();
    }
  }, [userId, textButton]);

  console.log(userId);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "lastname") {
      setLastname(value);
    } else if (name === "phone") {
      setLastname(value);
    }
  };

  const updateUserProfile = async () => {
    if (textButton === "Guardar" && userId) {
      try {
        const updatedUserData = {
          updateData: {
            name: name,
            lastname: lastname,
            phone: phone,
          },
        };

        console.log(updatedUserData);
        const response = await axios.put(
          `https://nearby-back.vercel.app/api/user/${userId}`,
          {
            updatedUserData,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Respuesta del backend:", response.data);
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
      }
    }
  };

  const firstLetter = userData.userData.name.charAt(0).toUpperCase();
  console.log(firstLetter);

  return (
    <div className="w-full my-5">
      <form onSubmit={updateUserProfile}>
        <div className="md:pt-2">
          <div className="md:flex justify-evenly">
            <div className="w-screen md:w-1/2 flex md:items-start md:ml-[5%] gap-6 px-8">
              <div className="">
                {" "}
                <div className="rounded-full bg-[#FD7B03] text-white w-[71px] h-[71px] flex text-center items-center justify-center text-4xl semibold">
                  {firstLetter}
                </div>
              </div>

              <div className="text-left w-full">
                <div className="flex items-center justify-between">
                  <div className="md:w-full">
                    <p
                      className={`${showInformation} font-bold`}
                    >{`${userData.userData.name} ${userData.userData.lastname}`}</p>
                    <input
                      type="text"
                      name="name"
                      className={`${showIconEdit} w-[190px] md:w-full border-[#FD7B03] font-bold text-sm]`}
                      placeholder={userData.userData.name}
                      value={name} // Usa el valor para mostrar el estado actual
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className={`${showIconEdit} text-[#FD7B03]`}>
                    <AiOutlineEdit />
                  </span>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="w-full">
                    <div
                      className={`${showIconEdit} w-full bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="md:w-full">
                    <input
                      type="text"
                      name="lastname"
                      className={`${showIconEdit} w-[190px] md:w-full border-[#FD7B03] font-bold text-sm`}
                      placeholder={userData.userData.lastname}
                      value={lastname} // Usa el valor para mostrar el estado actual
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className={`${showIconEdit} text-[#FD7B03]`}>
                    <AiOutlineEdit />
                  </span>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="w-full">
                    <div
                      className={`${showIconEdit} w-full bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="">
                    <p className={`${showInformation} text-xs`}>
                      {userData.userData.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-screen  md:w-1/2 text-left md:flex md:justify-end md:items-start md:mr-[5%] items-center mt-4      md:mt-0 px-8">
              <div className="md:mr-[5%]">
                <div className="flex items-center gap-2">
                  <span className="text-[#FD7B03] text-xl">
                    <BsTelephone />
                  </span>
                  <div className="w-full flex items-center justify-between">
                    <p className={`${showInformation} text-xs`}>
                      {userData.userData.phone}
                    </p>
                    <input
                      type="text"
                      name="phone"
                      className={`${showIconEdit} w-[260px] border-[#FD7B03] font-bold text-sm`}
                      placeholder={userData.userData.phone}
                      value={phone} // Usa el valor para mostrar el estado actual
                      onChange={handleInputChange}
                    />
                    <span className={`${showIconEdit} text-[#FD7B03] `}>
                      <AiOutlineEdit />
                    </span>
                  </div>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="">
                    <div
                      className={`${showIconEdit} ml-[28px] bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-[#FD7B03] text-xl">
                    <RiLockPasswordLine />
                  </span>
                  <div className="w-full flex items-center justify-between">
                    <p className={`${showInformation} text-xs`}>12345678</p>

            
                    <span className={`${showIconEdit} text-[#FD7B03]`}>
                      <AiOutlineEdit />
                    </span>
                  </div>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="">
                    <div
                      className={`${showIconEdit} ml-[28px] bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen px-8 mb-5">
            <div className="w-full flex justify-center">
              <button
                className="w-full md:w-[380px] h-[40px] bg-[#FD7B03]  text-white font-medium mt-5 rounded-md text-sm"
                onClick={handleButtonOnClick}
                type={textButton === "Editar Perfil" ? "button" : "submit"}
              >
                {textButton}
              </button>
            </div>
          </div>

          <div className={`${showIconEdit} w-screen px-8 mb-5 flex`}>
            <div className="w-full flex justify-center">
              <button
                onClick={handleButtonCancelOnClick}
                type="button"
                className="w-full md:w-[380px] h-[40px] border-[1px] border-[#FD7B03] bg-[#FFF4E0] text-[#FD7B03] font-medium rounded-md text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
          <div className="w-screen px-8 mb-5">
            <div className="w-full h-[50px] bg-[#FFF4E0] rounded-lg flex items-center justify-evenly md:justify-start md-gap2">
              <span className="text-[#FD7B03] text-xl md:pl-[2%] md:pr-2">
                <BiCake />
              </span>
              <p className="text-xs">Te uniste el 03 de octubre, 2023</p>
            </div>
          </div>
          <div className="w-screen mb-5 px-8">
            <div className="w-full bg-[#FFCF91] h-[1px]"></div>
          </div>
          <div className="w-screen px-8">
            <div className="h-[20px] flex justify-between items-center mb-5">
              <p className="text-xs">Tus favoritos (4)</p>
              <Image
                src={VectorMayor}
                alt="Imagen Vector mayor"
                className="w-[8px] h-[15px]"
                width={8}
                height={15}
              />
            </div>
          </div>
          <SelectUserProfile />
        </div>
      </form>
    </div>
  );
};

export default UserProfile; */  



"use client";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { BiCake } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlinePushpin, AiOutlineEdit } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import SelectUserProfile from "./../../../components/UserProfile/SelectUserProfile";
//import ButtonUserProfile from "./../../../components/UserProfile/ButtonUserProfile";
import { Context } from "./../../../context/Context";
import { useContext } from "react";
import axios from "axios";
import UrsulaPhoto from "../../../../public/ursula.png";
import VectorMayor from "../../../../public/Vector-mayor.png";
import { text } from "stream/consumers";
import { useRouter } from "next/navigation";

interface UserData {
  userData: {
    updateData: {};
    name: string;
    lastname: string;
    email: string;
    //password: string;
    phone: string;
  };
}

const UserProfile = (): JSX.Element => {
  const {
    showIconEdit,
    setShowIconEdit,
    showInformation,
    setShowInformation,
    textButton,
    setTextButton,
    showErrorMessage,
    setShowErrorMessage,
    userId,
    setUserId,
  } = useContext(Context);


  //const [userId, setUserId] = useState<string>("");
  const [oldName, setOldName] = useState<string>("");
  const [oldLastname, setOldLastname] = useState<string>("");
  const [oldPhone, setOldPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const navigate = useRouter();
  //const [password, setPassword] = useState<string>("");

  useEffect(() => {
    //console.log(userId);
  }, [userId]);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
  
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, [setUserId]);

  //console.log(userId)

  const handleButtonOnClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      if (editing === true) {
        const updateData = {
          name: name !== oldName ? name : oldName,
          lastname: lastname !== oldLastname ? lastname : oldLastname,
          phone: phone !== oldPhone ? phone : oldPhone,
        };

        await updateUserProfile();

        await updateUserProfile();
        setEditing(false);
        setTextButton("Editar Perfil");
        setShowIconEdit("hidden");
        setShowInformation("block");
      } else {
        e.preventDefault();
        setEditing(!editing);
        setTextButton("Guardar");
        setShowIconEdit("block");
        setShowInformation("hidden");
      }
      //setShowErrorMessage("");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  const handleButtonCancelOnClick = () => {
    setShowIconEdit("hidden");
    setShowInformation("block");
    setTextButton("Editar Perfil");
    setEditing(false);
    //setShowErrorMessage("hidden");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    lastname: Yup.string().required("El apellido es obligatorio"),
    //email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es obligatorio"),
    //password: Yup.string().required("La contraseña es obligatoria"),
    phone: Yup.string().required("El número de teléfono es obligatorio"),
  });

  const [userData, setUserData] = useState<UserData>({
    userData: {
      updateData: {},
      name: "",
      lastname: "",
      email: "",
      //password: "",
      phone: "",
    },
  });

  useEffect(() => {
    //console.log(editing);

    if (userId && !editing) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `https://nearby-back.vercel.app/api/user/${userId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setUserData(response.data);

          // Inicializa los campos en el estado con los valores actuales del usuario
          setName(userData.userData.name);
          setLastname(userData.userData.lastname);
          setPhone(userData.userData.phone);

          // Inicializa las variables "old" con los mismos valores
          setOldName(userData.userData.name);
          setOldLastname(userData.userData.lastname);
          setOldPhone(userData.userData.phone);


        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };

      fetchUserData();
    }
  }, [userId, textButton, editing, userData.userData.name, userData.userData.lastname, userData.userData.phone]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") { 
      setName(value);
    } else 
    if (name === "lastname") {
      setLastname(value);
    } else 
    if (name === "phone") {
      setPhone(value);
    } 
  };

  const updateUserProfile = async () => {
    if (editing && userId) {
      try {
        setEditing(false);
        const response = await axios
          .put(
            `https://nearby-back.vercel.app/api/user/${userId}`,
            {
              updateData: {
                name: name,
                lastname: lastname,
                phone: phone,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Respuesta del backend:", response.data);

            navigate.push("/user");
          });
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
      }
    }
    console.log("aka");
    setTextButton("Editar");
    setShowIconEdit("hidden");
    setShowInformation("block");
    navigate.replace("/user");
  };

  const firstLetter = userData.userData.name.charAt(0).toUpperCase();

  return (
    <div className="w-full my-5">
      <form onSubmit={updateUserProfile}>
        <div className="md:pt-2">
          <div className="md:flex justify-evenly">
            <div className="w-screen md:w-1/2 flex md:items-start md:ml-[5%] gap-6 px-8">
              <div className="">
                {" "}
                {/* relative */}
                <div className="rounded-full bg-[#FD7B03] text-white w-[71px] h-[71px] flex text-center items-center justify-center text-4xl semibold">
                  {firstLetter}
                </div>
              </div>

              <div className="text-left w-full">
                <div className="flex items-center justify-between">
                  <div className="md:w-full">
                    <p
                      className={`${showInformation} font-bold`}
                    >{`${userData.userData.name} ${userData.userData.lastname}`}</p>
                    <input
                      type="text"
                      name="name"
                      className={`${showIconEdit} w-[190px] md:w-full h-8 border-[#FD7B03] font-bold text-base]`}
                      placeholder={userData.userData.name}
                      value={name} // Usa el valor para mostrar el estado actual
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className={`${showIconEdit} text-[#FD7B03]`}>
                    <AiOutlineEdit />
                  </span>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="w-full">
                    <div
                      className={`${showIconEdit} w-full bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="md:w-full">
                    <input
                      type="text"
                      name="lastname"
                      className={`${showIconEdit} w-[190px] md:w-full h-8 border-[#FD7B03] font-bold text-base`}
                      placeholder={userData.userData.lastname}
                      value={lastname} // Usa el valor para mostrar el estado actual
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className={`${showIconEdit} text-[#FD7B03]`}>
                    <AiOutlineEdit />
                  </span>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="w-full">
                    <div
                      className={`${showIconEdit} w-full bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="">
                    <p className={`${showInformation} text-xs`}>
                      {userData.userData.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-screen  md:w-1/2 text-left md:flex md:justify-end md:items-start md:mr-[5%] items-center mt-4      md:mt-0 px-8">
              <div className="md:mr-[5%]">
                <div className="flex items-center gap-2">
                  <span className="text-[#FD7B03] text-xl">
                    <BsTelephone />
                  </span>
                  <div className="w-full flex items-center justify-between">
                    <p className={`${showInformation} text-xs`}>
                      {userData.userData.phone}
                    </p>
                    <input
                      type="text"
                      name="phone"
                      className={`${showIconEdit} w-[260px] h-8 border-[#FD7B03] font-bold text-base`}
                      placeholder={userData.userData.phone}
                      value={phone}// Usa el valor para mostrar el estado actual
                      onChange={handleInputChange}
                    />
                    <span className={`${showIconEdit} text-[#FD7B03] `}>
                      <AiOutlineEdit />
                    </span>
                  </div>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="">
                    <div
                      className={`${showIconEdit} ml-[28px] bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-[#FD7B03] text-xl">
                    <RiLockPasswordLine />
                  </span>
                  <div className="w-full flex items-center justify-between">
                    <p className={`${showInformation} text-xs`}>12345678</p>

                    {/* <input
                        type="text"
                        name="password"
                        className={`${showIconEdit} w-[260px] h-8 border-[#FD7B03] font-bold text-base`}
                        placeholder="12345678"
                        value={password} // Usa el valor para mostrar el estado actual
                        onChange={handleInputChange} 
                      /> */}
                    <span className={`${showIconEdit} text-[#FD7B03]`}>
                      <AiOutlineEdit />
                    </span>
                  </div>
                </div>

                <div className={`${showErrorMessage}`}>
                  <div className="">
                    <div
                      className={`${showIconEdit} ml-[28px] bg-[#FFCF91] h-[1px] mt-1`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen px-8 mb-5">
            <div className="w-full flex justify-center">
              <button
                className="w-full md:w-[380px] h-[40px] bg-[#FD7B03]  text-white font-medium mt-5 rounded-md text-sm"
                onClick={handleButtonOnClick}
                type={editing ? "submit" : "button"}
                /* type={"button"} */
              >
                {textButton}
              </button>
            </div>
          </div>

          <div className={`${showIconEdit} w-screen px-8 mb-5 flex`}>
            <div className="w-full flex justify-center">
              <button
                onClick={handleButtonCancelOnClick}
                type="button"
                className="w-full md:w-[380px] h-[40px] border-[1px] border-[#FD7B03] bg-[#FFF4E0] text-[#FD7B03] font-medium rounded-md text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
          <div className="w-screen px-8 mb-5">
            <div className="w-full h-[50px] bg-[#FFF4E0] rounded-lg flex items-center justify-evenly md:justify-start md-gap2">
              <span className="text-[#FD7B03] text-xl md:pl-[2%] md:pr-2">
                <BiCake />
              </span>
              <p className="text-xs">Te uniste el 03 de octubre, 2023</p>
            </div>
          </div>
          <div className="w-screen mb-5 px-8">
            <div className="w-full bg-[#FFCF91] h-[1px]"></div>
          </div>
          <div className="w-screen px-8">
            <div className="h-[20px] flex justify-between items-center mb-5">
              <p className="text-xs">Tus favoritos (4)</p>
              <Image
                src={VectorMayor}
                alt="Imagen Vector mayor"
                className="w-[8px] h-[15px]"
                width={8}
                height={15}
              />
            </div>
          </div>
          <SelectUserProfile />
        </div>
      </form>
    </div>
  );
};

export default UserProfile;