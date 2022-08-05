import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Layouts/Header';
import MovieCard from './movie/MovieCard';
import { firstLoad, next } from './movie/movieSlice';

import './App.css';

function App() {
  const movies = useSelector((state) => state.reducer.data)
  console.log('movies:', movies)
  const dispatch = useDispatch()
  console.log('dispatch:', dispatch)

  useEffect(() => {
    dispatch(firstLoad())
  }, [])

  const handleNextload = () => {
    setTimeout(() => {
      dispatch(next())
    }, 1000);
  }

  console.log('movies.length:', movies)

  return (
    <div className="bg-black w-full">
      <Header />
      <InfiniteScroll
        dataLength={movies.length}
        next={handleNextload}
        hasMore={movies.length <= 54}
      // loader={<h4 className="text-white">Loading...</h4>}
      >

        <div className="mx-[30px] grid grid-cols-3 gap-x-[30px] gap-y-[20px]">
          {movies.map((item, index) => <MovieCard key={index} {...item} />)}
        </div>
      </InfiniteScroll>

    </div>
  );
}

export default App;
