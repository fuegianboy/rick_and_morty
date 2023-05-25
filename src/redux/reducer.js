
const initialState = {
    myFavorites: [],
    
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FAV":
            return {
                ...state,
                myFavorite: [...state.myFavorites, action.payload],
        } 
        case "REMOVE_FAV":  
            return {
                ...state,
                myFavorites: state.myFavorite.filter((e) => {
                    return e.id !== action.payload
            }),
        }
        default:
            return { ...state }
    }

};

export default rootReducer;
