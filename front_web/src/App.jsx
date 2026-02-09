import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' // npm install bootstrap
import '@fortawesome/fontawesome-free/css/all.css' // npm install --save @fortawesome/fontawesome-free
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Greeting from './components/UI/Greeting';
// import LoginPage from './pages/LoginPage';
// import InitialPage from './pages/InitialPage';
// import SignupPage from './pages/SignupPage';
// import LockSelectPage from './pages/LockSelectPage';
// import HomePage from './pages/HomePage'; 
// import LockControlPage from './pages/LockControlPage';
// import RegisterLockPage from './pages/RegisterLockPage';
// import JoinLockPage from './pages/JoinLockPage';
// import LogsPage from './pages/LogsPage';
// import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="container-fluid p-0 d-flex flex-column min-vh-100">
      <Header />
      <main className="row">
        <p className="col-12 col-sm-2 col-md-1">Conteúdo da página</p>
        <p className="col-12 col-sm-4 col-md-4">Conteúdo da página</p>
        <p className="col-12 col-sm-4 col-md-4">Conteúdo da página</p>
        <p className="col-12 col-sm-2 col-md-2">Conteúdo da página</p>
        <div>
          <Greeting name="Lucas" age={25} />
          <Greeting name="Ana" age={30} />
          <Greeting name="João" age={18} />
        </div>
      </main>
      <Footer />
      {/*
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<LockSelectPage />} />
        <Route path="/home/:cod" element={<HomePage />} />
        <Route path="/lock-control" element={<LockControlPage />} />
        <Route path="/register-lock" element={<RegisterLockPage />} />
        <Route path="/join-lock" element={<JoinLockPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes> */}
    </div>
  );
}

export default App;