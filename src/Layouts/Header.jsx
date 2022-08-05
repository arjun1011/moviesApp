import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovie } from '../movie/movieSlice'
// import navBar from '../assets/images/nav_bar.png'
// import arrow from '../assets/images/Back.png'
// import search from '../assets/images/search.png'


const Header = () => {
    const dispatch = useDispatch()

    const [enableSearch, setenableSearch] = useState(false)
    const [search, setsearch] = useState('')

    const handleSearch = (e) => {
        setsearch(e.target.value)
        dispatch(searchMovie(e.target.value))
    }

    return (
        <div className="sticky top-0">
            <img className="w-full h-[192px] pb-[36px]" alt="nav-bar" src='./images/nav_bar.png' />
            <div className="absolute top-12 w-full">
                <div className="mx-[30px] flex justify-between">
                    <div className="flex flex-row items-center">
                        <img alt="back-arrow" src='./images/Back.png' />
                        {enableSearch ?
                            <input
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Search... "
                                value={search} onChange={handleSearch} />
                            : <div className="text-white ml-8 text-2xl font-TitilliumWeb">
                                Romantic Comedy
                            </div>}
                    </div>
                    <img onClick={() => setenableSearch(!enableSearch)} className="w-1/12 h-1/2" alt="search" src='./images/search.png' />
                </div>
            </div>
        </div>
    )
}

export default Header
