import { MainPage } from "../../pages/MainPage/MainPage";
import { Header } from "../Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main container">
        <MainPage />
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
