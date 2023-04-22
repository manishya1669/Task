
const initialval = {
    list:[]
}
const todoReducer = (state= initialval,action)=>{
  
    switch(action.type){
        case "ADDTODO":
            const {id,data}= action.payload;

            return{
                ...state,
                list:[
                    ...state.list,
                    {
                     id:id,
                     data:data  
                    }
                ]
            }
        case "DELETE":
        const newList=    state.list.filter((item)=>item.id !== action.id)
         
            return{
                ...state,
               
                list:newList
            }

        case "REMOVEALL":
            return {
                ...state,
                list:[{}]
            }
            
        
        default :
             return state;
    }
}
export default todoReducer;