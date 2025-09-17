import Back from '@/components/UiComponents/Back'
import React from 'react'

const page = () => {
  return (
<>

<div className='min-h-screen py-4 px-2 space-y-3'>
    <div className='flex items-center justify-between'>
        <Back/> <span className='text-lg  font-semibold px-2 text-gray-900' >Bithday List</span>
    </div>

    <div className=''>
    
<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">

<h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">Mohit Sharma</h5>
<div className='flex items-center gap-2 '>
    <span>Date </span> <p className="font-normal text-gray-700 dark:text-gray-400">
5 August 2002
</p>
</div>

</a>

    </div>

</div>


</>
  )
}

export default page
