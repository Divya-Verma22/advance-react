import { useContext } from 'react'
import { AppContext } from './ContextApp/AppContext'

const Page = () => {
  const { pages, Handlepagechange, totalPage } = useContext(AppContext);


  return (
    <div className='w-full flex justify-center items-center border fixed bottom-0 bg-white'>
      <div className=' flex justify-between w-11/12 max-w-[670px] py-2 '>
        <div className='flex gap-x-2'>
          {
            pages > 1 && (<button className='rounded border px-5 py-1' onClick={() => Handlepagechange(pages - 1)}>Previous</button>)
          }
          {
            pages < totalPage && (<button className='rounded border px-5 py-1' onClick={() => Handlepagechange(pages + 1)}>Next</button>)
          }
        </div>

        <p className=' font-serif '>Page {pages} of {totalPage}</p>

      </div>
      </div>
      )
}

      export default Page