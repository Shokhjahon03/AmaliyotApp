import React from 'react'
import bar from '../assets/bar.svg'
import icon from '../assets/watch.svg'
const Saidbar = () => {
  return (

        <div className='saidbar w-[280px] h-dvh fixed top-0 left-0 bg-white z-50'>
        <div className='taskbar w-full pl-[12px] h-[56px] flex justify-between items-center'>
            <h1 className=' text-[24px] font-bold leading-[36px]'>TASK PROJECT</h1>
            <button className=' w-[32px] h-[32px] rounded-[6px] bg-[#6E8BB71F]'><img src={bar} alt="alt" /></button>
        </div>
        <div className='p-[12px]'>
            <div className=' w-[256px] h-[40px] flex gap-[12px] items-center'>
                <img className='w-[19px] h-[21px]' src={icon} alt="alt" />
                <p className=' text-[#6E8BB7] text-[14px] font-medium leading-[24px]'>Все заказы</p>
            </div>
        </div>
    </div>
   
  )
}

export default Saidbar
