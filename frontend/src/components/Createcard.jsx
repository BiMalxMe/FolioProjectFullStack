import { useState } from "react"

export function Createcard(){
    const [name,setname]=useState('')
    const [description,setdescription]=useState('')
    const [linkedIn,setlinkedIn]=useState('')
    const [Twitter,setTwitter]=useState('')
    return <div>
           <b>Enter name </b> <input style={{margin:10,padding:10}}
           type="text"  placeholder="Enter the title here" onChange={function(e){
            const valueName=e.target.value
            setname(valueName)
           }}/><br></br>
           <b>Enter description </b> <input style={{margin:10,padding:10}}
           type="text"  placeholder="Enter the description here" onChange={function(e){
            const valueDesc=e.target.value
            setdescription(valueDesc)
           }}/><br></br>
           <b>Enter linkedinURL </b> <input style={{margin:10,padding:10}}
           type="text"  placeholder="Enter the linkedinURL here" onChange={function(e){
            const valuelinkedIn=e.target.value
            setlinkedIn(valuelinkedIn)
           }}/><br></br>
           <b>Enter Twitter Url </b> <input style={{margin:10,padding:10}}
           type="text"  placeholder="Enter the Twitter Url here" onChange={function(e){
            const valueTwitter=e.target.value
            setTwitter(valueTwitter)
           }}/><br></br>
           <button onClick={()=>{
            fetch('http://localhost:3000/link',{
                method:"POST",
                body:JSON.stringify({
                    name,
                    description,
                    linkedIn,
                    Twitter
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }) .then(async (res) => {
                if (res.ok) {
                    const json = await res.json();
                    alert('Todo added');
                } else {
                    alert('Error adding Todo');
                }
            })
            .catch((error) => {
                alert('Network error: ' + error.message);
            });
           }}>Submit</button>
    </div>
}