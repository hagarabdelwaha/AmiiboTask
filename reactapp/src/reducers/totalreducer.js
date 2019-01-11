
const amiibostatedefault = [];

export default (state = amiibostatedefault,action)=>{
    switch(action.type)
    {
        case 'GET_CARDS_TOTAL':
        return  action.total 
        
        default:
        return state
    }
    
};


