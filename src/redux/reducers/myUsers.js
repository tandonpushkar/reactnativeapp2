const initialState = {
    myUsers: [],
    myUsersHasMore: true,
    loadingUsersData: false,
    pageNo: 0,
};

const myUsers = (state = initialState, action) => {
    switch (action.type) {

        case 'MY_USERS':
            const { myUsers } = state;
            console.log("reducer%$", action.payload, action.isInitialCall)

            let oldUsersData = action.isInitialCall
                ? []
                : [...myUsers];
            action.payload.length &&
                action.payload.map(item => {
                    console.log("***map", item)
                    let index = oldUsersData.findIndex(x => x._id === item._id);
                    if (index === -1) {
                        oldUsersData.push(item);
                    }
                });
            console.log("***oldUsersData", oldUsersData)
            return {
                ...state,
                myUsers: [...oldUsersData],
            };

        case 'USERS_PAGE_NO_INCREMENT':
            return {
                ...state,
                pageNo: action.payload,
            };

        case 'USERS_HAS_MORE':
            return {
                ...state,
                myUsersHasMore: action.payload,
            };
        case 'LOADING_USERS_DATA':
            return {
                ...state,
                loadingUsersData: action.payload,
            };
        case 'SKELETON_LOADER':
            return {
                ...state,
                loaderSkeleton: action.payload,
            };
        case 'CLEAR_USERS_DATA':
            return initialState;

        default:
            return state;
    }
};

export default myUsers;
