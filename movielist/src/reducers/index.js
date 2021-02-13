import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        {title:'Spider-man: Homecoming', releaseDate: '05-05-2017', rating:7.4, },
        {title: 'Avengers-Infinity', releaseDate: '09-08-2014', rating:4.5, },
        {title:'Jurassic Park', releaseDate: '05-04-2016', rating:6.4, },
        {title: 'Black Panther', releaseDate: '12-06-2018', rating:7.5, },
    ]
}

const selectedMovieReducer = (state = null, action) => {
    switch(action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})