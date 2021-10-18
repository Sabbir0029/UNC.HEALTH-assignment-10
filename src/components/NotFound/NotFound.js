import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/notFount.jpg'

const NotFound = () => {
  return (
    <div className='mt-5'>
      <div className='text-center'>
        <img src={img} alt="" />
        <p><Link className='text-decoration-none text-success fw-bold fs-4 bg-danger p-2 rounded' to='/home'>Home</Link></p>
      </div>
    </div>
  );
};

export default NotFound;