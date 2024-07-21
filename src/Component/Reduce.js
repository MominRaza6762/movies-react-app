import React, { useReducer } from 'react'


export const Reduce = () => {
    const reducer =(state,action)=>{
        if (action.type==="ic") {
            state =state+1;
            
        }
        if(state >0 && action.type==="dc")
        {
            state =state-1;
        }
        return state;


    }
    const [state , incDnc] = useReducer(reducer ,0)
  return (
    <>
    <div >
        <button onClick={()=>incDnc({type:"ic"})}>
           Increment 
        </button>
        <p>
          {state}  
        </p>
        <button onClick={()=>incDnc({type:"dc"})}>
            Decrement
        </button>

    </div>
    </>
  )
}
