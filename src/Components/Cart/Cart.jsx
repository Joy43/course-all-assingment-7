/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourse}) => {
    console.log(selectedCourse);
    return (
        
        <div className="grid" >
<h1 className="text-lg font-bold">Credit Hour Remaining </h1>
<hr />
            <div>
                <h1 className="text-lg font-bold" >course Name</h1>
            <div>
            <h1 className="text-lg font-bold" > Total course:{selectedCourse.length}</h1>
          {
selectedCourse.map((course)=>(
    <ol>
        <li key={course.id}>{course.title}</li>
    </ol>
))
          }

        </div>
        <hr />

<div>
  <h1 className="text-lg font-bold" >  Total Credit Hour: h </h1>
</div>

<div>
    <h1>
        <h1 className= "text-lg font-bold">Total Price: usd</h1>
    </h1>
</div>
            </div>


        </div>
        
    );
};

export default Cart;