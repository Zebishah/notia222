const initialState = {

    todo: []

};

const NotesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_NOTE":
            const updatedTodo = [...state.todo, action.payload];

            return {
                ...state,
                todo: updatedTodo,
            };
        case "GET_NOTES":

            return {
                ...state,
                todo: action.payload,
            };
        case "Delete_NOTES":

            return {
                ...state,
                todo: action.payload,
            };
        case "Update_NOTES":

            return {
                ...state,
                todo: action.payload,
            };
        default:
            return state;
    }
};

export default NotesReducer;
