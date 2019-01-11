
const amiibostatedefault = [];

export default (state = amiibostatedefault,action)=>{
    switch(action.type)
    {
        case 'GET_AMIIBO':
        return [ ...state,
            action.amiibo ]

        case 'GET_AMIIBO_CARDS':
        return action.amiibos 

        // case 'GET_CARDS_TOTAL':
        // {console.log('ACTION',state.amiibos,action.total)
        // return  action.total 
        // }
        default:
        return state
    }
    
};


