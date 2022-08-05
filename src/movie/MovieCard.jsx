import React from 'react'

const MovieCard = ({ name, posterImage }) => {
    console.log('name:', name)
    return (
        <div>
            <img className="w-full" alt={name}
                src={`./images/${posterImage}`}
                loading="lazy" />
            <div className="mt-[10px] text-white 
            font-TitilliumWeb text-sm lg:text-4xl font-thin">{name}</div>

        </div>)
}

export default MovieCard
