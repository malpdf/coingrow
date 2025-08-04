'use client'
import Dashboard from '@/adminwidgets/Dashboard';
import Investments from '@/adminwidgets/Investments';
import Sidebar from '@/adminwidgets/Sidebar';
import Users from '@/adminwidgets/Users';
import Withdrawals from '@/adminwidgets/Withdrawals';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';



export default function page() {
  const psscd = 'cngrw';
  const search = useSearchParams();
  const router = useRouter();
  const searchQuery = search.get('q');
const [isdash, setIsdash] = useState(true);
const [isusers, setIsusers] = useState(false);
const [isinvest, setIsinvest] = useState(false);
const [iswith, setIswith] = useState(false);
const [loading, setLoading] = useState(false);

const handleClick = (title) => {
  if(title==='dashboard'){
     setIsdash(true);
     setIsusers(false);
     setIsinvest(false);
     setIswith(false);

  }else if(title==='users'){
    setIsdash(false);
    setIsusers(true);
    setIsinvest(false);
    setIswith(false);
  }else if(title==='investments'){
    setIsdash(false);
    setIsusers(false);
    setIsinvest(true);
    setIswith(false);
  }else if(title==='withdrawals'){
    setIsdash(false);
    setIsusers(false);
    setIsinvest(false);
    setIswith(true);
  }else if(title==='settings'){
    setIsdash(false);
    setIsusers(false);
    setIsinvest(false);
    setIswith(false);
  }else{
    setIsdash(true);
    setIsusers(false);
    setIsinvest(false);
    setIswith(false);
  }
};

  if(psscd!==searchQuery){
  router.push("/login");
};

  return (
    <div className='flex w-full'>
       <Sidebar handleClick={handleClick}/>
       {isdash && <Dashboard/>}
       {isusers && <Users/>}
       {isinvest && <Investments setLoading={setLoading}/>}
       {iswith && <Withdrawals setLoading={setLoading}/>}
       {loading && <div className='w-screen h-screen fixed z-[1111] flex justify-center items-center bg-[#000000ea]'>
        <img src="/loader.svg" alt="loading.."/></div>}
    </div>
  )
}
