"use-client"

import Banner from "./Components/Banner/page";
import Navbar from "./Components/Navbar/page";

export default function Home() {
  return (
    <main>
       <div>
        <Navbar></Navbar> 
        <Banner></Banner>
       </div>
    </main>
  );
}
