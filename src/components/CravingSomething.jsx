import React from 'react'
import Heading from './common/Heading';
import Description from './common/Description';
import CustomButton from './common/CustomButton';

const CravingSomething = () => {
  return (
    <>
      <div className="bg-[url(src/assets/images/png/CravingSomething-bg-img.png)] bg-cover bg-center bg-no-repeat px-5 relative">
        <div className="bg-black opacity-88 inset-0 absolute top-0 left-0"></div>
        <div className="py-10 sm:py-15 md:py-20 relative z-1">
          <Heading headingClass="mx-auto max-sm:!text-[26px] !text-[#FEFEFE] text-center max-w-[722px]" headingText="Craving something cheesy, spicy, or just straight-up delicious?" />
          <Description descriptionClass="text-[#E8E8E8] max-w-[465px] text-center mx-auto pt-4" descriptionText="Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time." />
          <div className="flex gap-4 sm:gap-6 mt-5.5 sm:mt-8 flex-wrap justify-center">
            <CustomButton btnClass="px-[29px] sm:px-[33px] py-3.5" btnText="Order Now" />
            <CustomButton btnClass="border border-[#FEFEFE] !bg-transparent px-4.5 sm:px-8 py-3.5" btnText="View Full Menu" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CravingSomething