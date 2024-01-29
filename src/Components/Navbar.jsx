import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
// qiymatlar...
let navgate=useNavigate()


  return (
    <div className='navbar w-full h-[56px] fixed top-0 left-0 bg-white flex justify-end items-center z-40'>
      <div className=' w-[1255px] h-[56px] p-4 flex justify-between items-center'>
        <p>Все водители</p>
        <button onClick={()=>navgate('/add')} className='w-[115px] text-[14px] font-medium h-[36px] bg-[#36AD49] rounded-[6px] text-white '>
          + Все водители
        </button>
      </div>
    </div>
  )
}

export default Navbar
