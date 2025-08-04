'use client'
import CountUp from '@/components/CountUp'


export default function DashboardCard({title, sign, Icon, amount}) {
  return (
    <div className='bg-[#ffffff] rounded-lg flex  flex-col gap-5 shadow-glow-mild p-5 max-xsm:items-center '>
        <Icon className='text-6xl text-[#ffb2470e] animate-pulse rounded-full bg-[#ffb2470c] p-3'/>
        <CountUp endValue={Number(amount)} sign={sign} isAdmin={true}/>
         <div className='text-center'>{title}</div>
    </div>
  )
} 