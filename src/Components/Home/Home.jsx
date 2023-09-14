/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';

import Cart from '../Cart/Cart';

const Home = () => {
    const [allCourse,setAllCourse]=useState([]);
    const [selectedCourse,setSelectedCourse]=useState([])

// console.log(allCourse);

    useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setAllCourse(data))
    },[])

  const handleSelectCourse=(course)=>{
    setSelectedCourse([...selectedCourse,course]) 
  }
  
  
selectedCourse.forEach(()=>{
  
})

    return (
        <div className='container  flex gap-4 '>
            <div className="cart-container flex flex-wrap gap-4  ">
                {/* card */}
         {allCourse.map(course=>(
            
               <div key={course.id} className="cart items-center bg-white gap-4">
               <img src={course.image} alt="" />
               <div>
               <h1 className='text-lg font-bold'>{course.title}</h1>
               <p>{course.details}</p>
               </div>

<div className='inline-flex gap-4' >
   <h1 className='text-2xl'>$</h1>
 <p>Price:{course.price}$ </p>
 <img className='w-5 h-6' src="https://i.ibb.co/cJgSqXw/icons8-bookmark-50.png" alt="" />
 <strong>Credit:{course.credit}h</strong>

</div>
{/* button */}

<div>
<button onClick={()=>handleSelectCourse(course)} 
          className='button-select'>Select</button>
</div>
           </div>
         ))

         }


            </div>
           {/* floting-cart */}
<div>
<Cart selectedCourse={selectedCourse}> </Cart>
</div>

        </div>
    );
};


export default Home;