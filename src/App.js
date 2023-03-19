import Home from "@/pages/Home";
import "./App.css";
import About from "@/pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "@/_utils/Error";
import Appartements from "@/pages/Appartements";
import Layout from "@/pages/Layout";
import Footer from "@/components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/appartements/:id" element={<Appartements />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>

        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
