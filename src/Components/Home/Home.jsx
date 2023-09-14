import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';

const Home = () => {
    const [allCourse,setAllCourse]=useState([]);



    useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setAllCourse(data))
    },[])
    // console.log(setAllCourse);
    return (
        <div className='container  '>
            <div className="cart-container">
                {/* card */}
            <div className="cart">
                <img src="https://i.ibb.co/nk8WqV5/Rectangle-3.png" alt="" />
                <div>
                <h1>bascic c programming</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

<div className='inline-flex gap-4' >
    <h1 className='text-2xl'>$</h1>
  <p>Price:300 </p>
  <img src="" alt="" />
  <strong>Credit:</strong>

</div>
{/* button */}

<div>
    <button className='button-select'>select</button>
</div>
            </div>


            </div>
           {/* floting-cart */}

           
        </div>
    );
};

export default Home;