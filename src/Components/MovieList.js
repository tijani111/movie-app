import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movieList,search,rate}) {
    return (
        <div className="card">

            {movieList.filter(el=>el.titre.toUpperCase().includes(search.toUpperCase().trim())& el.rate>=rate).map((el)=>(<MovieCard film={el}/>))}
        </div>
    )
}
