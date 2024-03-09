import React, { useContext } from 'react'
import { GlobalRecipeContext } from '../Content'
import RecipeItem from '../Recipe-Item/RecipeItem'

const Home = () => {
    const {recipelist,loading} = useContext(GlobalRecipeContext)
    if(loading) return <div>loading ....</div>
    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                recipelist && recipelist?.length > 0 ? 
                 recipelist?.map(item => <RecipeItem item = {item}/>)
                 :
                <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show Search someThing</p>
            }
        </div>
    )
}

export default Home
