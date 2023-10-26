import React from 'react';
import MockupMapImage from "../../../public/random-map.png";
import Image from 'next/image';

const AddressModal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center h-screen">
                <div className="w-290px bg-secondary rounded-lg">
                    <div className="p-5 flex flex-col items-center mb-6">
                        <div className="flex flex-col w-64 mb-4">
                            <label htmlFor="siteAddress" className="text-primary mb-2 block">Dirección del sitio</label>
                            <input type="text" id="siteAddress" placeholder='Ingresa una dirección' className="w-64 p-2 border border-FD7B03 rounded-lg mb-4" />
                            <div className="flex justify-center items-center h-full w-full">
                                <Image
                                    src={MockupMapImage}
                                    alt="Mockup Map"
                                    width={240}
                                    height={518}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <button className="mt-4 bg-primary p-2 text-white rounded-md" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressModal;

