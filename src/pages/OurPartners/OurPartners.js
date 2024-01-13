import React from 'react';
import partnerImg1 from '../../assets/partnerImg1.jpeg';
import partnerImg2 from '../../assets/partnerImg2.jpeg';
import partnerImg3 from '../../assets/partnerImg3.jpeg';
import partnerImg4 from '../../assets/partnerImg4.jpeg';
import partnerImg5 from '../../assets/partnerImg5.jpeg';
import partnerImg6 from '../../assets/partnerImg6.jpeg';
import partnerImg7 from '../../assets/partnerImg7.jpeg';
import partnerImg8 from '../../assets/partnerImg8.jpeg';
import partnerImg9 from '../../assets/partnerImg9.jpeg';

const OurPartners = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 py-20">
      <div className='grid grid-cols-4 lg:grid-cols-9 gap-10'>
        <img className='w-full h-16' src={partnerImg1} alt="" />
        <img className='w-full h-16' src={partnerImg2} alt="" />
        <img className='w-full h-16' src={partnerImg3} alt="" />
        <img className='w-full h-16' src={partnerImg4} alt="" />
        <img className='w-full h-16' src={partnerImg5} alt="" />
        <img className='w-full h-16' src={partnerImg6} alt="" />
        <img className='w-full h-16' src={partnerImg7} alt="" />
        <img className='w-full h-16' src={partnerImg8} alt="" />
        <img className='w-full h-16' src={partnerImg9} alt="" />
      </div>
    </div>
  );
};

export default OurPartners;