
import React, { useState } from "react";
//import "./style.css"

export default function Todo() {
  const [value, setvalue] = useState();
  const [todo, settodo] = useState([]);
//  const [edit, setedit] = useState();


  function btn() {
    if (value !== "" && todo !== "") {
      settodo([...todo, value]);
    }
    setvalue("");
  }

  function btn2() {
    settodo([]);
  }

/*Delete item......*/
    function deleteItem(index){
    const allData=[...todo];
   const deteteText=allData.filter((item,idx)=>{
    return index !==idx;
   });
   settodo(deteteText)
   } 




// // /*Edit item......*/
//  const editItem=(obj,idx)=>{
//    setedit(idx);
//     setvalue(obj.value);
  
//  }

//   function editsubmitdata(){
// let temp=[...todo];
// temp[edit].value=value;
// settodo(temp);
//  }


  return (
    <div className="maindiv">
      <div className="Firstdiv">
        <input
          type="text"
          onChange={(e) => setvalue(e.target.value)}
          value={value}
        />
        <button type="button" className="btn btn-primary" onClick={btn}style={{margin:"20px"}}>
          Enter
        </button>
      </div>
      

{ <div>

  {todo.map((todos,index)=>{
  return(
    <div className="listItem" key={index}>
      <ul>
  <li>{todos}</li>
  </ul>
<div className="DeletItem">
    {/* <button style={{margin:"5px"}} onClick={()=>editItem(item,index)}>Edit</button> */}
    {/* <button style={{margin:"5px"}} onClick={editsubmitdata}>editsubmitdata</button>     */}
  <button style={{margin:"5px"}} onClick={()=>deleteItem(index)}>Delete</button>
  </div>
  </div>
  )
  })}

</div> }





      <button type="button" className="btn btn-primary" onClick={btn2}>
          Clear all
        </button>
    </div>

  )
}      


  
