import axios from 'axios';
export const getPost = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_POST_REQUEST",
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts',
            config
        );

        dispatch({
            type: "GET_POST_SUCCESS",
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: "GET_POST_FALSE",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


