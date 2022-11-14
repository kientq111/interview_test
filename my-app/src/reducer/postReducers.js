
export const postReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_POST_REQUEST":
            return { loading: true }
        case "GET_POST_SUCCESS":
            return { loading: false, data: action.payload }
        case "GET_POST_FALSE":
            return { loading: false, error: action.payload }
        default:
            return state
    }
}