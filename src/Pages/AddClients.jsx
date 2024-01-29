import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddClients = ({}) => {
  // qiymatlar...
  let navigat=useNavigate()
  let[values,setValues]=useState({id:'',name:'',tel:'',zakaz: '',kategory: '',date:''})
  let[validet,setValidet]=useState(false)




  // funksyalar...
let add=()=>{
 if (values.id!=='' && values.name!=='' && values.tel!=='' && values.zakaz && values.date!=='' && values.kategory!=='') {
  
    axios.post('http://localhost:3000/klients',values)
  navigat('/')
  setValidet(false)
 
 }else{
  setValidet(true)
 }
}

  let submitted=(event)=>{
    event.preventDefault()
}
  return (
    <Fragment>
      <div className="container">
      <div className=' w-full h-[64px] flex pl-[16px] pt-[20px] items-center justify-between'>
          <p className=' text-[#1A2024] font-medium text-[40px] leading-[24px]'>Все водители</p>
          <button onClick={()=>navigat('/')}><i className='bx bx-x text-[40px] text-[#6E8BB7]'></i></button>
        </div>
        <form onSubmit={submitted} className=' w-full p-[16px] mt-[16px] flex flex-col gap-[16px]'>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id1">ID водителя <span className={values.id? 'text-[20px] text-green-400':'inline-block text-red-500 text-[20px]'}>*</span></label>
            <input onChange={(e)=>setValues(
              {
                id:e.target.value,
                name:values.name,
                tel:values.tel,
                zakaz:values.zakaz,
                kategory:values.kategory,
                date:values.date
            })} value={values.id} className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="number" name="" id="id1" placeholder='Введите города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id2">ФИО водителя  <span className={values.name? 'text-[20px] text-green-400':'inline-block text-red-500 text-[20px]'}>*</span></label>
            <input onChange={(e)=>setValues(
              {
                id:values.id,
                name:e.target.value,
                tel:values.tel,
                zakaz:values.zakaz,
                kategory:values.kategory,
                date:values.date
            })} value={values.name}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="text" name="" id="id2" placeholder='Введите сумма внутри города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id3">Сумма вне города  <span className={values.date? 'text-[20px] text-green-400':'inline-block text-red-500 text-[20px]'}>*</span></label>
            <input onChange={(e)=>setValues(
              {
                id:values.id,
                name:values.name,
                tel:values.tel,
                zakaz:values.zakaz,
                kategory:values.kategory,
                date:e.target.value
            })} value={values.date}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="date" name="" id="id3" placeholder='Введите сумма вне города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id4">Сумма вне города <span className={values.zakaz? 'text-[20px] text-green-400':'inline-block text-red-500 text-[20px]'}>*</span></label>
            <input onChange={(e)=>setValues(
              {
                id:values.id,
                name:values.name,
                tel:values.tel,
                zakaz:e.target.value,
                kategory:values.kategory,
                date:values.date
            })} value={values.zakaz}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="text" name="" id="id4" placeholder='Введите сумма вне города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id5">Сумма вне города <span className={values.kategory? 'text-[20px] text-green-400':'inline-block text-red-500 text-[20px]'}>*</span></label>
            <input onChange={(e)=>setValues(
              {
                id:values.id,
                name:values.name,
                tel:values.tel,
                zakaz:values.zakaz,
                kategory:e.target.value,
                date:values.date
            })} value={values.kategory}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="text" name="" id="id5" placeholder='Введите сумма вне города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id6">Номер телефона <span className={values.tel? 'text-[20px] text-green-400':'inline-block text-red-500 text-[20px]'}>*</span></label>
            <input onChange={(e)=>setValues(
              {
                id:values.id,
                name:values.name,
                tel:e.target.value,
                zakaz:values.zakaz,
                kategory:values.kategory,
                date:values.date
            })} value={values.tel} className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="number" name="" id="id6" placeholder='Phone number....'/>
          </div>
          <div className=' w-full  pr-[16px] pt-[8px] flex justify-end'>
              <div className=' w-[509px] flex justify-between h-[40px]'>
                <button onClick={()=>navigat('/')} className=' w-[242.5px] h-full rounded-[6px] text-white bg-[#36AD49] hover:text-[#36AD49] hover:bg-white hover:border-solid hover:border-2 hover:border-[#E5E9EB] ease-in'>Отменить</button>
                <button onClick={()=>add()} className=' w-[242.5px] h-full rounded-[6px] text-white bg-[#36AD49] hover:text-[#36AD49] hover:bg-white hover:border-solid hover:border-2 hover:border-[#E5E9EB] ease-in'>Сохранить</button>
              </div>
          </div>
        </form>
        <p className={validet?' text-red-500':'hidden'}>Ma'lumotlar to'liq kiritilayotganligiga e'tibor bering</p>
       
      </div>

    </Fragment>
  )
}

export default AddClients
