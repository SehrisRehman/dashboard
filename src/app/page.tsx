import Image from "next/image";
import Dashboard from './Dashboard/page'
import Footer from "./Footer/page";
import Header from "./Header/page";
import Navbar from "./Navbar/page";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden sm:h-[150vh] sm:bg-white bg-gray-100 ">
      <Header/>
      <Navbar/>
      <div className="max-w-[1920px] max-h-[826px] sm:h-auto sm:w-full flex justify-center mx-auto ">
        <Dashboard/>
       </div>
       <div className="md:mt-40 sm:mt-200 xl:mt-20">
       <Footer />
       </div>
    </main>
  );
}
