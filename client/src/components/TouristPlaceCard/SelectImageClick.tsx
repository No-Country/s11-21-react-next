/* "use client"
import React, { useState } from 'react';
import TouristPlaceCard from './TouristPlaceCard';
 

const SelectImageClick =  () => {
 
    const [bgColor1, setBgColor1] = useState('bg-[#FD7B03]');
    const [bgColor2, setBgColor2] = useState('bg-white');
    const [bgColor3, setBgColor3] = useState('bg-white');

    const [showImage, setShowImage] = useState<number>(1);

    const handleSelectImage1 = () => {
      setBgColor1('bg-[#FD7B03]');
      setBgColor2('bg-white');
      setBgColor3('bg-white');
     
      setShowImage(1);
    };
    

    const handleSelectImage2 = () => {
      setBgColor2('bg-[#FD7B03]');
      setBgColor1('bg-white');
      setBgColor3('bg-white');
      
      setShowImage(2);
    };
      

    const handleSelectImage3 = () => {
      setBgColor3('bg-[#FD7B03]');
      setBgColor1('bg-white');
      setBgColor2('bg-white');
    
      setShowImage(3);
    };
    
  
    return (
        <>
            <div
                onClick={handleSelectImage1}
                className={`w-[8px] h-[8px] rounded-full ${bgColor1}`}
            ></div>
            
            <div
                onClick={handleSelectImage2}
                className={`w-[8px] h-[8px] rounded-full ${bgColor2}`}
            ></div>

            <div
                onClick={handleSelectImage3}
                className={`w-[8px] h-[8px] rounded-full ${bgColor3}`}
            ></div>

            <TouristPlaceCard showImage={showImage} />

        </>
    );
  };
  
  export default SelectImageClick; */
  
  




  


  


  