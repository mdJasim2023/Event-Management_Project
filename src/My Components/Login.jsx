import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const username1 = {"user":"Jasim","password":"127962"}
    const username2 = {"user":"Mohammad","password":"192762"};
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [loading1, setLoading1] = useState(false)
    
        // if(username1.user === username || username2.user === username){
        //     if(username1.password === password || username2.password === password){
        //         console.log('correct')
        //     }
        //     else{
        //         console.log(" PASS IS INCORRECT")
        //     }
        // }
        // else{
        //     console.log("WRONG")
        // }

        if(username1.user === username && username1.password === password){
            console.log('correct')
        }
        else if(username2.user === username && username2.password === password){
            console.log('correct')
        }
        else{
            console.log("WRONG")
        }

  return (
    <div>
        <h1>Login form</h1>
        <form>
            <input type="text" placeholder='Enter Username' onBlur={(e)=>{setUsername(e.target.value)}} />
            <input type="password" placeholder='Enter Password' onBlur={(e)=>{setPassword(e.target.value)}}/>
            <Link><button>lOGIN</button></Link>
        </form>

    </div>
  )
}

export default Login