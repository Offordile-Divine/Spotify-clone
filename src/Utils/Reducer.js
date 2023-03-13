export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // Remove after finish developing
    // token: "BQAhgW_GuXO__NML1m0RNwQeHjFv7ou0RDCcI598uvUYEIjBn3…ajJeRe634anQ5INfLecksUTLSv7Ki4m_Y_Hi5f3yRNBv9qbog",
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.user,
            }

            case "SET_TOKEN" : 
                return {
                    ...state,
                    token: action.token,
                }

                case "SET_PLAYLISTS":
                    return {
                        ...state,
                        playlists: action.playlists,
                    }
                case "SET_DISCOVER_WEEKLY":
                    return {
                        ...state,
                        discover_weekly: action.discover_weekly,
                    }
                case "SET_ITEM":
                    return {
                          ...state,
                          item: action.item,
                        };
            default:
                return state;
    }

}

export default reducer
