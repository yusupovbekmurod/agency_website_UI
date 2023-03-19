import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate()

        const [value, setValue] = useState({
            username: "",
            password: "",
        })

        useEffect(() => {
            let token = localStorage.getItem("token")

            if(token) {
                navigate("/home")
            }
        }, [])

        function handleChange(e) {
         setValue((oldValue) => {
            return {...oldValue, [e.target.name]: e.target.value}
         })
        }

        async function submit(e) {
            e.preventDefault()

         try {
            let res = await axios.post("https://dummyjson.com/auth/login", value);
            console.log(res);
            if(res.status === 200) {
                localStorage.setItem("token", res.data.token)
                navigate("/home")
               toast("Success", { type: "success"})
            }

         } catch (error) {
            toast("Error Code", { type: "error"})
         }
        }


  return (
    <div>
     <form onSubmit={submit} className="handle-form">
        <input type="text" name='username' value={value.email} maxLength="25" onChange={handleChange} placeholder="Username" className='input-request'/>
        <input type="password" name='password' value={value.password} onChange={handleChange} placeholder="Password" className='input-request'/>
        <button type="button" class="btn btn-light button-form" onClick={submit}>Submit</button>
     </form>
    </div>
  )
}
