import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import { add } from './Slice/cartSlice';
import { remove } from './Slice/cartSlice';

const Card = ({ post }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    function removefromCart(){
         dispatch(remove(post.id));
        toast.error("remove from cart") 
       
      


    }
    function addtoCart(){
         dispatch(add(post));
         toast.success("added to cart");
      

    }
    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>
            <div>
                <p className='text-black text-lg font-semibold truncate  w-10 mt-1 '>{post.title}</p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div className='h-[100px]'>
                <img src={post.image} className='h-full w-full'/>
            </div>
            <div className='flex justify-between gap-12'>
            <div>
                <p className='text-green-600 font-semibold '>${post.price}</p>

            </div>
            <div>
                {
                    cart.some((p) => p.id === post.id) ? (<button className='text-gray-700 border-2 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-800 hover:text-white transition duration-300 ease-in'
                    onClick = {removefromCart}>
                        Remove Item
                    </button>

                    ) : (
                        <button className='text-gray-700 border-2 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-800 hover:text-white transition duration-300 ease-in'
                        onClick={addtoCart}>
                            Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
        </div>
    )
}

export default Card