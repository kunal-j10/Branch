import logo from "./logo.svg";
import "./App.css";
import Swal from 'sweetalert2'

function App() {

  const popup=(index)=>{
    console.log(index);
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      html:`<p>${data[index].message}</p><input type="text"></input><button>Send</button`,
      showCloseButton: true,
      showCancelButton: true,
    })
  }

  const data=[
    {
      userid:200,
      timestamp:'6pm',
      message:'Hello bobby'
    },
    {
      userid:200,
      timestamp:'7pm',
      message:'Hello bobby2'
    },
    {
      userid:200,
      timestamp:'8pm',
      message:'Hello bobby3'
    },
    {
      userid:201,
      timestamp:'7pm',
      message:'Hello bobleee'
    }
  ]

  return (
    <div className="App">
      <table>
        <tr>
          <th>User Id</th>
          <th>TimeStamp</th>
          <th>Message</th>
          <th>Respond</th>
        </tr>
        <tbody>
          {
            data && data.map((e,index)=>{
              return(
                <tr key={index}>
            <td>{e.userid}</td>
            <td>{e.timestamp}</td>
            <td>
              {e.message}
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
