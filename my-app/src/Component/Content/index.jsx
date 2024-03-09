import { createContext, useState } from "react";

export const GlobalRecipeContext = createContext(null)
const GlobalRecipeState = ({ children }) => {
    const [searchParam, setSearchParam] = useState('')
    const [loading, setloading] = useState(false)
    const [recipelist, setrecipelist] = useState([])
    const [recipelistData, setrecipelistData] = useState(null)
    const [favoriteList, setFavoriteList] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const result = await res.json()
            if (result?.data?.recipes) {
                setrecipelist(result?.data?.recipes)
                setloading(false)
                setSearchParam('')
            }
        } catch (error) {
            console.log(error);
            setloading(false)
            setSearchParam('')
        }
    }
    function handleToFavorite(getCurrentItem) {
        console.log(getCurrentItem);
        let cpyFavorite = [...favoriteList]
        const index = cpyFavorite.findIndex(item => item.id === getCurrentItem.id)
        if (index === -1) {
            cpyFavorite.push(getCurrentItem)
        } else {
            cpyFavorite.splice(index)
        }
        setFavoriteList(cpyFavorite)
    }

    return (
        <GlobalRecipeContext.Provider value={{ favoriteList,handleToFavorite, recipelistData, setrecipelistData, recipelist, searchParam, loading, setSearchParam, handleSubmit }}>
            {children}
        </GlobalRecipeContext.Provider>
    )
}

export default GlobalRecipeState