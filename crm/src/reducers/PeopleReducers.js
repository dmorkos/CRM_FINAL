import people from './people.json'

const initialState = {
    people,
};
// this is our first reducers 
// we accept the inital state as the defualt state 
export default (state = initialState, action) => {
    switch (action.type) {
        default: // no action defualt works 
            return state;
    }
}