
import { createStore, combineReducers } from 'redux'
import amiiboreducer from '../reducers/amiiboreducer';
import totalreducer from '../reducers/totalreducer';


export default () =>
{
    const store = createStore(combineReducers({
        amiibos:amiiboreducer,
        total:totalreducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //to add redux dev tool 
    );
    return store;
} 
      