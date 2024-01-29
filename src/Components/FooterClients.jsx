import React from 'react'

const FooterClients = ({page,setDatas,Alldatas,axiosdata,paginatePosts,pages}) => {
  return (
    <div className=' z-50 fixed top-[640px] left-0 w-full h-[56px] pt-[12px] pr-[16px] flex items-center justify-end bg-white'>
        <div className=' flex h-[32px] gap-4'>
            <button className='btn btn-success bg-[#36AD49]' onClick={()=>Alldatas( )}>
                All
            </button>
            {pages.map((p) => (
          <button className='btn btn-success bg-[#36AD49]' onClick={() => paginatePosts(p)}>{p}</button>
        ))}
        </div>
    </div>
  )
}

export default FooterClients
