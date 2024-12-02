"use-client"

import Banner from "./Components/Banner/page";
import Benefits from "./Components/Benefits/page";
import Courses from "./Components/Courses/page";
import Navbar from "./Components/Navbar/page";

export default function Home() {
  return (
    <main>
       <div>
        <Navbar></Navbar> 
        <Banner></Banner>
        <Courses></Courses>
        <Benefits></Benefits>
       </div>
    </main>
  );
}
