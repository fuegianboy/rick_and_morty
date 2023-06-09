
const initialState = {
    myFavorites: [],
    
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FAV":
            //------------------------
        //     return {
        //         ...state,
        //         myFavorite: [...state.myFavorites, action.payload],
        // } 
            return { 
                ...state, 
                myFavorites: payload, allCharacters: payload 
            };

        //---------------------------------
        case "REMOVE_FAV":  
        //-----------------------
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorite.filter((e) => {
        //             return e.id !== action.payload
        //     }),
        // }
        //-----------------------
            return { ...state, myFavorites: payload };
        default:
            return { ...state }
    }

};

export default rootReducer;
