import React from 'react';
import img from '../../img/10607.png';
import './Home.css'

const Home = () => {
  return (
    <div className='container mt-3 rounded-3'>
      <div className='row cols-1 row-cols-lg-2'>
        <div className='col p-5'>
          <h1 className='py-4'>Consult a doctor <br /> anytime,anywhere  <br /> by <span className='text-danger'>Video Call</span></h1>
          <p className='pb-5'>Talk with a doctor using our highly secured HLPAA complaint <br />end-to-end encrypted video call...</p>
        </div>
        <div className='col'>
          <img className='' src={img} alt="" />
        </div>
      </div>
      <hr />
      {/* OUR FEATURS section */}
      <div>
        <p className='text-center mt-5'>OUR FEATURS</p>
         <h1 className='text-center'>WE Believe that We can Save <br />More Lifes With you</h1>
         <div>
            <div className='row'>
              <div></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Home;