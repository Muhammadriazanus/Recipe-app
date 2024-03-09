import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalRecipeContext } from '../Content'

const Detail = () => {
    const { id } = useParams()
    const { recipelistData, setrecipelistData, handleToFavorite } = useContext(GlobalRecipeContext)
    useEffect(() => {
        async function getRecipeDetails() {
            const respone = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await respone.json()
            console.log(data);
            if (data?.data) {
                setrecipelistData(data?.data)
            }
        }
        getRecipeDetails()
    }, [])
    return (
        <div className='container mx-auto py-10 flex  gap-10'>
            <div className='row-start-2 lg:row-start-auto'>
                <div className='h-96 overflow-hidden rounded group'>
                    <img src={recipelistData?.recipe?.image_url} alt="recipedata" className='w-200px h-200 object-cover block group-hover:scale-105 duration-300' />

                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-sm text-cyan-700 font-medium'>
                    {recipelistData?.recipe?.publisher}
                </span>
                <h3 className='font-bold text-2xl truncate text-black'>
                    {recipelistData?.recipe?.title}
                </h3>
                <div>
                    <button onClick={()=> handleToFavorite(recipelistData?.recipe)} className='p-3 px-8 mt-3 inline-block bg-black text-white rounded-lg text-sm uppercase font-medium tracking-wider'>Save as Favorites</button>

                </div>
                <div>
                    <span className='text-2xl font-semibold text-black'>Ingredient :</span>
                    <ul className='flex flex-col gap-3'>
                        {
                            recipelistData?.recipe?.ingredients?.map(ingredient =>
                                <li><span className='text-2xl font-semibold text-black'>{ingredient?.quantity} {ingredient?.unit}</span>
                                    <span className='text-2xl font-semibold text-black'>{ingredient?.description}</span>

                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Detail

