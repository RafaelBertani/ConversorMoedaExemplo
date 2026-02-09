import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' // npm install bootstrap
import '@fortawesome/fontawesome-free/css/all.css' // npm install --save @fortawesome/fontawesome-free
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container-fluid p-0 d-flex flex-column min-vh-100">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;