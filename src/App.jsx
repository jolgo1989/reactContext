import "./App.css";
import StateComponent from "./context/StateComponent";
import Header from "./components/Header";
import InforCard from "./components/InforCard";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <StateComponent>
      <Header />
      <InforCard />
      <TopBar />
      <Footer />
    </StateComponent>
  );
};

export default App;
