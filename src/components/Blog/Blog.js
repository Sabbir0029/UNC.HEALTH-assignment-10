import React from 'react';
import './Blog.css'
import img from '../../img/Experienced surgeons team treating patient on operation table.jpg'
import img2 from '../../img/istockphoto-1220576876-612x612.jpg'
import img3 from '../../img/Health-Insurance1.jpg'
import img4 from '../../img/14.jpg'

const Blog = () => {
  return (
    <div className='blog'>
      <h1 className='text-center'>Blogs</h1>
      <h3 className='text-center mb-5'>......................</h3>
      <div className='container mb-4'>
      <div className='row'>
          <div className='col'>
            <img className='w-75' src={img} alt="" />
          </div>
          <div className='col'>
            <h3 className='mt-5'>Trusted results for Your Search Query. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search</h3>
          </div>
      </div>
      <div className='row'>
          <div className='col'>
          <h3 className='mt-5'>Master Of Public Health Usa - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily. Types: Products Online, Instant Results, Big Variaty, 24/7 Accessible</h3>
          </div>
          <div className='col'>
              <img src={img2} alt="" />
          </div>
      </div>
      <div className='row'>
          <div className='col'>
            <img className='w-75' src={img3} alt="" />
          </div>
          <div className='col'>
            <h3>Search Masters In Public Health Usa, Top Information From Trusted Internet Sources. Masters In Public Health Usa, Get Expert Advice and Curated Content on Searchley. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers</h3>
          </div>
      </div>
      <div className='row mb-5'>
          <div className='col'>
            <h3 className='mt-5'>
            Maisha Meds has a free Android app for pharmacies to manage sales, inventory, & reporting. Want to keep track of your business while you are away? Try our free pharmacy software! Technology advancing care. Grow your pharmacy. East Africa pharmacy app
            </h3>
          </div>
          <div className='col'>
            <img className='w-75 mt-5' src={img4} alt="" />
            </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;