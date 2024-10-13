import Image from "next/image";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";



export default function Homepage() {
  return (
    <div className="name">
      <h1>
        Hello,This is home page.
      </h1>
      <br />
      <hr />
      <Footer></Footer>
      <br />
      <hr />
      <Header></Header>  
      <br />
      <hr />
      <Hero></Hero>
    </div>
  );
}
