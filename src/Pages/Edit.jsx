import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = ({editID,setTorf2,setX,x}) => {

  let navigat=useNavigate()
  let [formvalu,setval]=useState({id:'',name:'',tel:'',zakaz: '',kategory: '',date:''})


    let axiosEditIdValues=async()=>{
        let res=await axios.get(`http://localhost:3000/klients/${editID}`)
         let dataid=await res.data
         setval(dataid)
       }
       let editsave=()=>{
        if (formvalu.id!==''&& formvalu.date!==''&&formvalu.zakaz!=='') {
          axios.put(`http://localhost:3000/klients/${editID}`,formvalu)
        setTorf2(false)
        setX(x+100)
        }
       }


       useEffect(()=>{
        axiosEditIdValues()
      },[])

      let submitted=(event)=>{
        event.preventDefault()
    }
  return (
    <div  className='fixed top-0 left-0 w-full h-dvh opacity-90 bg-white z-10 flex justify-center items-center'>
     

   <div className="container">
    <p className=' text-[60px]'># Edit Values</p>
   <form onSubmit={submitted} className=' w-full p-[16px] mt-[16px] flex flex-col gap-[16px]'>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id1">ID водител</label>
            <input onChange={(e)=>setval(
              {
                id:e.target.value,
                name:values.name,
                tel:formvalu.tel,
                zakaz:formvalu.zakaz,
                kategory:formvalu.kategory,
                date:formvalu.date
            })} value={formvalu.id} className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="number" name="" id="id1" placeholder='Введите города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id2">ФИО водителя  </label>
            <input onChange={(e)=>setval(
              {
                id:formvalu.id,
                name:e.target.value,
                tel:formvalu.tel,
                zakaz:formvalu.zakaz,
                kategory:formvalu.kategory,
                date:formvalu.date
            })} value={formvalu.name}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="text" name="" id="id2" placeholder='Введите сумма внутри города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id3">Сумма вне города</label>
            <input onChange={(e)=>setval(
              {
                id:formvalu.id,
                name:formvalu.name,
                tel:formvalu.tel,
                zakaz:formvalu.zakaz,
                kategory:formvalu.kategory,
                date:e.target.value
            })} value={formvalu.date}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="date" name="" id="id3" placeholder='Введите сумма вне города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id4">Сумма вне города </label>
            <input onChange={(e)=>setval(
              {
                id:formvalu.id,
                name:formvalu.name,
                tel:formvalu.tel,
                zakaz:e.target.value,
                kategory:formvalu.kategory,
                date:formvalu.date
            })} value={formvalu.zakaz}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="text" name="" id="id4" placeholder='Введите сумма вне города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id5">Сумма вне города  </label>
            <input onChange={(e)=>setval(
              {
                id:formvalu.id,
                name:formvalu.name,
                tel:formvalu.tel,
                zakaz:formvalu.zakaz,
                kategory:e.target.value,
                date:formvalu.date
            })} value={formvalu.kategory}  className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="text" name="" id="id5" placeholder='Введите сумма вне города'/>
          </div>
          <div className=' w-full h-[40px] flex pl-[16px] pr-[16px] items-center justify-between'>
            <label className=' text-[14px] leading-[24px] font-medium' htmlFor="id6">Номер телефона</label>
            <input onChange={(e)=>setval(
              {
                id:formvalu.id,
                name:formvalu.name,
                tel:e.target.value,
                zakaz:formvalu.zakaz,
                kategory:formvalu.kategory,
                date:formvalu.date
            })} value={formvalu.tel} className='border-solid border-2 border-[#E5E9EB] rounded-[6px] p-[8px] h-full w-[538px]' type="number" name="" id="id6" placeholder='Phone number....'/>
          </div>
          <div className=' w-full  pr-[16px] pt-[8px] flex justify-end'>
              <div className=' w-[509px] flex justify-between h-[40px]'>
                <button onClick={()=>setTorf2(false)} className=' w-[242.5px] h-full rounded-[6px] text-white bg-[#36AD49] hover:text-[#36AD49] hover:bg-white hover:border-solid hover:border-2 hover:border-[#E5E9EB] ease-in'>Отменить</button>
                <button onClick={()=>editsave()} className=' w-[242.5px] h-full rounded-[6px] text-white bg-[#36AD49] hover:text-[#36AD49] hover:bg-white hover:border-solid hover:border-2 hover:border-[#E5E9EB] ease-in'>Сохранить</button>
              </div>
          </div>
        </form>
   </div>
    </div>
  )
}

export default Edit
