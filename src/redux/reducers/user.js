export const userReducer = (state = '', action) => {
    switch (action.type) {
        case 'updateUser':
            return action.payload;
    }
    return state;
};