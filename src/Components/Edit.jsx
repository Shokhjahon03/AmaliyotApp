import React, { Fragment } from 'react'

const Edit = ({daletclient,datas}) => {
  return (
    <Fragment>
      {/* <div key={index} className={ids?' absolute top-0 left-0 w-[20px] h-[20px] bg-black':'hidden'}>

      </div> */}
      {
         datas.map((data,index)=>(
          <tr onClick={()=>edit(data.id)} className={index%2===0 ?"bg-[#E5E9EB] relative":'bg-white relative'} key={index}>
    <td className=' pl-[20px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{index+1}</td>
    <td className='pl-[20px] pt-[12px] pr-[12px] pb-[12px] font-medium text-[14px] leading-[24px]'>{data.id}</td>
    <td className='pl-[60px] pt-[12px] pr-[60px] pb-[12px] font-medium text-[14px] leading-[24px]'>{data.name}</td>
    <td className='pl-[25px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{data.tel}</td>
    <td className='pl-[25px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{data.zakaz}</td>
    <td className='pl-[25px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>{data.kategory}</td>
    <td className='pl-[20px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>Дата создание</td>
    <td className='pl-[16px] pt-[12px] pr-[15px] pb-[12px] font-medium text-[14px] leading-[24px]'><button onClick={()=>daletclient(data.id)}><img src={dalet} alt="alt" /></button></td>
          <Edit index={index} datas={datas} ids={ids}/>
          </tr>
      ))
      }
    </Fragment>
  )
}

export default Edit
