export default (pokes = [], action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload;
        case 'SEARCH_DATA':
            return action.payload;
        default:
            return pokes;
    }
}