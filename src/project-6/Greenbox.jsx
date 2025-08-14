 
import Spinner from './Spinner';
import UseGif from './UseGif';



const Greenbox = () => {
    const { gif, fetchData, loading } = UseGif();



    return (
        <div className='w-1/2   bg-green-500 border-black rounded-lg flex flex-col items-center gap-y-5 '>
            <h2 className='mt-[15px] text-2xl underline uppercase font-bold'>Random GIF</h2>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt='nothing found' />)
            }
            <button onClick={() => fetchData()}
                className='w-10/12  bg-green-300 text-lg p-2 hover:bg-green-400 mb-[20px]'
            >Generate</button>
        </div>
    )
}

export default Greenbox