import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FacultyPictures from './Components/FacultyPictures';
import { HashRouter as Router, Route, Routes, Link} from 'react-router-dom';
import About from './Navigation/About';
import Contact from './Navigation/Contact';
import Login from './Navigation/Login';

function App() {
  return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <Link class="nav-link" to="/">LCEC</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link" to="/faculty-pictures">Faculty</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" aria-disabled="false" to="/Contact">Contact</Link>
                    </li>
                    <li class="nav-item">
                    </li>
                  </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
                      <Link className="btn btn-outline-success" to="/login">Login</Link>
                </div>
              </div>
            </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty-pictures" element={<FacultyPictures />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
  );
}

export default App;
