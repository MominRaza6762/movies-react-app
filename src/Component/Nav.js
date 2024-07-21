import React from 'react'

export const Nav = ({filterList, updatedList}) => {
  return (<>
    <div className=" container btn-group btn-group-lg d-flex justify-content-center col-3 mt-4 mb-4 " role="group" aria-label="Large button group">

      {
        updatedList.map((e)=>{
          return <button type="button" className="btn btn-outline-primary" onClick={()=>{filterList(e)}}>{e}</button>
          
        })
      } 
  
 
</div>
</> )
}
