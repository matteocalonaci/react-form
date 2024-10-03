import { useState } from "react";

function click(){
    alert('Hai cliccatto su "More info"')
}
// VERSIONE CODICE PULITA
function Card({title, description, imgUrl, children, isVisitated}) {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([0,1,2]);

    return (
<div className="card bg-fuchsia-800 m-10 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
  <h2 className="p-2 text-lg md:text-xl lg:text-2xl"><b>{title}</b></h2>

  <img
    className="w-full h-64 md:h-80 lg:h-96 xl:h-128 object-cover"
    src={imgUrl}
    alt=""
  />

  <div className="bg-fuchsia-800 p-4">
    <p className="text-sm md:text-base lg:text-base">
      {description}
    </p>

    {isVisitated ? 
    <p className="pt-4"><span className=" bg-white rounded-2xl text-center text-black p-2"> <i className="fa-solid fa-check text-green-600"></i> <b>visitated</b></span> </p>:
    <p className="pt-4"><span className=" bg-white rounded-2xl text-center text-black p-2"> <i className="fa-solid fa-x text-red-600"></i> <b>not visitated</b></span> </p>
    }

        
    <p className="text-sm md:text-base lg:text-base text-red-500 p-2">{children}</p>
    <button className="p-2 bg-pink-800 border-2 rounded-2xl mx-1" onClick={click}>More info</button>
  </div>
</div>
    );
  }
  
  export default Card;