import React from 'react';
import '../Home.css';
import { useNavigate } from 'react-router-dom';
import preschoolIcon from '../Images/Icons/preschool.png';
import elementaryIcon from '../Images/Icons/elementary.png';
import highschoolIcon from '../Images/Icons/highschool.png';

  function Home() {

    const navigate = useNavigate();

    function buttonClicked(){
      console.log("Button is clicked");
      navigate("/preschool");
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
                <div className='icon-container'>
                  <img src={preschoolIcon} alt='Preschool' className='preschool-icon'></img>
                </div>
                <h1 className="text-center">Preschool</h1>
                <p>With LCEC strong Preschool learning curriculum, our lovely children will improve their learning and knowledge.</p>
              </div>
                <button className='learn-more-enrollment' onClick={buttonClicked}>Learn more</button>
            </div>

          <div className="elementary-enrollment">
            <div>
              <div className='icon-container'>
                  <img src={elementaryIcon} alt='Elementary' className='elementary-icon'></img>
                </div>
              <h1 className="text-center">Elementary</h1>
              <p>With LCEC’s great teachers and learning curriculum students will improve dramatically. With Christ focused extra curriculum, they will have a firm foundation. </p>
            </div>
            <button className='learn-more-enrollment' disabled='true'>Learn more</button>
          </div>

          <div className="highschool-enrollment">
            <div>
              <div className='icon-container'>
                  <img src={highschoolIcon} alt='Highschool' className='highschool-icon'></img>
                </div>
              <h1 className="text-center">High School</h1>
              <p>With LCEC’s great teachers and learning curriculum students will improve dramatically. With Christ focused extra curriculum, they will have a firm foundation.</p>
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