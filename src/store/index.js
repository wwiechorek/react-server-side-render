import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
const enhancers = []
if (typeof window !== "undefined" && process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension
if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
)
const configureStore = preloadedState => createStore(reducers, preloadedState, composedEnhancers);
export default configureStore;