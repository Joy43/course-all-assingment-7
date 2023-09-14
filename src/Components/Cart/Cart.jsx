/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourse}) => {
    console.log(selectedCourse);
    return (
        
        <div>
            <h1> Total course:{selectedCourse.length}</h1>
          {
selectedCourse.map((course)=>(
    <ul>
        <li key={course.id}>{course.title}</li>
    </ul>
))
          }

        </div>
        
    );
};

export default Cart;