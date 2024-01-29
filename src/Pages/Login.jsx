import React, { Fragment, useState } from 'react'
import dashbord from '../assets/Дашборд 1.png'
import iesimg from '../assets/ies.svg'
const Login = ({setTorf,torf}) => {
// ma'lumotlar...
let[uservalue,setUserValue]=useState({login:'',parol:''})
let[b,setB]=useState(false)
let[ies,setIes]=useState(false)

let loginregs=()=>{
  if (uservalue.login!=='' && uservalue.parol!=='') {
    setTorf(true)
  }else{
    setB(true)
  }
}
let password=()=>{
  if (ies!==true) {
    setIes(true)
  }else if(ies!==false){
    setIes(false)
  }
}


// refreshni oldini olish uchun...
    let submitted=(event)=>{
        event.preventDefault()
    }
  return (
    <Fragment>
      <div className=' w-full h-dvh flex'>
        <img className=' w-[738px]' src={dashbord} alt="alt" />
        <div className=' w-[702px] h-full flex flex-col pt-[80px] items-center gap-[48px]'>
            <h2 className=' text-[48px] font-bold leading-[48px] text-[#303940]'>Вход в систему</h2>
            <form onSubmit={submitted} className=' w-[408px] h-[468px]'>
                 <div className=' mb-[168px] pt-[20px]'>
                    <div className=' w-full flex flex-col h-[84px] justify-between items-start mb-[20px]'>
                          <label htmlFor="">Логин</label>
                            <input onChange={(e)=>setUserValue({login:e.target.value,parol:uservalue.parol})} value={uservalue.login} className=' w-full h-[48px] pt-[12px] pl-[12px] pb-[12px] rounded-[6px] border-solid border-2 border-sky-500' type="text" placeholder='Введите логин'/>
                     </div>
                      <div className=' w-full flex flex-col h-[84px] justify-between items-start relative'>
                               <label htmlFor="">Пароль</label>
                             <input onChange={(e)=>setUserValue({login:uservalue.login,parol:e.target.value})} value={uservalue.parol} className=' w-full h-[48px] pt-[12px] pl-[12px] pb-[12px] rounded-[6px] border-solid border-2 border-sky-500' type={ies?"text" :"password"} placeholder='Введите пароль'/>
                             {
                              ies?<button onClick={()=>password()} className='absolute top-[45px] left-[350px]'>  <i className='bx bx-low-vision text-[#5B6871] text-[25px] '></i></button>
                              : <button onClick={()=>password()} className='absolute top-[50px] left-[350px]'><img src={iesimg} alt="alt" /></button>
                             }
                           
                    </div>
                    
                    <p className={b?'block text-red-600 pt-5':'hidden'}>Malumotlar toliq emas</p>
                </div>
                <button onClick={()=>loginregs()} className=' w-full h-[56px] bg-[#36AD49] text-white rounded-[8px] hover:text-slate-800'>
                Войти
                </button>
                
            </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
