import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY=process.env.REACT_APP_API_KEY
function getMovies(){
    return async(dispatch)=>{
        try{
            
        }


        const popularMovieApi = api.get(
            `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            );
        
        const topRatedApi = api.get(
            `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            );

        const upComingApi = api.get(
            `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            );

        let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
            popularMovieApi,
            topRatedApi,
            upComingApi
        ]);
        
        console.log("popularMovies!!!",popularMovies);
        console.log("topRatedMovies!!!",topRatedMovies);
        console.log("upcomingMovies!!!",upcomingMovies);

        dispatch(movieActions.getPopularMovies({popularMovies}));
        dispatch(movieActions.getTopRatedMovies({topRatedMovies}));
        dispatch(movieActions.getUpcomingMovies({upcomingMovies}));


        
    }
}

export const movieAction = {
    getMovies,
}