
import './App.css';
import { useState } from 'react';



function App() {
  let [uname, setUname]=useState('');
  let [password, setPassword]=useState('');
  let handleSubmit=(event)=>{
    event.preventDefault();
  }
  // let getUname=(event)=>{
  //   setUname(event.target.value)
  // }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <form onSubmit={handleSubmit}>
            <div className='text-start my-3'>
              <label>Username</label>
              <input type="text" className='form-control' onChange={(event)=>setUname(event.target.value)} value={uname}></input>
            </div>
            <div className='text-start my-3'>
              <label>Password</label>
              <input type="text" className='form-control' onChange={(event)=>setPassword(event.target.value)} value={password}></input>
            </div>
            <div className='text-start my-3'>
              <button> Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
