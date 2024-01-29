import React, { Fragment, useEffect, useState } from 'react'
import Saidbar from '../Components/Saidbar'
import Navbar from '../Components/Navbar'
import vector from '../assets/Vector.svg'
import axios from 'axios'
import TabelValue from '../Pages/TabelValue'
import { useNavigate } from 'react-router-dom'
import FooterClients from '../Components/FooterClients'
const AllClients = ({seteditId,editID}) => {
// ma'lumotlar...
  let [datas,setDatas]=useState([])
  const [limit, setLimit] = useState(2);
  let [x,setX]=useState(0)
  let navigate=useNavigate()
  let pages = [];
  for (let i = 0; i < Math.ceil(datas.length / limit); i++) {
    pages.push(i + 1);
  }

// funksiyalar...
let paginatePosts = (page) => {
  let firstIndex = limit * (page - 1);
  let lastIndex = limit * page;
  const currentPosts = datas.slice(firstIndex, lastIndex);
  setDatas(currentPosts);
};

  let page=()=>{
    setDatas(datas.slice())
  }


  let axiosdata=async()=>{
    let res=await axios.get('http://localhost:3000/klients')
    let axiosres=await res.data
    setDatas(axiosres)
  }
  let Alldatas=()=>{
    axiosdata()
  }

// edit client f()...

  let editet=(id)=>{
    
    if(id){
      seteditId(id)
      navigate('/add')
    }
    
  }

  useEffect(()=>{
    axiosdata()
  },[x])

  return (
  <Fragment>
      <div className='z-10 w-full h-dvh fixed top-0 left-0 bg-[#EAF2F1] pt-[16px]'>
        <Navbar/>
        <Saidbar/>
    </div>
    <div className='top-[72px] left-[296px] absolute w-[1228px] p-4 z-10  bg-white rounded-[6px]'>
      <table className='w-full'>
        <tr>
          <th className='pl-[16px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>№</th>
          <th className='pl-[16px] pt-[12px] pr-[12px] pb-[12px] font-medium text-[14px] leading-[24px]'>ID водителя</th>
          <th className='pl-[16px] pt-[12px] pr-[60px] pb-[12px] font-medium text-[14px] leading-[24px]'>ФИО водителя</th>
          <th className='pl-[16px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>Номер телефона</th>
          <th className='pl-[16px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>Все заказы</th>
          <th className='pl-[16px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>Тип пользователя</th>
          <th className='pl-[16px] pt-[12px] pr-[40px] pb-[12px] font-medium text-[14px] leading-[24px]'>Дата создание</th>
          <th className='pl-[20px] pt-[12px] pr-[15px] pb-[12px] font-medium text-[14px] leading-[24px]'><img src={vector} alt="alt" /></th>
        </tr>
          {
            datas.map((e,i)=>(
              <TabelValue editet={editet} editID={editID} setX={setX} x={x} key={i} i={i} datas={[e]}/>
            ))
          }
      </table>
    </div>
    <FooterClients pages={pages} paginatePosts={paginatePosts} page={page} setDatas={setDatas} Alldatas={Alldatas} axiosdata={axiosdata}/>
  </Fragment>
  )
}

export default AllClients
