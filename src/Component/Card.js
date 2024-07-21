import React from "react";

export const Card = ({ mList }) => {
  const myStyle = { width: "16rem" };

  return (
    <>
    <div className="row">
      {mList.map((e ,i) => {
        return ( 
            
          <div className="card ms-4 mt-2 mb-2 col-8 bg-success" style={myStyle} key={i}>
            <img src={e.image} className="card-img-top mt-2" alt="image" />
            <div className="card-body">
              <h5 className="card-title">{e.name}</h5>
              <p className="card-text">
               {e.description}
                <a href="#" className="card-link">
                  Read More
                </a>
              </p>
            </div>
            <ul className="list-group list-group-flush bg-dark py-2 px-2">
              <li className="list-group-item">{e.category}</li>
              <li className="list-group-item bg-danger ">
                
                <a href="#" className="card-link">
                  Watch Now
                </a>
              </li>
            </ul>
            <div className="card-body">
              <div className="border rounded text-dark  bg-secondary text-center">
                {e.id}
              </div>
            </div>
          </div>
          
        );
      })}
   </div>
    </>
  );
};
