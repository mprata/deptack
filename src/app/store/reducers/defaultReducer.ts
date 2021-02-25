const initialState = {
    defaultLoading: false,
    error: false,
    defaultData: []
}

export const defaultReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'FETCH_DEFAULT_BEGIN':
            return {
                ...state,
                defaultLoading: true
            };
        case 'FETCH_DEFAULT_SUCCESS': 
            return {
                ...state,
                defaultLoading: false,
                defaultData: [...action.payload.items]
            }
        case 'FETCH_DEFAULT_FAILURE':
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}