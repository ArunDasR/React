import React,{useState} from "react"
import StudentList from './StudentList'


const data = [
    {name:'arun', age:'20'},{name:'manoj', age:'25'}
]

const Message = ()=>{
const [count, setCount] = useState(0)
const [userName, setUserName] = useState("Student app");

const inCrement = () => setCount(count+1)
const deCrement = () => setCount(count-1)
const showUser= () => setUserName("Arun");

   return  <> 
   <h1>Welcome : {userName}</h1>
   <StudentList data={data}/>
   {/* <h1>count {count}</h1>
   <button onClick={inCrement}>inCrement</button> &nbsp;
   <button onClick={deCrement}>deCrement</button> &nbsp;
   <button onClick={showUser}>Show User</button> */}
 </> 
}


export default Message