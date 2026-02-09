import React from "react";

function Greeting({ name, age }) {
  return (
    <div>
      <h2>Olá, {name}!</h2>
      <p>Você tem {age} anos.</p>
    </div>
  );
}

export default Greeting;

// import React from "react";

// function Greeting(props) {
//   return (
//     <div>
//       <h2>Olá, {props.name}!</h2>
//       <p>Você tem {props.age} anos.</p>
//     </div>
//   );
// }

// export default Greeting;

//kafka e rabbitMQ
