import React, { useState } from 'react'
import Container from '../components/common/Container'
import Heading from '../components/common/Heading'
import Button from '../components/common/Button'
import { NAVLINKS } from '../utils/helper'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => (
    setIsOpen(!isOpen)
  )
  return (
    <div className='px-5 pt-6 pb-5.5 overflow-clip'>
      <Container className={'flex justify-between items-center !overflow-x-clip'}>
        <Heading className={'text-prime-gradient font-nunitosans font-medium text-[34px]'}>
          Pizza Nest
        </Heading>
        <ul className={`flex justify-center items-center gap-6 max-[900px]:min-h-screen max-[900px]:w-full max-[900px]:absolute top-0 duration-300 max-[900px]:flex-col z-50 bg-white ${isOpen ? 'right-0' : '-right-full'}`}>
          {NAVLINKS.map((link, index) => {
            const path =
              link.toLowerCase() === "home"
                ? "/"
                : "/" + link.toLowerCase().replace(/\s+/g, "-");

            return (
              <li key={index} className="relative group">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative font-nunito text-base group-hover:!text-prime-gradient
            ${isActive ? "text-prime-gradient after:w-full" : "text-muted-gray"}
            after:content-[''] after:absolute after:left-0 after:bottom-[4px] after:h-[.5px] after:rounded-full
            after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] max-w-max
            after:w-0 after:transition-all after:duration-300 group-hover:after:w-full `
                  }
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
          <li className='flex sm:hidden'><Button className={'hover:!bg-none hover:!border-light-gray hover:!text-light-gray'}>Contact Us</Button></li>
        </ul>
        <div className="flex justify-center items-center gap-5">
          <div className="sm:flex hidden"><Button className={'hover:!bg-none hover:!border-light-gray hover:!text-light-gray'}>Contact Us</Button></div>
          <div
            onClick={toggleNavBar}
            className="lg:hidden flex flex-col gap-[5px] z-50 cursor-pointer"
          >
            <span
              className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${isOpen ? "rotate-[45deg] origin-left" : ""
                }`}
            ></span>
            <span
              className={`w-[30px] h-[5px] rounded transition-all ${isOpen
                ? "bg-transparent"
                : "bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)]"
                }`}
            ></span>
            <span
              className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${isOpen ? "-rotate-[42deg] origin-left" : ""
                }`}
            ></span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
