import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import Description from './common/Description'
import { Line } from '../utils/icon'

const BestSellers = () => {
  return (
    <div className='bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-cover bg-center bg-no-repeat py-[100px] px-5 flex justify-center items-center'>
      <Container className={'flex justify-center items-center gap-[125px]'}>
        <div className="">
          <div className=" flex justify-center items-center gap-1.5">
            <div className="">
              <Line />
            </div>
            <h4 className='text-prime-gradient'></h4>
            <div className=" rotate-[180deg]">
              <Line />
            </div>
          </div>
          <Heading></Heading>
          <Description></Description>
        </div>
      </Container>
    </div>
  )
}

export default BestSellers
