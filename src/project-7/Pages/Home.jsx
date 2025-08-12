import React from 'react'
import Header from '../Header'
import Blog from '../Blog';
import Page from '../page';

const Home = () => {
  return (
    <div className='h-[100vh] w-[100vw] text-sm'>
        <div>
            <Header/>
            <Blog/>
            <Page/>
        </div>
    </div>
  )
}

export default Home