import React from 'react'

function profilepop() {
  return (
    <main className='w-[630px] h-[954.69px] mx-auto rounded-[10px] border-2 shadow-inner flex flex-col'>
        <div className='w-[38.77px] h-[38.77px] mt-[20px] flex ml-[550px]'><img src="closebut.svg/" alt="" /></div>
        <div className='absolute left-1/2 top-12 transform -translate-x-1/2 z-10'><img src="emeka2.svg/" alt="" /></div>
        <div className='relative overflow-hidden flex flex-col border-2 w-[463.62px] h-[636.46px] border-[#4B0082] mx-auto rounded-t-lg mt-[100px] z-0'>
            <div className='font-bold text-[28.59px] mt-[80px] mx-auto w-[103px] h-[35px] text-[1E1E1E]'>Raphael</div>
            <div className='w-[210.85px] h-[35px] text-[#1E1E1E] ml-[180px] mt-[10px] text-[20px]'>SS1 Student</div>
            <div className='mx-auto'><button className='w-[155px] h-[85.55px] bg-[#4B0082] rounded-[14px] mt-[25px] ml-[10px]'><p className='w-[86px] h-[37px] font-bold text-[#ffff] mx-auto text-[24.27px]'>Accept</p></button></div>
            <div className='w-[402.23px] h-[178.92px] flex flex-col gap-[10px] mt-[85px] ml-[30px]'>
                <div className='font-semibold text-[25.85px] w-[104px] h-[31px] text-[#1E1E1E]'>Request</div>
                <div className='w-[395.77px] h-[135px] font-regular text-[18px] text-[#1E1E1E] text-justify'>I am an SS1 Student in science class because my parents want me to become a medical doctor but I love art work. Please I need your advice on what I should do.</div>
            </div>
        </div>
    
    </main>
  )
}

export default profilepop;