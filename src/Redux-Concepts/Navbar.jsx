import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { cart } = useSelector((state) => state);
    return (
        <nav>
            <div className=' flex justify-between  items-center h-20 max-w-6xl mx-auto'>
                <NavLink to="/" className="invert ml-5 flex flex-row items-center gap-x-3 font-semibold underline" >
                    <img src="https://www.pngfind.com/pngs/m/170-1701498_code-png-code-logo-png-transparent-png.png" alt="" width="70" height="70" />
                    <NavLink to="/">  <p className='text-black'>Eco<span className='text-amber-900'>No</span>My</p>  </NavLink>
                </NavLink>
                <div className='flex flex-row text-white space-x-6 items-center'>
                    <NavLink to="/"> <p>Home</p>  </NavLink>
                    <NavLink to="/cart">
                        <div className='relative' >
                            <div>
                                <FaCartPlus className='h-10 w-10' />
                                {
                                    cart.length > 0 && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                                }
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;