import React, { Fragment, useState } from 'react'
import dalet from '../assets/dalet.svg'
import edit from '../assets/edit.svg'
import xx from '../assets/xx.svg'
import axios from 'axios'
import Edit from '../Pages/Edit'
const TabelValue = ({datas,i,setX,x}) => {
  // qiymatlar...
  let [torf,setTorf]=useState(false)
  let [torf2,setTorf2]=useState(false)
  let [editID,seteditId]=useState('')
// funksiyalar....

let daletitem =(id)=>{
  axios.delete(`http://localhost:3000/klients/${id}`)
  setX(x+11)
  setTorf(false)
}

  let funcmodal=()=>{
    if (torf!==true) {
      setTorf(true)
    }
    if (torf!==false) {
      setTorf(false)
    }
  }

  let getId=(id)=>{
    if (id) {
      seteditId(id)
      setTorf2(true)
      setTorf(false)
    }
  }
  return (
    <Fragment>
      {
        datas.map((e,index)=>(
          <tr  className={i%2==0?'bg-[#E5E9EB] relative':'bg-white relative'} key={index}>
          <td onClick={()=>funcmodal()} className=' cursor-pointer pl-[19px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{i+1}</td>
          <td onClick={()=>funcmodal()} className=' cursor-pointer pl-[25px] pt-[12px] pr-[12px] pb-[12px] font-medium text-[14px] leading-[24px]'>{e.name}</td>
          <td onClick={()=>funcmodal()} className=' cursor-pointer pl-[25px] pt-[12px] pr-[60px] pb-[12px] font-medium text-[14px] leading-[24px]'>{e.id}</td>
          <td onClick={()=>funcmodal()} className=' cursor-pointer pl-[25px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{e.tel}</td>
          <td onClick={()=>funcmodal()} className=' cursor-pointer pl-[19px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{e.zakaz}</td>
          <td onClick={()=>funcmodal()} className=' cursor-pointer pl-[25px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{e.kategory}</td>
          <td onClick={()=>funcmodal()} className=' cursor-pointer pl-[25px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{e.date}</td>
          <td className='pl-[16px] pt-[12px] pr-[15px] pb-[12px] font-medium text-[14px] leading-[24px]'><button  onClick={()=>daletitem(e.id)}><img src={dalet} alt="alt" /></button></td>
          <div className={torf?'bg-white w-[251px] h-[96px] absolute top-[31px] right-[13px] rounded-[6px] z-50':'hidden'}>
              <button onClick={()=>getId(e.id)} className=' flex w-full h-[48px] gap-[12px] items-center p-[8px]'>
                <img src={edit} alt="alt" />
                <p>Редактировать</p>
              </button>
              <button onClick={()=>daletitem(e.id)} className=' flex w-full h-[48px] gap-[12px] items-center p-[8px]'>
                <img src={xx} alt="alt" />
                <p>Удалить</p>
              </button>
          </div>
          </tr>
          
        ))
      }
        {
            torf2?<Edit setX={setX} editID={editID} setTorf2={setTorf2}  seteditId={seteditId} x={x}/>:null
        }
    </Fragment>
  )
}

export default TabelValue
