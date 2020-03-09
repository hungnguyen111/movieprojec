import * as ActionType from '../Constants/actionType';

let initialState = {
    listMovie: [],
    listMovieAll: [],
    listMovieComing: [],
    listCinema: [],
    cinePlex: [],
    cinePlexBHD: [],
    movie: {},
    showtimesMovie: [],
    getShowtimesSuccess: false,
    detailMovie: {},
    isDetail: false,
    listSeat: {},
    isListSeat: false,
    isDisplayMenu: true,
    bookingMovie: false,
    listMovieSearch: [],
    movieEditing: {
        maPhim: '',
        tenPhim: '',
        biDanh: '',
        trailer: '',
        hinhAnh: '',
        moTa: '',
        maNhom: 'GP07',
        ngayKhoiChieu: '',
        danhGia: '5'
    }
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_MOVIE:
            // console.log(action.listMovie);

            state.listMovie = action.listMovie;
            return { ...state };
        case ActionType.GET_LIST_MOVIE_ALL:
            // console.log(actio);

            state.listMovieAll = action.listMovieAll;
            // console.log(state.listMovieAll);

            return { ...state };
        case ActionType.GET_LIST_MOVIE_COMMING:

            state.listMovieComing = action.listMovieComing;
            return { ...state };
        case ActionType.GET_LIST_CINEMA:

            state.listCinema = action.listCinema;
            return { ...state };
        case ActionType.GET_CINE_PLEX_BHD:

            state.cinePlexBHD = action.cinePlexBHD
            return { ...state }
        case ActionType.GET_CINE_PLEX:
            // console.log(action.cinePlex);

            state.cinePlex = action.cinePlex
            return { ...state }

        case ActionType.GET_SHOWTIMES:
            state.showtimesMovie = [...state.showtimesMovie, action.showtimesMovie]
            if (state.showtimesMovie.length > 1) {
                state.showtimesMovie.splice(0, 1)
            }
            state.getShowtimesSuccess = true;
            return { ...state }
        case ActionType.GET_DETAIL_MOVIE:
            state.detailMovie = action.detailMovie
            // console.log(action.detailMovie);
            if (action.detailMovie) {
                state.isDetail = true;
            }
            return { ...state }
        case ActionType.SET_ISLOADING:
            if (state.isDetail) {
                state.isDetail = false;
            }
            return { ...state }
        case ActionType.GET_LIST_SEAT:
            state.listSeat = action.listSeat
            // console.log(action.listSeat);

            if (action.listSeat) {
                state.isListSeat = true
            }
            return { ...state }
        case ActionType.SET_IS_LIST_SEAT:
            state.isListSeat = false;
            return { ...state }
        case ActionType.SET_NO_MENU:
            state.isDisplayMenu = false;
            return { ...state }
        case ActionType.SET_MENU:
            state.isDisplayMenu = true;
            return { ...state }
        case ActionType.ADD_MOVIE:
            state.listMovieAll = [action.movie, ...state.listMovieAll];
            return { ...state }
        case ActionType.BOOKING_MOVIE:
            state.listSeat = { ...state.listSeat };
            return { ...state }
        case ActionType.ACTION_BOOKING:
            state.bookingMovie = false;
            return { ...state }
        case ActionType.SEARCH_MOVIE:
            state.listMovieSearch = [...state.listMovie];
            // console.log(state.listMovieSearch);
            // console.log(action.keywordMovie);
            if (action.keywordMovie) {
                state.listMovieSearch = state.listMovieSearch.filter((movie) => {
                    return movie.tenPhim.toLowerCase().indexOf(action.keywordMovie.toLowerCase()) !== -1
                })
            }
            return { ...state }
        case ActionType.UPDATE_MOVIE:
            console.log(action.movie);
            
            state.movieEditing = {
                maPhim: action.movie.maPhim,
                tenPhim: action.movie.tenPhim,
                biDanh: action.movie.biDanh,
                trailer: action.movie.trailer,
                hinhAnh: action.movie.hinhAnh,
                moTa: action.movie.moTa,
                maNhom: action.movie.maNhom,
                ngayKhoiChieu: action.movie.ngayKhoiChieu,
                danhGia: action.movie.danhGia
            }
            for (let index in state.listMovieAll) {
                if (state.listMovieAll[index].maPhim === action.movie.maPhim) {
                    state.listMovieAll[index] = action.movie
                    break;
                }
            }
            // state.movieEditing = action.movie
            console.log(state.movieEditing);
            return { ...state }
        case ActionType.EDIT_MOVIE:
            state.movieEditing = action.movieEditing
            return { ...state }
        default:
            return { ...state };
    }
}

export default movieReducer;