/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourse,count,reminingHour,totalCost}) => {
    console.log(reminingHour);
    return (
        
        <div className="grid" >
<h1 className="text-lg font-bold p-2 m-4 rounded-sm bg-slate-400 ">Credit Hour Remaining({reminingHour} )</h1>
<hr />
            <div>
                <h1 className="text-lg font-bold" >course Name</h1>
            <div>
            <h1 className="text-lg font-bold" > Total course:{selectedCourse.length}</h1>

         <div className="p-4 m-4 rounded-lg bg-slate-400 text-white">
         

         <ol className="list-decimal p-2">
    {selectedCourse.map((course) => (
      <li key={course.id}>{course.title}</li>
    ))}
  </ol>

 </div>

        </div>
        <hr/>

<div className="m-4 p-2  rounded-lg bg-slate-400">
<div>
  <h1 className="text-lg font-bold" >  Total Credit Hour:{totalCost} h </h1>
</div>

<div>
    <h1>
        <h1 className= "text-lg font-bold">Total Price:{count} usd</h1>
    </h1>
</div>
</div>
            </div>


        </div>
        
    );
};

export default Cart;