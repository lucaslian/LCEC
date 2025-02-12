import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FacultyPictures from './Components/FacultyPictures';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './Navigation/About';
import Contact from './Navigation/Contact';
import Login from './Navigation/Login';

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="/">LCEC</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="/faculty-pictures">Faculty</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-disabled="false" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-disabled="false" href="/Contact">Contact</a>
                    </li>
                    <li class="nav-item">
                      
                    </li>
                  </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
                      <a class="btn btn-outline-success" aria-disabled="true" href="/Login">Login</a>
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
    </Router>
  );
}

export default App;
