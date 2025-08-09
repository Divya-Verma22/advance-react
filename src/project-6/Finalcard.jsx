import React from 'react'
import Bluebox from './Bluebox'
import Greenbox from './Greenbox'

const Finalcard = () => {
    return (
        <div className='w-[100vw] h-screen flex flex-col bg-pink-500 relative overflow-x-hidden items-center'>
            <h1 className='bg-white rounded-lg w-11/12  mt-[48px] px-[500px] py-2 text-4xl font-bold items-center'>Random GIFs</h1>
            <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
                <Greenbox />
                <Bluebox />
            </div>

        </div>
    )
}

export default Finalcard