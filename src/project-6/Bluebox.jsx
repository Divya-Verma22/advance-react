
import Spinner from './Spinner';
import { useState } from 'react';
import UseGif from './UseGif';



const Bluebox = () => {
  
   
    const [ tag , setTag] = useState("")
    const {fetchData , loading , gif } = UseGif(tag);
    

    return (
        <div className='w-1/2   bg-blue-500 border-black rounded-lg flex flex-col items-center gap-y-5  '>
            <h2 className= 'mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} GIF</h2>
            {
                loading ? (<Spinner/>) : ( <img src={gif} width="450" alt='nothing found' />)
            }
             <input type="text" value = {tag}
            onChange = {(event)=> setTag(event.target.value)}
            placeholder='enter GIF you want'
            className = "w-10/12 text-lg py-2 rounded-lg text-center mb-[3px] border bg-white"/>
           
            <button onClick={()=> fetchData(tag)}
                className='w-10/12  bg-green-300 text-lg p-2 hover:bg-green-400 mb-[20px]'
            >Generate</button>
        </div>
    )
}

export default Bluebox;