
export const addtodo= (data)=>{
    return{
        type:"ADDTODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data

        }
    }
}

export const  deletetodo = ()=>{
    return{
         type:"DELETE"
    }
}

export  const removeAll = ()=>{
    return {
        type:"REMOVEALL"
    }
}
