import logo from "./logo.svg";
import "./App.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState();
  const [reply,setreply]=useState();
  const [conversation,setConversation]=useState();
  const [idx,setIndex]=useState();
  const [reload,setreload]=useState(false);

  const popuptoggle = () => {
    document.getElementById("exampleModal").classList.toggle("hidden");
    setreload(!reload);
    setreply("");
    document.getElementById('table').classList.toggle('blur-xl');
  };

  const replyandupdate=async(index)=>{
      console.log("index",index);
       const convo={
          _id:data[index]._id,
          reply:reply
       }
       console.log(convo)
       try{
            const res=await axios.post('http://localhost:5000/respond',convo);
            console.log(res.data);
            if(res.data.success)
            {
            const response=await axios.post('http://localhost:5000/fetchPrevMessages',{userId:data[index].userId});
            console.log(response.data.prevmessages)
            setConversation(response.data.prevmessages);
            setreply("");
            }
       }
       catch(err){
        console.log(err);
       }
  }

  const inputHandler=(e)=>{
    const {value}=e.target;
    setreply(value);
  }

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/fetchMessages");
      // console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getprevmsg=async(index)=>{
    try{
        const response=await axios.post('http://localhost:5000/fetchPrevMessages',{userId:data[index].userId});
        console.log(response.data.prevmessages)
        setConversation(response.data.prevmessages);
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [reload]);
  return (
    <div className="flex justify-center p-3 ">
      <table className="auto w-[90%] text-center " id="table">
        <tr className=" text-white bg-indigo-600">
          <th></th>
          <th className="px-6 py-3 font-bold">User Id</th>
          <th className="px-6 py-3 font-bold">Message</th>
          <th className="px-6 py-3 font-bold">Respond</th>
        </tr>
        <tbody>
          {data &&
            data.map((e, index) => {
              return (
                <tr key={index} className="border border-grey-500">
                  <td>{index}</td>
                  <td className="px-6 py-3 font-bold">{e.userId}</td>
                  <td className="px-6 py-3">{e.messageBody}</td>
                  <td className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => {
                        getprevmsg(index);
                        popuptoggle();
                        setIndex(index);
                      }}
                      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-300"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Respond
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div
        class="modal fade fixed top-[10%] left-[10%] right-[10%] w-[80%] hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
             
                <div className="bg-gray-300 p-3 w-full ">
                {
                  conversation && conversation.map((e)=>{return(<div><p className="p-3 text-sm my-2 "><div className="bg-white p-3 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mr-[60%]">{e.messageBody}</div></p><p className="text-right p-3 text-sm my-2" ><div className="bg-red-600 p-3 rounded text-sm text-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl ml-[60%]" >{e.replyBody}</div></p><br/></div>)})
                }
                </div>
              <button
                onClick={popuptoggle}
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">
              <p className="text-center my-2"><span className="font-bold">Replying to :</span> <span className="text-sm">{data && data[idx]&& data[idx].messageBody}</span></p>
              <div className="flex justify-center">
              <input className="rounded-tl-xl rounded-bl-xl py-1 px-2 border-2 outline-none" placeholder="reply to user" name="reply" value={reply} onChange={inputHandler} ></input>
               <button className="bg-red-600 px-2 text-white hover:bg-red-400" onClick={()=>{replyandupdate(idx)}}>Send</button>
              </div>
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                data-bs-dismiss="modal"
                onClick={popuptoggle}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
