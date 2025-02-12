import React from 'react';
import '../Home.css';
import { useNavigate } from 'react-router-dom';

  function Home() {

    const navigate = useNavigate();

    function buttonClicked(){
      console.log("Button is clicked");
      navigate("/faculty-pictures");
    }

    return (
      <div>
        <div className="main-container">
          <div className="home-campus-container">
            <div className="overlay">
              <div className="card">
                <p>"Train up a child in the way he should go: <br/>And when he is old, he will not depart from it."</p>
                <p className="bibleReference lh-1">Proverbs 22:6</p>
              </div>
            </div>
          </div>

          <div className='enrollment-info'>
            <div className="preschool-enrollment">
              <div>
                <p>This will contain information about enrollment for Preschool</p>
              </div>
                <button className='learn-more-enrollment' onClick={buttonClicked}>Learn more</button>
            </div>

          <div className="elementary-enrollment">
            <div>
              <p>This will contain information about enrollment for Grade 1 - 5</p>
            </div>
            <button className='learn-more-enrollment' disabled='true'>Learn more</button>
          </div>

          <div className="highschool-enrollment">
            <div>
              <p>This will contain information about enrollment for Grade 6 - 12</p>
            </div>
              <button className='learn-more-enrollment' disabled='true'>Learn more</button>
          </div>
        </div>
      </div>

      <footer className='home-footer'>
        <p>This is the footer</p>
      </footer>
    </div>
    );
  }
  
  export default Home;