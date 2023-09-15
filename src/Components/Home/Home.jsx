/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';

import Cart from '../Cart/Cart';
// import swal from 'sweetalert';
import Swal from 'sweetalert2'


const Home = () => {
    const [allCourse,setAllCourse]=useState([]);
    const [selectedCourse,setSelectedCourse]=useState([]);
    const [reminingHour,setRemainingHour]=useState(0);
    const{totalcost,setTotalCost}=useState(0);

// console.log(allCourse);

    useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setAllCourse(data))
    },[])
// exit select iteam
  const handleSelectCourse=(course)=>{
    const isExit=selectedCourse.find((items)=> items.id===course.id);
    // let count=course.price;
    let countCredit=course.credit
   if(isExit){ 
    
     return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Are you selected the same course!',
      footer: '<a href="">Please select another course </a>'
    })
    }
   else{
    selectedCourse.forEach((item)=>{
  countCredit=countCredit+item.credit;
    });
    // console.log(countCredit);
   
    const totalRemainingCredit=14-countCredit;
setTotalCost(countCredit);
setRemainingHour(totalRemainingCredit);
    setSelectedCourse([...selectedCourse,course]) }
  }
  
  const count = selectedCourse.reduce((total, course) => total + course.price, 0);


    return (
        <div className='container  flex gap-4 '>
            <div className="cart-container flex flex-wrap gap-4  ">
                {/* card */}
         {allCourse.map(course=>(
            
               <div key={course.id} className="cart p-2 items-center bg-white gap-4">
               <img className='w-full' src={course.image} alt="" />
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
<button onClick={()=>handleSelectCourse (course)} 
          className='button-select'>Select</button>
</div>
           </div>
         ))

         }


            </div>
           {/* floting-cart */}
<div className='bg-white p-2 mr-3'>
<Cart selectedCourse={selectedCourse} count={count} reminingHour={reminingHour} totalcost={totalcost} > </Cart>
</div>

        </div>
    );
};


export default Home;