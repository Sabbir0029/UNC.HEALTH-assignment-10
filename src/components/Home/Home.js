import React from 'react';
import img from '../../img/10607.png'; 
import About from './About';
import './Home.css'

const Home = () => {
  return (
    <div className='container mt-3 rounded-3 home'>
      <div className='row cols-1 row-cols-lg-2 pt-5'>
        <div className='col p-5'>
          <h1 className='py-4'>Consult a doctor <br /> anytime,anywhere  <br /> by <span className='text-danger'>Video Call</span></h1>
          <p className='pb-5'>Talk with a doctor using our highly secured HLPAA complaint <br />end-to-end encrypted video call...</p>
        </div>
        <div className='col'>
          <img className='' src={img} alt="" />
        </div>
      </div>
      <hr />
      {/* about us section */}
      <About></About>
    </div>
  );
};

export default Home;