"use-client"

import Banner from "./Components/Banner/page";
import Benefits from "./Components/Benefits/page";
import Courses from "./Components/Courses/page";
import Footer from "./Components/Footer/page";
import Navbar from "./Components/Navbar/page";
import Review from "./Components/Review/page";

export default function Home() {
  return (
    <main>
       <div>
        <Navbar></Navbar> 
        <Banner></Banner>
        <Courses></Courses>
        <Benefits></Benefits>
        <Review></Review>
        <Footer/>
       </div>
    </main>
  );
}
