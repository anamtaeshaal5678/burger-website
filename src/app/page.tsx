import React from "react";

import Navbar from "../app/components/Navbar";
import Carousel from "./components/Carousel";
import Progresser from "./components/Progresser";
import Banner from "./components/Banner";
import Productlist from "./components/Productlist";



export default function App() {
  return(
<div className="bg-gradient-to-r
 from-black to-slate-700 min-h-screen text-white">
  <Navbar />
  <Carousel />
  <Progresser />
  <Banner />
  <Productlist/>
</div>

  )
}
