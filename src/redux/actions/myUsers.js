import axios from "axios"


export const getmyUsers = (pageNo) => {
    console.log("actionn", pageNo)
    return async (dispatch, getState) => {

        let link = `https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=10`

        if (pageNo === 0) { dispatch({ type: "USERS_HAS_MORE", payload: true }) }
        dispatch({ type: "USERS_PAGE_NO_INCREMENT", payload: pageNo })
        dispatch({ type: "LOADING_USERS_DATA", payload: true })

        // if (pageNo === 0) { dispatch({ type: "SKELETON_LOADER", payload: true }) }

        return await axios.get(link, dispatch)
            .then(res => {

                // dispatch({ type: "SKELETON_LOADER", payload: false })
                console.log("***response", res.data.data)
                if (res.data === "") {
                    console.log("***enteringgg")
                    dispatch({ type: "MY_USERS", payload: [] })
                    dispatch({ type: "USERS_HAS_MORE", payload: false })
                    dispatch({ type: "LOADING_USERS_DATA", payload: false })
                } else {
                    // console.log("***responseeeee", res)
                    dispatch({ type: "MY_USERS", payload: res.data.data, isInitialCall: pageNo === 0 })
                    dispatch({ type: "LOADING_USERS_DATA", payload: false });
                }
            })
            .catch(error => {
                // dispatch({ type: "SKELETON_LOADER", payload: false })
                dispatch({ type: "LOADING_USERS_DATA", payload: false });
            });
    }
}

export const clearMyUsers = () => {
    return { type: 'CLEAR_USERS_DATA' }
}
