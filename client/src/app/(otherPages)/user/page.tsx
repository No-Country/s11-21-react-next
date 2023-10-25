"use client"
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

export default UserProfile;


/* import UserProfile from "@/components/UserProfile/UserProfile";


const UserPage = () => {
  return (
    <>
        <UserProfile />
    </>
  )
}

export default UserPage; */