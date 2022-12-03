import React, { useContext } from 'react'
import bgCardFront from '../../assets/images/bg-card-front.png'
import bgCardBack from '../../assets/images/bg-card-back.png'
import bgHeroMobile from '../../assets/images/bg-main-mobile.png'
import bgHeroDesktop from '../../assets/images/bg-main-desktop.png'
import cardLogo from '../../assets/images/card-logo.svg'
import { AppContext } from '../../context/AppContext'

export const Header = () => {

  const { name, month, year, cardNumber, cvc } = useContext(AppContext)
  const nameUpperCase = name.toUpperCase()
    


  return (
    <nav className='relative h-52 md:w-56 md:h-full lg:w-[500px]'>

      <div className='absolute top-0 right-0 left-0 bottom-0 overflow-hidden'>
        <img src={bgHeroMobile} alt="" className='w-full md:hidden' />
        <img src={bgHeroDesktop} alt="" className='hidden w-full md:h-full md:block' />
      </div>

      <div className='absolute right-3 top-5 md:top-auto md:bottom-[30%] md:-right-20 lg:-right-28 shadow-xl  '>
        <div className='relative'>
          <img src={bgCardBack} alt="" className='w-60 lg:w-80' />
          {
            cvc === ''
              ? <p className='absolute text-sm right-7 top-[42%] text-white text-[11px] lg:right-9'>000</p>
              : <p className='absolute text-sm right-7 top-[42%] text-white text-[11px] lg:right-9'>{cvc}</p>
          }
          
        </div>
      </div>

      <div className='absolute -bottom-4  left-2  md:top-[15%] md:bottom-auto md:left-auto md:-right-10 '>
        <div className='relative text-sm text-white'>
          <img src={bgCardFront} alt="" className='w-60 mx-auto shadow-2xl lg:w-80' />
          <img src={cardLogo} alt="" className='absolute top-3 left-4 w-14 lg:w-20 ' />
          {
            cardNumber === ''
              ? <p className='absolute bottom-11 px-4 text-lg font-normal w-full lg:bottom-14'>0000 0000 0000 0000</p>
              : <p className='absolute bottom-11 px-4 text-lg font-normal w-full lg:bottom-14'>{cardNumber}</p>
          }
          <div className='absolute bottom-4 px-4 flex justify-between w-full text-[11px] lg:bottom-6'>
            {
              name === ''
                ? <p>JANE APPLESSED</p>
                : <p>{nameUpperCase}</p>
            }
            {
              month  === ''
                ? <p>00/00</p>
                : <p>{month}/{year}</p>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
