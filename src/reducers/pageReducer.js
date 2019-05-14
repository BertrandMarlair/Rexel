export default (state, action) => {
    switch (action.type) {
        case "EDIT_PAGE":
            return {
                page: action.payload
            };
        default:
            return state;
    }
};