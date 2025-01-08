import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex  flex-col justify-center items-center w-full fixed bottom-0'>
            <div className="logo font-bold text-3xl tracking-widest">
                <span className="">Pass</span>
                <span className="text-blue-500">HUB</span>
            </div>
            <div className='flex justify-center items-center'>Created with <img className='w-7 mx-2' src="/icons/heart.png" alt="" /> by rohit-err</div>
        </div>
    )
}

export default Footer