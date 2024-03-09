import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalRecipeContext } from '../Content/index'

const Navbar = () => {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalRecipeContext)
    console.log(searchParam);
    return (
        <div className='flex justify-between items-center py-8 container flex-col lg:flex-row gap-5 lg:gap-0'>
            <h2 className='text-2xl font-semibold'>
                <li>
                    <NavLink to={'/'} className='text-black duration-300 hover:text-gray-300'>Food Recipe</NavLink>
                </li>
            </h2>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='search'
                    value={searchParam}
                    onChange={(e)=> setSearchParam(e.target.value)}
                    placeholder='Enter Item...'
                    className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200'
                />

            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={'/'} className='text-black duration-300 hover:text-gray-300'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favorite'} className='text-black duration-300 hover:text-gray-300'>Favorite</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
