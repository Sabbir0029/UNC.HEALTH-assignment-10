import React from 'react';
import './Contract.css'

const ContractUs = () => {
  return (
    <div className='container contract'>
      
      <form className='w-50 mb-5'>
      <h1 className='text-center'>Contract us</h1>
         <div className="mb-3">
           <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         <div className="mb-3">
           <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
           <input type="password" className="form-control" id="exampleInputPassword1" required/>
         </div>
         <div class="input-group m-3">
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
         <button type="submit" className="btn btn-primary ">Submit</button>
       </form>
    </div>
  );
};

export default ContractUs;