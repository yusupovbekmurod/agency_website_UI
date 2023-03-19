import React, { useEffect } from "react";
import Navbar from "../companents/Navigation/Navbar";
import Head from "../companents/Header/Head";
import './Intro.css'
import Company from "../companents/Main/About Company/Company";
import Catalog from "../companents/Main/Catalogs/Catalog"
import { useNavigate } from "react-router-dom";

export default function Intro() {

  const navigate = useNavigate()


  useEffect(() => {
    let token = localStorage.getItem("token")

    if(!token) {
        navigate("/")
    }
}, [])


  return (
    <div>
      <Head />
      <div className="main">
      <Company />
      <Catalog/>
      </div>
    </div>
  );
}
