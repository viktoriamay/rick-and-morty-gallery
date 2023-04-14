import { MainPage } from "../../pages/MainPage/MainPage";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <div className="main container"></div>
      <Footer />
    </div>
  );
}

export default App;
