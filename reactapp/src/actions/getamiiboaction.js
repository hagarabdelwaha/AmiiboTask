export const   getAmiiboAction = ({id=0 ,name='none'} ={})=>({
    type : 'GET_AMIIBO',
    amiibo:{
        id ,
        name
    }
 });



 export const   getAmiiboCards = (amiiboarray =[])=>({
    type : 'GET_AMIIBO_CARDS',
    amiibos:amiiboarray,
 });


//  export const   getTotalCardsNumber = (total = 0)=>({
//     type : 'GET_CARDS_TOTAL',
//     total:total
//  });