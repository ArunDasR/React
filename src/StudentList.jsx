import React from "react"

const StudentList = (props)=>{
    console.log(props)

   return  <> 
   <h1>StudentList</h1>
  
        <>
       <table style={{ border:'1px solid black'}}>
  <tr>
    <th>name</th>
    <th>age</th>
    
  </tr>
  {props.data.map((data)=>{
    return (<tr>
    <td>{data.name}</td>
    <td>{data.age}</td>
 
  </tr>
   )
})}
</table>
        </>
  
 </> 
}


export default StudentList