'use client'
import { MdOutlineDashboard } from "react-icons/md";
import { LuUserSearch } from "react-icons/lu";
import { TbCreditCardPay } from "react-icons/tb";
import { PiHandWithdraw } from "react-icons/pi";


export default function Sidebar({handleClick}) {
    const navs = [
      {name:'dashboard'},
       {name:'users'}, 
       {name:'investments'},
        {name:'withdrawals'}, 
      ];

  return (
    <div className='flex sm:flex-col sm:sticky sm:top-0 sm:left-0 shadow-glow-mild max-sm:justify-around max-sm:items-center sm:pl-5 sm:py-5 sm:w-[200px] w-full sm:h-screen h-auto bg-[#ffffff] max-sm:fixed bottom-0 z-[11]'>
        <div className='flex items-center max-sm:hidden font-semibold mb-10 text-col'>Coingrow Admin</div>
        {navs.map((n) => (
            <div key={n.name} onClick={()=> handleClick(n.name)} className={`cursor-pointer flex max-sm:flex-col-reverse gap-2 items-center capitalize p-5 rounded-tl-[30px] rounded-bl-[30px]`}>
            <div className='max-sm:text-[10px] max-xsm:hidden'>{n.name}</div>
         {n.name==='dashboard' && <MdOutlineDashboard className='text-[24px]'/>}
         {n.name==='users' && <LuUserSearch className='text-[24px]'/>}
         {n.name==='investments' && <TbCreditCardPay className='text-[24px]'/>}
         {n.name==='withdrawals' && <PiHandWithdraw className='text-[24px]'/>}
          </div>
         ))}
    </div>
  )
}
