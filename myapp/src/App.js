import './App.css';
import Cards from './Burger/cards';
import Carousel from './Burger/carousel';
import Footer from './Burger/footer';
import LastFooter from './Burger/lastfooter';
import Navbar from './Burger/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Cards/>
      <Footer/>
      <LastFooter/>
    </div>

  );
}

export default App;
