import React from "react";
import Navbar from "../companents/Navigation/Navbar";
import Head from "../companents/Header/Head";
import './Intro.css'
import Company from "../companents/Main/About Company/Company";
import Catalog from "../companents/Main/Catalogs/Catalog"

export default function Intro() {
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
