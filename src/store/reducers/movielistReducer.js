import { UPDATE_MOVIES } from '../actions/updateMovies';

const movielistReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case UPDATE_MOVIES :
            console.log('Estado actual: ' + JSON.stringify(state));
            console.log('Se ejecuto esa uewa: ' + payload);
            return {name: payload}
        default :
            return state
    };
};

export default movielistReducer;