import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Rowlist from "./Components/Rows/Rowlist/Rowlist";

function App() {
  return (
    <>
      <Header />
     
      <Banner />
      <Rowlist/>
     
      <Footer />
    </>
  );
}

export default App;
