import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Newslist from '@/Components/Home/Newslist';
import Paginator from '@/Components/Home/Paginator';
import Footer from '@/Components/Footer';

export default function HomePage(props) {
  return (
    <div className='min-h-screen bg-slate-50'>
        <Head title={props.title}/>
        <Navbar user={props.auth.user} />
        <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
          <Newslist news={props.news.data} />
        </div>
        <div className='flex justify-center items-center mb-3'>
          <Paginator meta={props.news.meta}/>
        </div>
        <div className='flex justify-center items-center'>
          <Footer />
        </div>
    </div>
  )
}