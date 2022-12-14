import Header from "./components/Header";
import HeroSection from "./components/HeroSection"
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     
      <Header />
      <HeroSection />
     
      <Categories />
      <Campaigns />
      <div className="container ml-72">
      <Favorites/>
      <MobileApp />
      <Cards />
      </div>
      <Footer />
      </div>
   
  );
}

export default App;
