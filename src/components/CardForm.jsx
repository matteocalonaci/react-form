import { useState } from "react";
function CardForm({ addCity }) {
  const[formData, setFormData]= useState({
    title:"",
    description:"",
    imgUrl:"",
    isVisitated: false
  })
  const handleInputChange = (e)=>{
    const {name, value, type, checked} = e.target;
    const inputValue = type == "checkbox" ? checked : value
    setFormData({...formData, [name]: inputValue})
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      const city = {
        id: Math.random(),
        title: formData.title,
        description:
          formData.description,
        imgUrl:
       formData.imgUrl,
        isVisitated: formData.isVisitated,
      };
      addCity(city);
      console.log(city);
    };
  
    return (
      <div className="card-form w-96 p-10 rounded-2xl border flex justify-start">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-32 mb-10">
        <div>
    <label><b>City</b></label>
    <input type="text" name="title" className="bg-pink-200 rounded-2xl w-56 p-2"
    value={formData.title} onChange={handleInputChange}
    ></input>
    </div>
    <div>
    <label><b>Description</b></label>
    <textarea name="description" className="bg-pink-200 rounded-2xl w-56 p-2" value={formData.description} onChange={handleInputChange}></textarea>
    </div>       
    <div>
    <label><b>imgUrl</b></label>
    <input type="text" name="imgUrl" className="bg-pink-200 rounded-2xl w-56 p-2" value={formData.imgUrl} onChange={handleInputChange}></input>
    </div>
    <div>
    <label><b>Is visitated?</b></label>
    <input type="checkbox" name="isVisited"  className="mx-2" checked={formData.isVisitated} onChange={handleInputChange}></input>
    </div>
    

        <button type="submit" className="mt-5 p-2 rounded-2xl bg-pink-800 border-2">
          Add Card
        </button>
      </form>
      </div>
    );
  }
  export default CardForm;
  