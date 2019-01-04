import Axios from "axios";
const INITIAL_STATE = {
    message: null
}
export const updateMessage = message => ({
    type: "SET_MESSAGE",
    payload: message
})
export const getMessage = () => (dispatch, getState) => {
    dispatch(updateMessage('loading'))
    return Axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(resp => {
         dispatch(updateMessage(resp.data.title))
    })
}
export default (state = INITIAL_STATE, action) => {
switch (action.type) {
      case "SET_MESSAGE":
        return { ...state, message: action.payload }
      default:
        return state;
    }
}