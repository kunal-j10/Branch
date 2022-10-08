import logo from "./logo.svg";
import "./App.css";
import Swal from 'sweetalert2'
import axios from 'axios';
import {useState,useEffect} from 'react'
function App() {

  const popup=(index)=>{
    console.log(index);
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      html:`<p>${data[index].messageBody}</p><input type="text"></input><button>Send</button`,
      showCloseButton: true,
      showCancelButton: true,
    })
  }
  const getData=async()=>{
    try{
        const res=await axios.get('http://localhost:5000/fetchMessages')
        // console.log(res);
        setData(res.data);
    }
    catch(err){
      console.log(err);
    }
  }

  const [data,setData]=useState();

  useEffect(()=>{
      getData();
  },[])
  return (
    <div className="App">
      <table>
        <tr>
          <th>User Id</th>
          <th>Message</th>
          <th>Respond</th>
        </tr>
        <tbody>
          {
            data && data.map((e,index)=>{
              return(
                <tr key={index}>
            <td>{e.userId}</td>
            <td>
              {e.messageBody}
            </td>
            <td><button onClick={()=>{popup(index)}}>Respond</button></td>
          </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
