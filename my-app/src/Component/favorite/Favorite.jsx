import React, { useContext } from 'react'
import { GlobalRecipeContext } from '../Content'
import RecipeItem from '../Recipe-Item/RecipeItem'

const Favorite = () => {
    const {favoriteList} = useContext(GlobalRecipeContext)
    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                favoriteList && favoriteList?.length > 0 ?
                favoriteList?.map(item => <RecipeItem item={item} />)
                    :
                    <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show Search someThing</p>
            }
        </div>
    )
}
export default Favorite
