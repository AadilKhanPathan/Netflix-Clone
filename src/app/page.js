import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleCards from "./components/TitleCards";

export default function Home() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <TitleCards Title="popular" category="popular"/>
      {/* <TitleCards Title="Blockbuster movies" category="top_rated"/>
      <TitleCards Title="TV SHOWS" category="top_rated" type="tv"/>
      <TitleCards Title="Only on netflix" category="upcoming" type="movie"/> */}
      <Footer/>
  </div>
  );
}
