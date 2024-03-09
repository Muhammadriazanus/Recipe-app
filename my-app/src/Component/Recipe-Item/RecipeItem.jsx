import React from 'react'
import { Link } from 'react-router-dom'
const RecipeItem = ({item}) => {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white'>
      <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
        <img src={item?.image_url} alt="cdad"  className='block w-full'/>

      </div>
      <span className='text-sm text-cyan-700 font-medium'>{item?.publisher}</span>
      <h3 className='font-bold text-2xl truncate text-black'>{item?.title}</h3>
      <Link to={`/recipe-item/${item?.id}` } className='text-sm px-8 rounded-lg uppercase font-medium mt-5 tracking-wider text-white inline-block shadow-md bg-black'>Recipe Detail</Link>
    </div>
  )
}

export default RecipeItem
