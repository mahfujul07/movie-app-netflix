import { useEffect, useState } from "react";
import MovieCard from "./MovieCard"

function MovieList({ title, filter }) {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?${filter}`).then(res => res.json());
        setMovies(response.data.movies);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className='my-10'>
            <h1 className="text-gray-100 text-3xl font-medium">{title}</h1>
            <div className="my-6 flex items-start justify-between flex-wrap">
                {movies?.map(movie => (
                    <MovieCard movie={movie} {...movie} key={movie?.id}/>
                ))}
            </div>
        </div>
    )
}

export default MovieList