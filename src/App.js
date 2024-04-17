import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import MyNavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <div>
      <MyNavBar home="home" about="about" product="product" contact="contact" />
      <Home/>
      <About coverpic={"/imgs/hand-water.jpg"} altImg="hand.jpg" ownerpic={"/imgs/mingyuSmiling.jpg"} owneralt="mingyuSmile.jpg"/>
      <Header/> {/* Product Header */}

      {/* URGENT !!!! NEEDS HELP with adding multiple products to page */}
      <Products imgsrc={"/imgs/mingyu.jpg"} imgalt={"mingyu.jpg"} ititle={"[add title here]"} idesc={"[add description here]"} iadd={"Add to Cart"}/>
      <Contact/>
    </div>
  );
}

export default App;
